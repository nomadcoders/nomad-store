import Head from "next/head";
import { withRouter } from "next/router";

const Movie = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    <h1>{props.title}</h1>
    <p>lalalalalala</p>
  </div>
);

Movie.getInitialProps = async () => {
  return { title: "Lolololololo" };
};

export default withRouter(Movie);
