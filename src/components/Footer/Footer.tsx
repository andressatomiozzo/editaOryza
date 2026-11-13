import { useLanguageContext } from "../../context/LanguageContext";

import LogoIcon from "../../assets/icons/logo01.svg?react";
import EmailIcon from "../../assets/icons/email.svg?react";
import WhatsAppIcon from "../../assets/icons/whatsApp.svg?react";
import LinkedInIcon from "../../assets/icons/linkedIn.svg?react";
import InstagranIcon from "../../assets/icons/instagran.svg?react";
import LocalizationIcon from "../../assets/icons/localization.svg?react";

import styles from "./Footer.module.css";

type FooterProps = {
  footerRef: React.RefObject<HTMLElement | null>;
};

const Footer = ({ footerRef }: FooterProps) => {
  const { t } = useLanguageContext();

  return (
    <footer ref={footerRef} className={`container containerFlex ${styles.container}`}>
      <a href="#" aria-label="Top of page" className={styles.logo}>
        <LogoIcon />
      </a>

      <h2 className="read-only">{t.footer.contact}</h2>
      <ul aria-label="contact" className={styles.contact}>
        <li>
          <a href="mailto:editaoryza@gmail.com" target="_blank" rel="external" aria-label="E-mail">
            <EmailIcon />
            <span>editaoryza@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5551995489075?text=Olá!%20Vim%20pelo%20site."
            target="_blank"
            rel="external"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
            <span>+55 (51) 99548-9075</span>
          </a>
        </li>
      </ul>

      <div className={styles.socialMedia}>
        <h3>{t.footer.follow}</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/isabel-cristina-cadavid-sanchez-9078172a/"
              target="_blank"
              rel="external"
              aria-label="LindekIn"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/editaoryza/" target="_blank" rel="external" aria-label="Instagran">
              <InstagranIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.location}>
        <LocalizationIcon aria-label="Pin icon" />
        <span>{t.footer.location}</span>
      </div>
    </footer>
  );
};

export default Footer;
