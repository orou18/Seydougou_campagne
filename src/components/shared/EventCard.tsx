// components/shared/EventCard.tsx
"use client";
import React from 'react';
import Image from 'next/image';
// Importez le type Variants pour TypeScript
import { motion, Variants } from 'framer-motion'; 
import { IoCalendarOutline, IoLocationOutline, IoPersonOutline } from 'react-icons/io5';


interface EventCardProps {
  title: string;
  description: string;
  date: string;
  speaker: string;
  location: string;
  imageSrc: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  // Le type 'i: number' est le 'custom' prop passé à motion.div
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut", 
    },
  }),
};

const EventCard: React.FC<EventCardProps & { index: number }> = ({ 
  title, 
  description, 
  date, 
  speaker, 
  location, 
  imageSrc,
  index 
}) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-4 mb-6 transition duration-300 hover:shadow-xl"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
        
        {/* Image / Vignette */}
        <div className="flex-shrink-0 w-full md:w-48 h-24 relative rounded-md overflow-hidden">
          <Image
            src={imageSrc}
            alt={`Vignette de l'événement : ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        
        {/* Contenu de l'événement */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 leading-snug hover:text-[#5A458E] transition">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1 mb-3">{description}</p>

          {/* Méta-données */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center space-x-1">
              <IoCalendarOutline className="text-sm text-orange-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <IoPersonOutline className="text-sm text-orange-500" />
              <span>Conférencier: {speaker}</span>
            </div>
            <div className="flex items-center space-x-1">
              <IoLocationOutline className="text-sm text-orange-500" />
              <span>Lieu: {location}</span>
            </div>
          </div>
        </div>

        {/* Bouton "Join Now" */}
        <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <button className="w-full md:w-auto px-6 py-3 text-white font-semibold rounded-full transition duration-300 transform hover:scale-[1.03]"
            style={{ 
              background: 'linear-gradient(to right, #5A458E, #7A57B9)', 
            }}
          >
            S'inscrire
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;