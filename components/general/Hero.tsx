"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroProps {
  /** A single image src string, or an array for carousel mode. */
  images: string | string[];
  /** Alt text for the hero image. */
  alt?: string;
  /** Large heading overlaid on the image. */
  title?: string;
  /** Smaller subtext rendered below the title. */
  subtitle?: string;
  /**
   * CSS height class for the hero container.
   * Pass a Tailwind height utility, e.g. "h-[420px]" or "h-96".
   * Defaults to "h-[420px]".
   */
  heightClass?: string;
  /** Auto-advance carousel slides. Default: true. */
  autoPlay?: boolean;
  /** Milliseconds between carousel slides. Default: 5000. */
  interval?: number;
  /**
   * Tailwind background-color class for the overlay behind text.
   * e.g. "bg-black/40". Default: "bg-black/35".
   */
  overlayClass?: string;
}

export default function Hero({
  images,
  alt = "",
  title,
  subtitle,
  heightClass = "h-[420px]",
  autoPlay = true,
  interval = 5000,
  overlayClass = "bg-black/35",
}: HeroProps) {
  const imageList = Array.isArray(images) ? images : [images];
  const isCarousel = imageList.length > 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || fading) return;
      setFading(true);
      setTimeout(() => {
        setActiveIndex(index);
        setFading(false);
      }, 300);
    },
    [activeIndex, fading]
  );

  const next = useCallback(
    () => goTo((activeIndex + 1) % imageList.length),
    [activeIndex, goTo, imageList.length]
  );

  useEffect(() => {
    if (!isCarousel || !autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [isCarousel, autoPlay, interval, next]);

  return (
    <section
      className={`relative w-full ${heightClass} overflow-hidden bg-[#002255]`}
      aria-label={title ?? "Hero banner"}
    >
      {/* Slides */}
      {imageList.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === activeIndex && !fading ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : ""}
            fill
            priority={i === 0}
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay — only rendered when text is present */}
      {(title || subtitle) && (
        <div className={`absolute inset-0 z-10 ${overlayClass}`} />
      )}

      {/* Text */}
      {(title || subtitle) && (
        <div className="absolute bottom-10 left-10 z-20 max-w-[60%]">
          {title && (
            <h1 className="text-3xl font-bold text-white drop-shadow-md leading-tight mb-1">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-base text-white/90 drop-shadow leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Carousel controls */}
      {isCarousel && (
        <>
          <button
            onClick={() =>
              goTo((activeIndex - 1 + imageList.length) % imageList.length)
            }
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white text-2xl leading-none hover:bg-black/65 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => goTo((activeIndex + 1) % imageList.length)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white text-2xl leading-none hover:bg-black/65 transition-colors"
          >
            ›
          </button>

          {/* Dots */}
          <div
            role="tablist"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2"
          >
            {imageList.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full border-2 border-white/80 p-0 transition-colors ${
                  i === activeIndex ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
