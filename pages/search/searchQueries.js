import { gql } from "apollo-boost";

export const SEARCH_QUERY = gql`
  query searchQuery($searchTerm: String!) {
    products(
      where: {
        OR: [
          { name_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      name
      detail
      price
      photo {
        url
      }
    }
  }
`;
