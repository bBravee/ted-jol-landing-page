import SaleOffer from "@/components/SaleOfferCard/SaleOfferCard";
import TitlePanel from "@/layout/TitlePanel";
import { OfferData } from "@/API/types/Offer.type";
import { gql, GraphQLClient } from "graphql-request";
import { allOffers } from "@/API/graphql/allOffers";

export async function getStaticProps() {
  const graphConnect = new GraphQLClient(process.env.ENDPOINT as string, {
    headers: {
      Authorization: process.env.DEFAULT_TOKEN as string,
    },
  });
  const response: { offers: OfferData[] } = await graphConnect.request(
    allOffers
  );
  return { props: { offers: response.offers } };
}

export default function Offer(data: { offers: OfferData[] }) {
  return (
    <>
      <TitlePanel titleText="Oferta" />
      <SaleOffer offersData={data} fullOffer={true} />
    </>
  );
}
