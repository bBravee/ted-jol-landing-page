import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import styles from "./SaleOfferDetails.module.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { OfferData } from "@/API/types/Offer.type";

export default function SaleOfferDetails({ offer }: { offer: OfferData }) {
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
    <div className={styles.productCardWrapper}>
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
            alt="Główne zdjęcie oferty - Mercedes-Benz Arocs 1845"
            loading="lazy"
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
              role="button"
              aria-label={`Kliknij, aby zobaczyć zdjęcie ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.truckInfo}>
          <h2 className={styles.offerName}>{offer.productName}</h2>
          <h3 className={styles.offerPrice}>{offer.price} zł</h3>
          <p className={styles.offerBasicInfo}>
            <span className={styles.highlight}>
              {offer.category === "Maszyny Budowlane"
                ? "Motogodziny"
                : "Przebieg"}
              :
            </span>
            {offer.mileage}{" "}
            {offer.category === "Maszyny Budowlane" ? "mth" : "km"}
            <span className={styles.redDot}></span>
            <span className={styles.highlight}> Rok produkcji:</span>{" "}
            {offer.yearOfProduction}
          </p>
          <hr className={styles.separator} />
          <h3>Wyposażenie:</h3>
          <div className={styles.additionalInfo}>
            {offer.details.map((detail) => (
              <p className={styles.infoItem} key={detail}>
                {detail}
              </p>
            ))}
          </div>
          <hr className={styles.separator} />
          <h3>Opis:</h3>
          <div dangerouslySetInnerHTML={{ __html: offer.description.html }} />
          <hr className={styles.separator} />
          <h3>Lokalizacja:</h3>
          <iframe
            className={styles.iframeMap}
            src="https://www.google.com/maps?q=Leśna+48,+26-200+Końskie&output=embed"
            height="450"
            loading="lazy"
          ></iframe>
          <div className={styles.buttons}>
            <a className={styles.button}>Ogłosznie Otomoto</a>
            <a
              className={styles.button}
              href="tel:451 006 457"
              aria-label="Zadzwoń: 451 006 457"
            >
              Zadzwoń: 451 006 457
            </a>
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
    </div>
  );
}
