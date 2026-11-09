import React from "react";
import styles from "./Carrossel.module.css";
import useMedia from "../../hooks/useMedia";

type ICarrossel = React.PropsWithChildren<{
  intervalo?: number; // tempo do autoplay em ms
}>;

const Carrossel = ({ children, intervalo = 5000 }: ICarrossel) => {
  const media30rem = useMedia("(max-width: 30rem)"); // Parar autoplay em celulares
  const items = React.Children.toArray(children);
  const indexTotal = items.length;

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const autoplayId = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setCurrentIndex((index + indexTotal) % indexTotal);
  };

  // AUTOPLAY
  const stopAutoplay = React.useCallback(() => {
    if (autoplayId.current) clearInterval(autoplayId.current);
  }, []);
  const startAutoplay = React.useCallback(() => {
    stopAutoplay();
    if (indexTotal < 2) return; // nada para rodar
    autoplayId.current = setInterval(() => setCurrentIndex((atual) => (atual + 1) % indexTotal), intervalo);
  }, [indexTotal, intervalo, stopAutoplay]);

  React.useEffect(() => {
    startAutoplay();
    if (media30rem) stopAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay, media30rem]);

  // SWIPE => celulares
  const inicioX = React.useRef<number | null>(null);
  const LIMITE = 50; // px mínimos para contar como swipe

  const onPointerDown = (e: React.PointerEvent) => {
    inicioX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (inicioX.current === null) return;
    const diff = e.clientX - inicioX.current;
    inicioX.current = null;

    if (Math.abs(diff) > LIMITE) {
      goTo(diff < 0 ? currentIndex + 1 : currentIndex - 1);
    }
  };

  const onPointerCancel = () => {
    inicioX.current = null;
  };

  if (indexTotal === 0) return null;

  return (
    <div
      className={styles.container}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      role="region"
      aria-roledescription="carrossel"
    >
      <ul
        className={styles.viewport}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {items.map((item, i) => {
          let classe = styles.hidden;

          if (i === currentIndex) classe = styles.active;
          else if (i === (currentIndex - 1 + indexTotal) % indexTotal) classe = styles.prev;
          else if (i === (currentIndex + 1) % indexTotal) classe = styles.next;

          const ativo = i === currentIndex;

          return (
            <li key={i} className={`${styles.slide} ${classe}`} aria-hidden={!ativo} onClick={() => !ativo && goTo(i)}>
              {item}
            </li>
          );
        })}
      </ul>

      <ul className={styles.dotsContainer}>
        {items.map((_, i) => (
          <li key={i}>
            <button
              type="button"
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
              aria-label={`Ir para o item ${i + 1}`}
              aria-current={i === currentIndex}
              onClick={() => goTo(i)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrossel;
