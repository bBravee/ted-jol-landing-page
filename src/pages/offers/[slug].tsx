import { allOffers } from "@/API/graphql/allOffers";
import { singleOffer } from "@/API/graphql/singleOffer";
import { OfferData } from "@/API/types/Offer.type";
import SaleOfferDetails from "@/components/Offer/SaleOfferDetails/SaleOfferDetails";
import { GraphQLClient } from "graphql-request";

export async function getStaticProps(context: any) {
  const graphConnect = new GraphQLClient(process.env.ENDPOINT as string);

  const { slug } = context.params;

  const variables = {
    slug,
  };
  const response: { offer: OfferData } = await graphConnect.request(
    singleOffer,
    variables
  );

  if (!response.offer) {
    return {
      notFound: true,
    };
  }

  return {
    props: response,
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const graphConnect = new GraphQLClient(process.env.ENDPOINT as string);
  const response: { offers: OfferData[] } = await graphConnect.request(
    allOffers
  );

  const paths = response.offers.map((offer: OfferData) => {
    return { params: { slug: offer.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export default function SaleOfferSlug(data: { offer: OfferData }) {
  console.log(data);
  return <SaleOfferDetails />;
}
