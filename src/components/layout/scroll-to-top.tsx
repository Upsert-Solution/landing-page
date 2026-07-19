"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { useLenisRef } from "@/src/components/providers/lenis-provider";

const ScrollToTop = () => {
  const lenisRef = useLenisRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_12px_30px_rgba(46,91,255,0.35)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(46,91,255,0.35)] focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(46,91,255,0.25)]"
      onClick={() => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { duration: 2.2 });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;