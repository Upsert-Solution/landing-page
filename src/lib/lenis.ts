import type Lenis from "lenis";

type LenisWindow = Window & {
  __lenis?: Lenis;
};

export const setLenis = (lenis: Lenis | null) => {
  if (typeof window === "undefined") {
    return;
  }

  const typedWindow = window as LenisWindow;

  if (lenis) {
    typedWindow.__lenis = lenis;
  } else {
    delete typedWindow.__lenis;
  }
};

export const getLenis = (): Lenis | null => {
  if (typeof window === "undefined") {
    return null;
  }

  return (window as LenisWindow).__lenis ?? null;
};
