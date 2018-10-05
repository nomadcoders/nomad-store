import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const CART_QUERY = gql`
  {
    cart @client {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
