import styles from "@/layout/TitlePanel.module.css";

export default function TitlePanel({ titleText }: { titleText: string }) {
  return (
    <div className={styles.titlePanelWrapper}>
      <h3 className={styles.titlePanelTex}>{titleText}</h3>
    </div>
  );
}
