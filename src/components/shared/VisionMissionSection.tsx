// components/VisionMissionSection.tsx

"use client"; // Ajout de la directive pour utiliser useState

import React, { useState } from "react";
import CommitmentPoints from "./CommitmentPoints";
import FullTextModal from "./FullTextModal"; 

const INDIGO_PRIMARY = '#4B0082'; // Violet Indigo
const ORANGE_ACCENT = '#FFA500';  // Orange Crème

const fullTextContent = `Chères populations de Gbéléban–Seydougou,
Chers frères et sœurs,
Chers parents,

Voilà maintenant quinze (15) ans que nous avons placé notre espoir en un choix que nous pensions juste. Malgré les renouvellements successifs, portés par un grand espoir d’amélioration, la déception n’en a été que plus profonde. C’est pourquoi nous avons décidé de répondre à votre appel, à votre cri de cœur, en acceptant de nous porter candidats aux élections législatives pour le département de Gbéléban–Seydougou. 

Oui, pour vous, nous avons osé. Aux côtés de mon aîné Ousmane CISSÉ, nous avons choisi de porter vos aspirations, vos voix et vos intérêts à l’Assemblée nationale. En quinze (15) ans de gouvernance, le Président de la République a beaucoup fait pour notre département, en y implantant de nombreuses infrastructures économiques, éducatives, sanitaires et sociales. Nous lui en sommes profondément reconnaissants. Notre engagement se justifie d’ailleurs par le taux record de participation enregistré lors de la dernière élection présidentielle, avec un score de 99,90 % en faveur du Président Alassane OUATTARA dans notre circonscription. 

Cependant, il nous revient de jouer pleinement notre rôle dans l’essor de notre département en prenant part aux débats politiques nationaux, en redynamisant notre développement par la valorisation de nos ressources locales, en encourageant les activités génératrices de revenus pour les jeunes et les femmes, et en veillant à la bonne exécution des projets structurants susceptibles d’impacter positivement la vie de nos populations. Œuvrer pour que notre département bénéficie d’une part significative dans la distribution des richesses nationales, telle que promise par le Chef de l’État pour ce nouveau quinquennat, sera l’une de nos priorités. 

Chers parents, notre candidature vise également à renforcer l’union et la fraternité entre Gbéléban et Seydougou, mises à mal durant ces quinze (15) années par la priorisation d’intérêts personnels au détriment du bien-être de nos populations. Nous ne sommes contre personne ; nous sommes contre un système qui, durant tout ce temps, a trahi ses engagements et manqué à l’appel du peuple. 

Populations de Gbéléban et de Seydougou, vous nous avez interpellés, vous nous avez appelés. Nous sommes là pour vous représenter et vous défendre, comme vous l’avez toujours souhaité. Avec vous, nous prenons rendez-vous le 27 décembre pour un nouveau départ. 

Pour vous, nous avons osé !
Ensemble, osons le changement maintenant ! 

VAKABA FOFANA 
OUSMANE CISSÉ`;

// TRONCATION MODIFIÉE : Prend les deux premiers blocs (séparés par \n\n) pour garantir un extrait plus long.
const excerptContent = fullTextContent.split('\n\n').slice(0, 2).join('\n\n') + '...';


const VisionMissionSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Bloc Illustration / Image */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0 relative">
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center overflow-hidden">
              <img
                src="/images/vision-illustration.jpeg"
                alt="Équipe en réunion d'analyse"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bloc Texte / Mission */}
          <div className="lg:w-1/2 w-full lg:pl-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white rounded-full mb-4" style={{ backgroundColor: ORANGE_ACCENT }}>
              Vision & priorités
            </span>

            {/* Titre */}
            <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-4">
              Notre vision pour la Côte d&apos;Ivoire
            </h2>

            {/* Texte de description TRONQUÉ */}
            <p className="text-sm text-gray-600 mb-2 whitespace-pre-line">
              {excerptContent}
            </p>
            
            {/* Bouton "Voir plus" (Orange, petit) */}
            <button
                onClick={openModal}
                className={`inline-block text-sm font-semibold hover:text-[#4B0082] transition-colors pb-6`}
                style={{ color: ORANGE_ACCENT }} 
            >
                Lire la déclaration complète &raquo;
            </button>


            {/* Bouton d'action (Vert Ivoirien) */}
            <div className="flex items-center space-x-6 mb-8">
              <button className="px-6 py-2 text-lg font-medium rounded-sm text-white bg-green-600 hover:bg-green-700 transition duration-150 shadow-md">
                Rejoignez-nous
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intégration de la barre de statistiques */}
      <div className="mt-12 md:mt-16">
        <CommitmentPoints/>
      </div>

      {/* Modale du Texte Intégral */}
      <FullTextModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Déclaration de Candidature"
        fullText={fullTextContent}
      />
    </section>
  );
};

export default VisionMissionSection;