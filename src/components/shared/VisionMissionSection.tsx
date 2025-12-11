// components/VisionMissionSection.tsx
import React from "react";

import StatBar from "./StatBar";
import Image from "next/image";

const VisionMissionSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Bloc Illustration / Image */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0 relative">
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center overflow-hidden">
              <img
                src="/images/vision-illustration.jpg"
                alt="Équipe en réunion d'analyse"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bloc Texte / Mission */}
          <div className="lg:w-1/2 w-full lg:pl-16">
            {/* Étiquette d'accentuation (Orange Ivoirien) */}
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#F4E8A5] rounded-full mb-4">
              Vision & Mission
            </span>

            {/* Titre */}
            <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-4">
              Chaque Personne est Importante pour l'Élection dans Notre Pays
            </h2>

            {/* Texte de description */}
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing, sed eiusmod
              tempor sit amet elit dolor sit amet elit. Nous travaillons à
              assurer une participation démocratique juste et éclairée.
            </p>

            {/* Bouton d'action (Vert Ivoirien) */}
            <div className="flex items-center space-x-6 mb-8">
              <button className="px-8 py-3 text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition duration-150 shadow-md">
                Rejoignez-nous
              </button>

              {/* Signature simulée */}
              <div className="text-gray-500 italic text-xl font-serif">
                Signature du Leader
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intégration de la barre de statistiques */}
      <div className="mt-12 md:mt-16">
        <StatBar />
      </div>
    </section>
  );
};

export default VisionMissionSection;
