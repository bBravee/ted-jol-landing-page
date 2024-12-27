import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <h3 id="footer-logo" className={styles.footerHeader}>
            LOGO
          </h3>
          <hr className={styles.underlineBlack} />
          <p className={styles.footerParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            varius porttitor hendrerit. Pellentesque varius consectetur magna
            vitae semper. Pellentesque aliquet id nunc eu congue.{" "}
          </p>
        </div>
        <div className={styles.footerCol}>
          <h3 id="footer-contact" className={styles.footerHeader}>
            Masz pytania?
          </h3>
          <hr className={styles.underlineBlack} />
          <address className={styles.siteMapContainer}>
            <a
              className={`${styles.singleContactData} ${styles.footerParagraph}`}
            >
              {" "}
              <Image
                className={styles.footerIcon}
                width={20}
                height={20}
                src="/assets/icons/location.svg"
                alt="Lokalizacja"
              />{" "}
              Leśna 48, 26-200 Końskie
            </a>
            <a
              href="mailto:zhu.tedjol@gmail.com"
              className={`${styles.singleContactData} ${styles.footerParagraph}`}
              aria-label="Wyślij email do zhu.tedjol@gmail.com"
            >
              {" "}
              <Image
                className={styles.footerIcon}
                width={20}
                height={20}
                src="/assets/icons/envelope.svg"
                alt="Email"
              />{" "}
              zhu.tedjol@gmail.com
            </a>
            <a
              href="tel:451 006 457"
              className={`${styles.singleContactData} ${styles.footerParagraph}`}
              aria-label="Zadzwoń pod numer 451 006 457"
            >
              {" "}
              <Image
                className={styles.footerIcon}
                width={20}
                height={20}
                src="/assets/icons/telephone.svg"
                alt="Telefon"
              />{" "}
              451 006 457
            </a>
          </address>
        </div>
        <div className={styles.footerColSmall}>
          <h3 id="footer-links" className={styles.footerHeader}>
            Odnośniki
          </h3>
          <hr className={styles.underlineBlack} />
          <div className={styles.siteMapContainer}>
            <Link
              href="/"
              className={`${styles.footerParagraph} link`}
              aria-labelledby="footer-links"
            >
              Strona główna
            </Link>
            <Link
              href="/about"
              className={`${styles.footerParagraph} link`}
              aria-labelledby="footer-links"
            >
              O nas
            </Link>
            <Link
              href="/offer"
              className={`${styles.footerParagraph} link`}
              aria-labelledby="footer-links"
            >
              Oferta
            </Link>
            <Link
              href="/contact"
              className={`${styles.footerParagraph} link`}
              aria-labelledby="footer-links"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
