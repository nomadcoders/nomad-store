import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Button from "./Button";

const CART_QUERY = gql`
  {
    cart @client {
      id
    }
  }
`;

export default () => (
  <Query query={CART_QUERY}>
    {({ data }) => (
      <Button
        href="/cart"
        text={data.cart.length === 0 ? "Cart" : `Cart (${data.cart.length})`}
      />
    )}
  </Query>
);
