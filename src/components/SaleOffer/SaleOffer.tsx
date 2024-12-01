import { OfferData } from "@/types/Offer.type";
import styles from "@/components/SaleOffer/SaleOffer.module.css";
import Title from "@/ui/Title/Title";
import Image from "next/image";

export default function SaleOffer({
  offersData,
}: {
  offersData: { offers: OfferData[] };
}) {
  return (
    <div className="section-padding">
      <Title
        title="Rzuć okiem na nasze najnowsze oferty"
        subtitle="Aktualności"
        isCentered={true}
        descVisible={false}
      />
      <div className={styles.offersList}>
        {offersData.offers.map((offer) => (
          <div className={styles.offerItem} key={offer.id}>
            <div className={styles.offerImgWrapper}>
              <Image
                className={styles.offerImage}
                src={offer.images[0].url}
                fill
                alt="productimg"
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
              <button className={styles.offerItemButton}>Szczegóły</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
