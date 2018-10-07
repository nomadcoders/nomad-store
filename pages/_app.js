import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import convertDataURIToBinary from "../lib/base64";
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(swReg => {
          console.log("SW Registered: ", swReg);
          swReg.pushManager.getSubscription().then(subscription => {
            if (subscription === null) {
              Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                  swReg.pushManager
                    .subscribe({
                      userVisibleOnly: true,
                      applicationServerKey: convertDataURIToBinary(
                        "BMQl6dWfLFq-QWi4XR1SAWSzBSMRSenCGO7ktFoazGf7umgwPcvnp_r7xmJyBKa_0av4reD1EJCVCyPu4qu2X80"
                      )
                    })
                    .then(pushSubscriptionObject => {
                      console.log(JSON.stringify(pushSubscriptionObject));
                    });
                }
              });
            } else {
              console.log(JSON.stringify(subscription));
            }
          });
        })
        .catch(error => console.log("Can't register SW: ", error));
    }
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <NProgressStyles color="black" spinner={true} />
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
            <Footer>This is important</Footer>
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withNProgress()(withApollo(MyApp));
