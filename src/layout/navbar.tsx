import Link from "next/link";
import styles from "@/layout/navbar.module.css";
import { useState, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const navBarRef = useRef<HTMLUListElement | null>(null);

  function handleHamburgerToggle() {
    if (hamburgerRef.current && navBarRef.current) {
      hamburgerRef.current.classList.toggle(styles.active);
      navBarRef.current.classList.toggle(styles.activeMobile);
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navBar}>
        <Link
          onClick={handleHamburgerToggle}
          href="/"
          className={`${styles.navBarLogo}`}
          aria-label="Strona główna"
        >
          LOGO
        </Link>
        <ul ref={navBarRef} className={styles.navBarLinks} role="navigation">
          <li className={styles.listItem}>
            <Link
              onClick={handleHamburgerToggle}
              href="/"
              className={`${styles.navBarLink}`}
              aria-label="Przejdź do strony głównej"
            >
              STRONA GŁÓWNA
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              onClick={handleHamburgerToggle}
              href="/about"
              className={`${styles.navBarLink}`}
              aria-label="Przejdź do sekcji o nas"
            >
              O NAS
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              onClick={handleHamburgerToggle}
              href="/offer"
              className={`${styles.navBarLink}`}
              aria-label="Przejdź do oferty"
            >
              OFERTA
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              onClick={handleHamburgerToggle}
              href="/contact"
              className={`${styles.navBarLink}`}
              aria-label="Przejdź do sekcji kontaktowej"
            >
              KONTAKT
            </Link>
          </li>
        </ul>
        <div
          ref={hamburgerRef}
          className={styles.hamburgerButton}
          onClick={handleHamburgerToggle}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="navbar-menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </div>
  );
}
