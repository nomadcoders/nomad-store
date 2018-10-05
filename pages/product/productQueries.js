import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const PRODUCT_QUERY = gql`
  query productQuery($id: ID!) {
    product(where: { id: $id }) {
      ...ProductItems
      description
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const TOGGLE_CART = gql`
  mutation toggleCart($id: ID!) {
    toggleProduct(id: $id) @client
  }
`;
