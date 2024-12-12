import { gql } from "graphql-request";

export const allOffers = gql`
  query Offers {
    offers {
      category
      id
      mileage
      price
      productName
      slug
      details
      yearOfProduction
      images {
        url
      }
    }
  }
`;
