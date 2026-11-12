import React from "react";

const useCLickOutside = (refs: React.RefObject<HTMLElement | null>[], handler: () => void) => {
  const handlerRef = React.useRef(handler);
  const refsRef = React.useRef(refs);

  React.useEffect(() => {
    handlerRef.current = handler;
    refsRef.current = refs;
  });

  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (refsRef.current.some((ref) => ref.current?.contains(event.target as Node))) {
        return;
      }
      handlerRef.current();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);
};

export default useCLickOutside;
