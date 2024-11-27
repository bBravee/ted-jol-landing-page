import Title from "@/ui/Title/Title";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  const aboutTitle = "O nas - czym się zajmujemy?";
  const subtitle = "Kim jesteśmy?";
  return (
    <div className={`${styles.aboutWrapper} component-vertical-spacing`}>
      <div className={styles.header}>
        <Title title={aboutTitle} subtitle={subtitle} isCentered={false} />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.aboutImage}
          src="/assets/images/formula-1-2701335_1920.jpg"
          alt="ładowarka kołowa"
          fill
        />
      </div>
    </div>
  );
}
