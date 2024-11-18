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
          width={400}
          height={300}
          src="/assets/images/ładowarka.png"
          alt="ładowarka kołowa"
        />
      </div>
    </div>
  );
}
