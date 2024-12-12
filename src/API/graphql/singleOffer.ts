import { gql } from "graphql-request";

export const singleOffer = gql`
  query ($slug: String) {
    offer(where: { slug: $slug }) {
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
