"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { cn } from "@/src/lib/utils";

type ProjectPreviewProps = {
  url: string;
  fallbackImage: string;
  title: string;
  accentClass?: string;
};

const LOAD_TIMEOUT_MS = 1000; 
const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 900;

const ProjectPreview = ({ url, fallbackImage, title, accentClass }: ProjectPreviewProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const [scale, setScale] = useState(0.25);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => setScale(node.offsetWidth / DESKTOP_WIDTH);
    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStatus((prev) => (prev === "loading" ? "failed" : prev));
    }, LOAD_TIMEOUT_MS);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [url]);

  const handleLoad = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus("loaded");
  };

  const handleError = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus("failed");
  };

  return (
    <div ref={containerRef} className={cn("relative h-56 w-full overflow-hidden", accentClass)}>
      {/* Loading skeleton — shown only while status is "loading", not the fallback image */}
      {status === "loading" && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface-2 to-surface-3" />
      )}

      {/* Fallback image — only rendered if the iframe genuinely failed or timed out */}
      {status === "failed" && (
        <Image src={fallbackImage} alt={title} fill className="object-cover object-top" />
      )}

      <div
        className={cn(
          "pointer-events-none absolute left-0 top-0 origin-top-left transition-opacity duration-500",
          status === "loaded" ? "opacity-100" : "opacity-0",
        )}
        style={{ width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, transform: `scale(${scale})` }}
      >
        <iframe
          src={url}
          title={title}
          onLoad={handleLoad}
          onError={handleError}
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
          tabIndex={-1}
          width={DESKTOP_WIDTH}
          height={DESKTOP_HEIGHT}
          className="border-0"
        />
      </div>
    </div>
  );
}

export default ProjectPreview;