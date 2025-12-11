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
              Vision & priorités
            </span>

            {/* Titre */}
            <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-4">
              Notre vision pour la Côte d'Ivoire
            </h2>

            {/* Texte de description */}
            <p className="text-lg text-gray-600 mb-6">
              𝘊𝘩𝘦𝘳𝘴 𝘱𝘢𝘳𝘦𝘯𝘵𝘴, 𝘯𝘰𝘵𝘳𝘦 𝘤𝘢𝘯𝘥𝘪𝘥𝘢𝘵𝘶𝘳𝘦 𝘷𝘪𝘴𝘦 𝘦́𝘨𝘢𝘭𝘦𝘮𝘦𝘯𝘵 𝘢̀ 𝘳𝘦𝘯𝘧𝘰𝘳𝘤𝘦𝘳 𝘭’𝘶𝘯𝘪𝘰𝘯 
              𝘦𝘵 𝘭𝘢 𝘧𝘳𝘢𝘵𝘦𝘳𝘯𝘪𝘵𝘦́ 𝘦𝘯𝘵𝘳𝘦 𝘎𝘣𝘦́𝘭𝘦́𝘣𝘢𝘯 𝘦𝘵 𝘚𝘦𝘺𝘥𝘰𝘶𝘨𝘰𝘶, 
              𝘮𝘪𝘴𝘦𝘴 𝘢̀ 𝘮𝘢𝘭 𝘥𝘶𝘳𝘢𝘯𝘵 𝘤𝘦𝘴 𝘲𝘶𝘪𝘯𝘻𝘦 (𝟣𝟧) 𝘢𝘯𝘯𝘦́𝘦𝘴 𝘱𝘢𝘳 𝘭𝘢 𝘱𝘳𝘪𝘰𝘳𝘪𝘴𝘢𝘵𝘪𝘰𝘯 
              𝘥’𝘪𝘯𝘵𝘦́𝘳𝘦̂𝘵𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘯𝘦𝘭𝘴 𝘢𝘶 𝘥𝘦́𝘵𝘳𝘪𝘮𝘦𝘯𝘵 𝘥𝘶 𝘣𝘪𝘦𝘯-𝘦̂𝘵𝘳𝘦 𝘥𝘦 𝘯𝘰𝘴 𝘱𝘰𝘱𝘶𝘭𝘢𝘵𝘪𝘰𝘯𝘴. 
              𝘕𝘰𝘶𝘴 𝘯𝘦 𝘴𝘰𝘮𝘮𝘦𝘴 𝘤𝘰𝘯𝘵𝘳𝘦 𝘱𝘦𝘳𝘴𝘰𝘯𝘯𝘦 ; 𝘯𝘰𝘶𝘴 𝘴𝘰𝘮𝘮𝘦𝘴 𝘤𝘰𝘯𝘵𝘳𝘦 𝘶𝘯 𝘴𝘺𝘴𝘵𝘦̀𝘮𝘦 𝘲𝘶𝘪, 
              𝘥𝘶𝘳𝘢𝘯𝘵 𝘵𝘰𝘶𝘵 𝘤𝘦 𝘵𝘦𝘮𝘱𝘴, 𝘢 𝘵𝘳𝘢𝘩𝘪 𝘴𝘦𝘴 𝘦𝘯𝘨𝘢𝘨𝘦𝘮𝘦𝘯𝘵𝘴 𝘦𝘵 𝘮𝘢𝘯𝘲𝘶𝘦́ 𝘢̀ 𝘭’𝘢𝘱𝘱𝘦𝘭 𝘥𝘶 𝘱𝘦𝘶𝘱𝘭𝘦.
            </p>

            {/* Bouton d'action (Vert Ivoirien) */}
            <div className="flex items-center space-x-6 mb-8">
              <button className="px-8 py-3 text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition duration-150 shadow-md">
                Rejoignez-nous
              </button>

              {/* Signature simulée */}
              {/* <div className="text-gray-500 italic text-xl font-serif">
                Signature du Leader
              </div> */}
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
