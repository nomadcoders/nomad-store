import { gql } from "apollo-boost";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
  }
`;
