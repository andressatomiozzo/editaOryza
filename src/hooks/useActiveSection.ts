import React from "react";

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = React.useState<string>(ids[0] ?? "");

  React.useEffect(() => {
    const update = () => {
      const linha = window.innerHeight * 0.5;
      let atual = ids[0] ?? "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= linha) {
          atual = id;
        }
      }

      // no fim da página, a última seção pode nunca chegar na linha
      const chegouNoFim =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (chegouNoFim) atual = ids[ids.length - 1] ?? atual;

      setActive(atual);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
};