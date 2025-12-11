// components/shared/HeroSlider.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Importez le type Variants pour TypeScript
import { motion, AnimatePresence, Variants } from "framer-motion"; 

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
  autoSlideInterval?: number; // Optionnel : temps de défilement en ms
}

export default function HeroSlider({ slides, autoSlideInterval = 7000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentIndex];

  // =========================================================
  // 1. DÉFILEMENT AUTOMATIQUE (useEffect)
  // =========================================================
  useEffect(() => {
    // Si moins d'une diapositive, ne pas lancer le défilement auto
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval); // Utilise l'intervalle défini

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [slides.length, autoSlideInterval]); // Dépendances

  // =========================================================
  // 3. LOGIQUE D'ANIMATION DE TEXTE (CORRIGÉE)
  // =========================================================
  // Utilisation de Variants pour résoudre l'erreur TS2322.
  // La fonction fléchée permet d'utiliser 'custom' pour le délai progressif.
  const textVariants: Variants = {
    // État initial (sorti de l'écran par le haut, invisible)
    hidden: { opacity: 0, y: -50 },
    // État visible (position normale, visible)
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Délai progressif pour chaque élément (0.15s)
        duration: 0.5,
        ease: "easeOut", // Le typage Variants gère cette chaîne
      },
    }),
    // État de sortie (pour AnimatePresence)
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative w-full pt-28 bg-gray-50 overflow-hidden">
      {/* Overlay léger sur toute la section */}
      <div className="absolute inset-0 bg-black/40 from-purple-900/5 via-transparent to-orange-900/5 pointer-events-none z-0"></div>

      <AnimatePresence initial={false} mode="wait"> 
        <motion.div
          key={currentIndex} // Clé unique pour forcer le re-rendu et l'animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* TEXTES */}
          <div className="relative z-10">
            <motion.h1 
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible" 
              exit="exit"
              className="text-4xl md:text-3xl font-extrabold text-[#5A458E] leading-tight"
            >
              {slide.title}
            </motion.h1>

            {/* Sous-titre (Index 1) */}
            {slide.subtitle && (
              <motion.p 
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-lg text-gray-700 mt-4"
              >
                {slide.subtitle}
              </motion.p>
            )}

            {/* CTA (Index 2 et suivants) */}
            <motion.div 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap gap-4 mt-8"
            >
              {slide.ctaButtons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className="px-6 py-3 rounded-md text-white font-semibold transition hover:shadow-lg hover:scale-105"
                  style={{
                    background: index === 0 ? "#5A458E" : "#F78E1E",
                  }}
                >
                  {btn.label}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* IMAGE AVEC FOND STYLÉ DÉCALÉ VERS LA GAUCHE */}
          <div className="relative flex justify-center">
            {/* FOND derrière l'image - Décalé vers la GAUCHE et légèrement vers le bas */}
            <div className="absolute -z-10 top-6 -left-6 w-[90%] h-[90%] rounded-3xl bg-[#5A458E] shadow-2xl"></div>

            {/* Wrapper pour l'image et l'overlay */}
            <motion.div 
                // Animation d'opacité pour l'image
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              
              {/* IMAGE */}
              <Image
                src={slide.imageSrc}
                alt="Photo slide"
                width={500}
                height={600}
                className="object-cover"
              />
              
              {/* LÉGER VOILE NOIR SUR L'IMAGE */}
              <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>

            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* =========================================================
      2. CHEVRONS DE NAVIGATION AVEC HOVER
      ========================================================= */}
      <button
        onClick={prevSlide}
        className="group absolute top-1/2 left-5 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full transition duration-300 hover:bg-[#5A458E] z-20"
      >
        <span className="text-2xl font-bold transition duration-300 group-hover:text-white">‹</span>
      </button>

      <button
        onClick={nextSlide}
        className="group absolute top-1/2 right-5 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full transition duration-300 hover:bg-[#5A458E] z-20"
      >
        <span className="text-2xl font-bold transition duration-300 group-hover:text-white">›</span>
      </button>
    </section>
  );
}