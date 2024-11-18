import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { gql, GraphQLClient } from "graphql-request";
import { OfferData } from "@/types/Offer.type";
import About from "../components/Home/About";
import Offer from "@/components/Offer/Offer";
import Contact from "@/components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

// export async function getStaticProps() {
//   const graphConnect = new GraphQLClient(process.env.ENDPOINT as string);
//   const response: { offers: OfferData[] } = await graphConnect.request(gql`
//     query MyQuery {
//       offers {
//         category
//         id
//         mileage
//         price
//         productName
//         test
//       }
//     }
//   `);
//   return { props: { offers: response.offers } };
// }

export default function Home(data: { offers: OfferData[] }) {
  return (
    <>
      <About />
      <Offer />
      <Contact />
      {/* <main className={`${styles.main} ${inter.className}`}>
        {data.offers.map((offer) => {
          return (
            <div key={offer.id}>
              <h1>{offer.productName}</h1>
              <h2>{offer.price}</h2>
              <p>{offer.mileageOrMth}</p>
              <p>{offer.price}</p>
            </div>
          );
        })}
      </main> */}
    </>
  );
}
