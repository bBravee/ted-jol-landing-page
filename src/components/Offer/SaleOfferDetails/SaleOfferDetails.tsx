import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import styles from "./SaleOfferDetails.module.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function SaleOfferDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [
    { src: "/assets/images/bramowiec.jpg" },
    { src: "/assets/images/ładowarka.png" },
    { src: "/assets/images/bramowiec.jpg" },
    { src: "/assets/images/ładowarka.png" },
    { src: "/assets/images/ładowarka.png" },
    { src: "/assets/images/ładowarka.png" },
    { src: "/assets/images/ładowarka.png" },
  ];

  return (
    <div className={styles.truckCard}>
      <div
        className={styles.mainImgWrapper}
        onClick={() => {
          setPhotoIndex(0);
          setIsOpen(true);
        }}
      >
        <Image
          className={styles.mainImage}
          src={images[0].src}
          alt="Truck Image"
          fill
        />
      </div>

      <div className={styles.thumbnails}>
        {images.map((src, index) => (
          <Image
            key={index}
            className={styles.thumbnail}
            src={src.src}
            alt={`Thumbnail ${index}`}
            width={150}
            height={100}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      <div className={styles.truckInfo}>
        <h2 className={styles.offerName}>Mercedes-Benz Arocs 1845</h2>
        <p className={styles.offerBasicInfo}>
          <span className={styles.highlight}>Przebieg:</span> 500 000 km
          <span className={styles.highlight}> Rok produkcji:</span> 2016
        </p>
        <h3 className={styles.offerPrice}>191 100 zł</h3>

        <div className={styles.additionalInfo}>
          <p className={styles.infoItem}>Napęd 4x4</p>
          <p className={styles.infoItem}>Automatyczna skrzynia biegów</p>
          <p className={styles.infoItem}>Kabina sypialna</p>
          <p className={styles.infoItem}>Ogrzewanie postojowe</p>
          <p className={styles.infoItem}>Tachograf</p>
          <p className={styles.infoItem}>Retarder</p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.actionButton}>Otomoto</button>
          <button className={styles.actionButton}>Zadzwoń</button>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images}
        index={photoIndex}
        plugins={[Thumbnails]}
      />
    </div>
  );
}
