import Title from "@/ui/Title/Title";
import styles from "./Offer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Offer() {
  const aboutTitle = "Zobacz, co możemy Ci zaoferować";
  const subtitle = "Nasza oferta";
  return (
    <div className={`${styles.offerWrapper} section-padding`}>
      <Title
        title={aboutTitle}
        subtitle={subtitle}
        descVisible={false}
        isCentered={true}
      />
      <div className={styles.offerRow}>
        <div className={styles.offerCard}>
          <div className={styles.cardCircle}></div>
          <div className={styles.cardHeader}>
            <Image
              className={styles.aboutImage}
              width={200}
              height={150}
              src="/assets/icons/excavator.svg"
              alt="Maszyny budowlane - ikona ładowarki kołowej"
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardBodyTitle}>Maszyny budowlane</h3>
            <p className={styles.cardBodyParagraph}>
              Oferujemy szeroki wybór maszyn budowlanych, takich jak ładowarki,
              koparki i inne urządzenia, które ułatwią pracę na każdym placu
              budowy.
            </p>
            <Link className={`${styles.readMore} link`} href="/contact">
              Zobacz więcej
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.offerCard}>
          <div className={styles.cardCircle}></div>
          <div className={styles.cardHeader}>
            <Image
              className={styles.aboutImage}
              width={200}
              height={150}
              src="/assets/icons/truck.svg"
              alt="Samochody ciężarowe - ikona ciężarówki"
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardBodyTitle}>Samochody ciężarowe</h3>
            <p className={styles.cardBodyParagraph}>
              W naszej ofercie znajdziesz samochody ciężarowe o wysokiej
              niezawodności, idealne do transportu i pracy w trudnych warunkach.
            </p>
            <Link className={`${styles.readMore} link`} href="/offer">
              Zobacz więcej
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
