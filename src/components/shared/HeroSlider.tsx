"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
}

interface HeroSlide {
  title: string;
  subtitle?: string;
  imageSrc: string;
  ctaButtons: CTAButton[];
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentIndex];

  return (
    <section className="relative w-full pt-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* TEXTES */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5A458E] leading-tight">
            {slide.title}
          </h1>

          {slide.subtitle && (
            <p className="text-lg text-gray-700 mt-4">{slide.subtitle}</p>
          )}

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-8">
            {slide.ctaButtons.map((btn, index) => (
              <Link
                key={index}
                href={btn.href}
                className="px-6 py-3 rounded-md text-white font-semibold transition"
                style={{
                  background: index === 0 ? "#5A458E" : "#F78E1E",
                }}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        {/* IMAGE AVEC FOND STYLÉ */}
        <div className="relative flex justify-center">
          {/* FOND derrière l’image */}
          <div className="absolute -z-10 top-8 left-8 w-[90%] h-[90%] rounded-3xl bg-[#00AFC5]"></div>

          {/* IMAGE */}
          <Image
            src={slide.imageSrc}
            alt="Photo slide"
            width={500}
            height={600}
            className="rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>

      {/* CHEVRONS DE NAVIGATION */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
      >
        <span className="text-2xl font-bold">‹</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
      >
        <span className="text-2xl font-bold">›</span>
      </button>
    </section>
  );
}
