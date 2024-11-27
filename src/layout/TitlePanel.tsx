import styles from "@/layout/TitlePanel.module.css";
import Image from "next/image";

export default function TitlePanel() {
  return (
    <div className={styles.titlePanelWrapper}>
      <h3 className={styles.titlePanelTex}>O NAS</h3>
    </div>
  );
}
