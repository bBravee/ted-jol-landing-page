import { OfferData } from "@/API/types/Offer.type";
import styles from "@/components/SaleOfferCard/SaleOfferCard.module.css";
import Title from "@/ui/Title/Title";
import Image from "next/image";
import Link from "next/link";

export default function SaleOfferCard({
  offersData,
  fullOffer,
}: {
  offersData: { offers: OfferData[] };
  fullOffer: boolean;
}) {
  const offersArray = fullOffer
    ? offersData.offers
    : offersData.offers.slice(0, 3);

  return (
    <div className="section-padding">
      <Title
        title="Rzuć okiem na nasze najnowsze oferty"
        subtitle="Aktualności"
        isCentered={true}
        descVisible={false}
      />
      <div className={styles.offersList}>
        {offersArray.map((offer) => (
          <div className={styles.offerItem} key={offer.id}>
            <div className={styles.offerImgWrapper}>
              <Image
                className={styles.offerImage}
                src={offer.images[0].url}
                fill
                alt={`Zdjęcie ${offer.productName} - ${offer.category}`}
              />
            </div>
            <div className={styles.offerDetails}>
              <p className={styles.offerSubtitle}>{offer.category}</p>
              <h4 className={styles.offerTitle}>{offer.productName}</h4>
              <p className={styles.offerAdditionalInfo}>
                {offer.yearOfProduction}
                <span className={styles.redDot}> • </span> {offer.mileage} km
              </p>
              <p className={styles.offerPrice}>{offer.price} zł</p>
            </div>
            <Link
              className={`${styles.offerItemLink} link`}
              href={`/offers/${offer.slug}`}
            >
              <button className={styles.offerItemButton}>Szczegóły</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
