import { useEffect, useRef, useState } from "react";

/**
 * `seen` queda en true la primera vez que el elemento entra en pantalla
 * (para animaciones de entrada); `inView` sigue el estado actual
 * (para pausar animaciones continuas fuera de pantalla).
 */
export const useInView = <T extends Element>(threshold = 0.15) => {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, seen, inView };
};
