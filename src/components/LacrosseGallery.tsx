import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Camera,
  Shield,
  Users,
  Trophy,
} from "lucide-react";
import { LacrossePhotoItem } from "../data/profile.ts";
import { Language, TRANSLATIONS } from "../i18n/translations.ts";

interface LacrosseGalleryProps {
  photos: LacrossePhotoItem[];
  language: Language;
}

export const LacrosseGallery: React.FC<LacrosseGalleryProps> = ({
  photos,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;

    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }

    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : photos.length - 1) : null,
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev < photos.length - 1 ? prev + 1 : 0) : null,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, photos.length]);

  if (!photos || photos.length === 0) return null;

  const currentPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  const _getCategoryIcon = (category: LacrossePhotoItem["category"]) => {
    switch (category) {
      case "officiating":
        return <Shield className='w-3 h-3 text-sky-400' />;
      case "competition":
        return <Trophy className='w-3 h-3 text-amber-400' />;
      case "team":
        return <Users className='w-3 h-3 text-emerald-400' />;
    }
  };

  return (
    <div className='py-4 border-t border-[var(--border-subtle)]'>
      {/* Gallery Header with Navigation Controls */}
      <div className='flex items-center justify-between gap-3 mb-3'>
        <div className='flex items-center gap-2'>
          <Camera className='w-4 h-4 text-[var(--accent-primary)]' />
          <div>
            <h4 className='text-xs font-bold font-mono uppercase tracking-wider text-[var(--text-primary)]'>
              {t.athletics.galleryTitle}
            </h4>
          </div>
        </div>

        {/* Scroll Controls */}
        <div className='flex items-center gap-1.5'>
          <button
            type='button'
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label={t.athletics.galleryPrev}
            className='w-7 h-7 rounded-lg bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] disabled:opacity-30 disabled:cursor-not-allowed border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] transition-all cursor-pointer'
          >
            <ChevronLeft className='w-4 h-4' />
          </button>
          <button
            type='button'
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label={t.athletics.galleryNext}
            className='w-7 h-7 rounded-lg bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] disabled:opacity-30 disabled:cursor-not-allowed border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] transition-all cursor-pointer'
          >
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>

      {/* Scroll-Snap Track */}
      <div
        ref={scrollRef}
        tabIndex={0}
        aria-label={t.athletics.galleryTitle}
        className='flex gap-3.5 overflow-x-auto snap-x snap-mandatory py-1 focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
      >
        {photos.map((photo, idx) => (
          <button
            key={photo.id}
            type='button'
            onClick={() => setLightboxIndex(idx)}
            className='w-[270px] sm:w-[330px] md:w-[360px] aspect-[16/10] shrink-0 snap-start rounded-xl overflow-hidden relative group cursor-pointer border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)] focus:outline-none transition-all duration-300 shadow-xs text-left'
          >
            {/* Image */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading='lazy'
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
            />

            {/* Top Right Zoom Icon on hover */}
            <div className='absolute top-2.5 right-2.5 z-10 w-6 h-6 rounded-md bg-black/60 backdrop-blur-md text-white/90 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
              <Maximize2 className='w-3 h-3' />
            </div>

            {/* Bottom Gradient Caption */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3.5 flex flex-col justify-end pointer-events-none'>
              <h5 className='text-xs sm:text-sm font-bold text-white tracking-tight drop-shadow-sm leading-snug'>
                {photo.title}
              </h5>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          role='dialog'
          aria-modal='true'
          aria-labelledby='lightbox-title'
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200'
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className='relative max-w-4xl w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-2xl flex flex-col'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Top Bar */}
            <div className='flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]'>
              <div className='flex items-center gap-2'>
                <span className='text-xs font-mono text-[var(--text-muted)]'>
                  {lightboxIndex + 1} {t.athletics.galleryCounterOf}{" "}
                  {photos.length}
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <button
                  type='button'
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null
                        ? prev > 0
                          ? prev - 1
                          : photos.length - 1
                        : null,
                    )
                  }
                  className='p-1.5 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors cursor-pointer'
                  aria-label='Previous photo'
                >
                  <ChevronLeft className='w-4 h-4' />
                </button>
                <button
                  type='button'
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null
                        ? prev < photos.length - 1
                          ? prev + 1
                          : 0
                        : null,
                    )
                  }
                  className='p-1.5 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors cursor-pointer'
                  aria-label='Next photo'
                >
                  <ChevronRight className='w-4 h-4' />
                </button>
                <button
                  type='button'
                  onClick={() => setLightboxIndex(null)}
                  className='p-1.5 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors cursor-pointer'
                  aria-label={t.athletics.galleryClose}
                >
                  <X className='w-4 h-4' />
                </button>
              </div>
            </div>

            {/* Lightbox Image Stage */}
            <div className='relative bg-black/90 flex items-center justify-center max-h-[68vh] overflow-hidden'>
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className='max-h-[68vh] w-auto max-w-full object-contain select-none'
              />
            </div>

            {/* Lightbox Caption Footer */}
            <div className='p-4 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]'>
              <h3
                id='lightbox-title'
                className='text-base sm:text-lg font-bold text-[var(--text-primary)]'
              >
                {currentPhoto.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
