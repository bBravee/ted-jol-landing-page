import Title from "@/ui/Title/Title";
import styles from "./ContactComponent.module.css";
import Image from "next/image";
import { FormEvent, useState } from "react";
import TitlePanel from "@/layout/TitlePanel";

export default function ContactComponent() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const contactTitle = "Skontaktuj się z nami";
  const subtitle = "Kontakt";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullMessage = `${message}\n\n\ ${name}\n${phone}`;
    const mailtoLink = `mailto:jakub.kusmierczyk@op.pl?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(fullMessage)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <section
        className={`${styles.contactSection} section-padding`}
        aria-labelledby="contact-title"
      >
        <Title title={contactTitle} subtitle={subtitle} descVisible={false} />
        <div className={styles.contactWrapper}>
          <address className={styles.contactInfo}>
            <h3>Dane kontaktowe</h3>
            <div className={styles.contactIconsWrapper}>
              <p className={styles.singleContactData}>
                {" "}
                <Image
                  width={30}
                  height={30}
                  src="/assets/icons/location.svg"
                  alt="Lokalizacja"
                />{" "}
                Leśna 48, 26-200 Końskie
              </p>
              <p className={styles.singleContactData}>
                {" "}
                <Image
                  width={30}
                  height={30}
                  src="/assets/icons/envelope.svg"
                  alt="Email"
                />{" "}
                <a className="link" href="mailto:zhu.tedjol@gmail.com">
                  zhu.tedjol@gmail.com
                </a>
              </p>
              <p className={styles.singleContactData}>
                {" "}
                <Image
                  width={30}
                  height={30}
                  src="/assets/icons/telephone.svg"
                  alt="Telefon"
                />{" "}
                <a className="link" href="tel:+4851106457">
                  451 006 457
                </a>
              </p>
            </div>
          </address>
          <div className={styles.contactFormWrapper}>
            <h3 className={styles.formTitle}>Zostaw nam wiadomość</h3>
            <hr className={styles.underlineRed} />
            <form
              onSubmit={handleSubmit}
              className={styles.contactForm}
              aria-labelledby="form-title"
            >
              <input
                className={styles.formInput}
                type="text"
                placeholder="Imię i nazwisko*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={styles.formInput}
                type="tel"
                placeholder="Numer telefonu*"
                required
                pattern="\d{9,15}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className={styles.formInput}
                name="subject"
                type="text"
                placeholder="Temat*"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className={styles.formInput}
                name="body"
                placeholder="Wiadomość*"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className={styles.submitButtonWrapper}>
                <button
                  className={styles.submitButton}
                  type="submit"
                  aria-label="Wyślij formularz kontaktowy"
                >
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <iframe
        className={styles.iframeMap}
        src="https://www.google.com/maps?q=Leśna+48,+26-200+Końskie&output=embed"
        height="450"
        loading="lazy"
      ></iframe>
    </>
  );
}
