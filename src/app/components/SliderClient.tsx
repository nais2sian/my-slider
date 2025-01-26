"use client";

import React, { useState, useRef, useEffect } from "react";
import { SlideItem } from "@/data/slides";
import Pagination from "./Pagination";

interface SliderClientProps {
  slides: SlideItem[];
}
const SLIDE_GAP_PX = 16;

export default function SliderClient({ slides }: SliderClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    trackRef.current = document.querySelector(
      "[data-slider-track]"
    ) as HTMLDivElement;
  }, []);

  useEffect(() => {
    function measureWidth() {
      if (!trackRef.current) return;
      const firstCard = trackRef.current.querySelector(
        "div.flex-shrink-0"
      ) as HTMLDivElement | null;
      if (!firstCard) return;

      const width = firstCard.offsetWidth;
      setCardWidth(width + SLIDE_GAP_PX);
    }

    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => {
      window.removeEventListener("resize", measureWidth);
    };
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }, [currentIndex, cardWidth]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-full">
      <div className="block md:hidden">
        <Pagination
          total={slides.length}
          currentIndex={currentIndex}
          onPageChange={setCurrentIndex}
        />
      </div>

      {/* Кнопка Назад */}
      <button
        aria-label="Предыдущий слайд"
        type="button"
        onClick={goToPrev}
        className="absolute z-[10] items-center justify-center hidden w-8 h-8 text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/30 md:flex"
      >
        &larr;
      </button>

      {/* Кнопка Вперед */}
      <button
        aria-label="Следующий слайд"
        type="button"
        onClick={goToNext}
        className="absolute z-[10] items-center justify-center hidden w-8 h-8 text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/30 md:flex"
      >
        &rarr;
      </button>
    </div>
  );
}
