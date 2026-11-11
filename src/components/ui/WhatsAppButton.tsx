import React from "react";

import WhatsAppIcon from "../../assets/icons/whatsApp.svg?react";

import styles from "./WhatsAppButton.module.css";

type WhatsAppButtonProps = {
  footerRef: React.RefObject<HTMLElement | null>;
};

export default function WhatsAppButton({ footerRef }: WhatsAppButtonProps) {
  const [bottom, setBottom] = React.useState(20);

  React.useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const alturaVisivel = window.innerHeight - entry.boundingClientRect.top;
          setBottom(alturaVisivel + 20);
        } else {
          setBottom(20);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [footerRef]);

  return (
    <a
      href="https://wa.me/5551995782348?text=Olá!%20Vim%20pelo%20site."
      target="_blank"
      rel="external"
      aria-label="WhatsApp"
      className={styles.button}
      style={{ bottom }}
    >
      <WhatsAppIcon />
    </a>
  );
}
