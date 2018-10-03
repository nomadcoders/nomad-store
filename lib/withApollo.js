import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { API_URL } from "../config";

export default withApollo(
  () =>
    new ApolloClient({
      uri: API_URL
    })
);
