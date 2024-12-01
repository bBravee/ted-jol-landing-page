import Title from "@/ui/Title/Title";
import styles from "./AboutAdvantages.module.css";
import Image from "next/image";

export default function AboutAdvantages() {
  return (
    <>
      <div className={styles.advantagesWrapper}>
        <Title
          title="Co nas wyróżnia"
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
              alt="Błyskawica"
            />
            <h3>Szybka realizacja</h3>
            <p className={styles.advantagesItemParagraph}>
              Zapewniamy szybkie i efektywne realizacje, aby maksymalnie skrócić
              czas obsługi naszych klientów.
            </p>
          </div>
          <div className={styles.advantagesItem}>
            <Image
              width={60}
              height={60}
              src="/assets/icons/puzzle.svg"
              alt="Puzzle"
            />
            <h3>Elastyczność</h3>
            <p className={styles.advantagesItemParagraph}>
              {" "}
              Oferujemy dopasowane rozwiązania, dostosowane do unikalnych
              potrzeb każdego klienta, aby spełnić jego oczekiwania.
            </p>
          </div>
          <div className={styles.advantagesItem}>
            <Image
              width={60}
              height={60}
              src="/assets/icons/lock.svg"
              alt="Kłódka"
            />
            <h3>Zaufanie</h3>
            <p className={styles.advantagesItemParagraph}>
              Budujemy relacje oparte na uczciwości i otwartości, zapewniając
              pełną transparentność warunków sprzedaży.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
