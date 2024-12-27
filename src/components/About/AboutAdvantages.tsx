import Title from "@/ui/Title/Title";
import styles from "./AboutAdvantages.module.css";
import Image from "next/image";

export default function AboutAdvantages() {
  return (
    <>
      <div className={styles.advantagesWrapper}>
        <Title
          title="Dlaczego warto nam zaufać?"
          subtitle="Nasze wartości"
          isCentered={true}
          descVisible={false}
        />
        <div className={styles.advantagesRow}>
          <div className={styles.advantagesItem}>
            <Image
              width={60}
              height={60}
              src="/assets/icons/thunderbolt.svg"
              alt="Ikona szybkiej realizacji zamówień dla maszyn budowlanych"
            />
            <h3>Szybka realizacja</h3>
            <p className={styles.advantagesItemParagraph}>
              Zapewniamy błyskawiczne i efektywne realizacje zamówień na maszyny
              budowlane i samochody ciężarowe, aby maksymalnie skrócić czas
              obsługi naszych klientów.
            </p>
          </div>
          <div className={styles.advantagesItem}>
            <Image
              width={60}
              height={60}
              src="/assets/icons/puzzle.svg"
              alt="Ikona elastycznych rozwiązań dopasowanych do potrzeb klienta"
            />
            <h3>Elastyczność</h3>
            <p className={styles.advantagesItemParagraph}>
              Oferujemy rozwiązania dostosowane do unikalnych potrzeb każdego
              klienta, w tym personalizowane oferty na sprzedaż maszyn
              budowlanych i pojazdów użytkowych.
            </p>
          </div>
          <div className={styles.advantagesItem}>
            <Image
              width={60}
              height={60}
              src="/assets/icons/lock.svg"
              alt="Ikona zaufania i transparentności w sprzedaży maszyn"
            />
            <h3>Zaufanie</h3>
            <p className={styles.advantagesItemParagraph}>
              Budujemy relacje oparte na uczciwości i otwartości, zapewniając
              pełną transparentność w procesie sprzedaży.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
