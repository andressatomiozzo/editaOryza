import React from "react";
import useMedia from "./useMedia";

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = React.useState<string>(ids[0] ?? "");

  const media52rem = useMedia("(max-width: 52rem)");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setActive(entrada.target.id);
          }
        });
      },
      { rootMargin: media52rem ? "-0px 0px -80% 0px" : "50% 0px -80% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, media52rem]);

  return active;
};
