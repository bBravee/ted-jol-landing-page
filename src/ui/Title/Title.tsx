import styles from "./Title.module.css";

export default function About({
  title,
  subtitle,
  descVisible = true,
  isCentered = false,
}: {
  title: string;
  subtitle: string;
  descVisible?: boolean;
  isCentered?: boolean;
}) {
  return (
    <div
      className={`${styles.titleWrapper} ${isCentered ? styles.centered : ""}`}
    >
      <span className={styles.subtitle}>{subtitle}</span>
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.underline} />
      {descVisible && (
        <p className={styles.aboutUsDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius
          porttitor hendrerit. Pellentesque varius consectetur magna vitae
          semper. Pellentesque aliquet id nunc eu congue. Proin at lacus vel
          felis pulvinar scelerisque quis quis urna. Phasellus tempor enim
          consequat tellus accumsan fringilla.
        </p>
      )}
    </div>
  );
}
