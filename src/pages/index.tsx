import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { gql, GraphQLClient } from "graphql-request";
import { OfferData } from "@/types/Offer.type";
import About from "../components/About/AboutComponent";
import Offer from "@/components/Offer/Offer";
import Contact from "@/components/Contact/ContactComponent";
import TitlePanel from "@/layout/TitlePanel";
import ContactComponent from "@/components/Contact/ContactComponent";
import AboutComponent from "../components/About/AboutComponent";
import SaleOffer from "@/components/SaleOffer/SaleOffer";

const inter = Montserrat({ subsets: ["latin"] });

export async function getStaticProps() {
  const graphConnect = new GraphQLClient(process.env.ENDPOINT as string);
  const response: { offers: OfferData[] } = await graphConnect.request(gql`
    query MyQuery {
      offers {
        category
        id
        mileage
        price
        productName
        details
        yearOfProduction
        images {
          url
        }
      }
    }
  `);
  return { props: { offers: response.offers } };
}

export default function Home(data: { offers: OfferData[] }) {
  console.log(data);
  return (
    <>
      <TitlePanel titleText="Home" />
      <AboutComponent />
      <Offer />
      <SaleOffer offersData={data} />
      <ContactComponent />
    </>
  );
}
