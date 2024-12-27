import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div
          className={`${styles.image} ${styles.image1}`}
          aria-hidden="true"
        ></div>
        <div
          className={`${styles.image} ${styles.image2}`}
          aria-hidden="true"
        ></div>
        <div
          className={`${styles.image} ${styles.image3}`}
          aria-hidden="true"
        ></div>
        <div className={styles.heroContent}>
          <h1>
            Sprzedaż samochodów ciężarowych <br /> i maszyn budowlanych
          </h1>
          <p>
            Oferujemy szeroki wybór maszyn budowlanych i samochodów ciężarowych{" "}
            <br />
            dostosowanych do Twoich potrzeb biznesowych.
          </p>
          <Link href="/offer" className={styles.heroButton}>
            Sprawdź ofertę
          </Link>
        </div>
      </section>
    </>
  );
}
