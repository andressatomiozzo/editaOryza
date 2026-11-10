import { useEffect, useRef, useState } from "react";

const useScrollY = <T extends HTMLElement = HTMLDivElement>(
  margin = 100, // how many px the element should "enter" the screen before animating
  repeat = false
) => {
  const ref = useRef<T>(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const verify = () => {
      const element = ref.current;
      if (!element) return;

      // posição do elemento em relação à janela, recalculada a cada checagem
      const topo = element.getBoundingClientRect().top;
      const surpassed = topo < window.innerHeight - margin;

      if (surpassed) {
        setPassed(true);
      } else if (repeat) {
        setPassed(false);
      }
    };

    verify(); // checa já na montagem
    window.addEventListener("scroll", verify, { passive: true });
    window.addEventListener("resize", verify); // recalcula ao girar o celular

    return () => {
      window.removeEventListener("scroll", verify);
      window.removeEventListener("resize", verify);
    };
  }, [margin, repeat]);

  return { ref, passed };
};

export default useScrollY