import { Montserrat } from "next/font/google";
import { GraphQLClient } from "graphql-request";
import { OfferData } from "@/API/types/Offer.type";
import Offer from "@/components/Offer/Offer";
import TitlePanel from "@/layout/TitlePanel";
import ContactComponent from "@/components/Contact/ContactComponent";
import AboutComponent from "../components/About/AboutComponent";
import { allOffers } from "@/API/graphql/allOffers";
import SaleOfferCard from "@/components/SaleOfferCard/SaleOfferCard";
import Hero from "@/components/Hero/Hero";

const inter = Montserrat({ subsets: ["latin"] });

export async function getStaticProps() {
  const graphConnect = new GraphQLClient(process.env.ENDPOINT as string);
  const response: { offers: OfferData[] } = await graphConnect.request(
    allOffers
  );
  return { props: { offers: response.offers } };
}

export default function Home(data: { offers: OfferData[] }) {
  console.log(data);
  return (
    <>
      <Hero />
      <AboutComponent />
      <Offer />
      <SaleOfferCard offersData={data} fullOffer={false} />
      <ContactComponent />
    </>
  );
}
