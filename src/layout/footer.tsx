import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeader}>LOGO</h3>
          <hr className={styles.underlineBlack} />
          <p className={styles.footerParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            varius porttitor hendrerit. Pellentesque varius consectetur magna
            vitae semper. Pellentesque aliquet id nunc eu congue.{" "}
          </p>
        </div>
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeader}>Masz pytania?</h3>
          <hr className={styles.underlineBlack} />
          <p
            className={`${styles.singleContactData} ${styles.footerParagraph}`}
          >
            {" "}
            <Image
              width={20}
              height={20}
              src="/assets/icons/location.svg"
              alt="Ikona lokalizacji"
            />{" "}
            Leśna 48, 26-200 Końskie
          </p>
          <p
            className={`${styles.singleContactData} ${styles.footerParagraph}`}
          >
            {" "}
            <Image
              width={20}
              height={20}
              src="/assets/icons/envelope.svg"
              alt="Ikona koperty"
            />{" "}
            zhu.tedjol@gmail.com
          </p>
          <p
            className={`${styles.singleContactData} ${styles.footerParagraph}`}
          >
            {" "}
            <Image
              width={20}
              height={20}
              src="/assets/icons/telephone.svg"
              alt="Ikona telefonu"
            />{" "}
            451 006 457
          </p>
        </div>
        <div className={styles.footerColSmall}>
          <h3 className={styles.footerHeader}>Odnośniki</h3>
          <hr className={styles.underlineBlack} />
          <div className={styles.siteMapContainer}>
            <Link href="/" className={`${styles.footerParagraph} link`}>
              Strona główna
            </Link>
            <Link href="/about" className={`${styles.footerParagraph} link`}>
              O nas
            </Link>
            <Link href="/offer" className={`${styles.footerParagraph} link`}>
              Oferta
            </Link>
            <Link href="/contact" className={`${styles.footerParagraph} link`}>
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
