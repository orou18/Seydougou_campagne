// components/PolicySection.tsx
"use client";

import React from "react";
import PolicyCard from "./PolicyCard";
const policyData = [
  {
    iconType: "economy" as const, 
    title: "Croissance Économique",
    description:
      "Des mesures récentes qui stimulent l'investissement et créent des emplois pour la jeunesse Ivoirienne. Lorem Ipsum est simplement un texte simulé.",
    imageSrc: "/images/policy-image-1.jpg", 
    color: "orange" as const,
  },
  {
    iconType: "budget" as const,
    title: "Budget Équilibré",
    description:
      "Une gestion responsable des finances publiques pour assurer la stabilité à long terme. Plus de texte simulé pour la mise en page.",
    imageSrc: "/images/policy-image-2.jpg",
    color: "green" as const,
  },
  {
    iconType: "environment" as const,
    title: "Environnement Propre",
    description:
      "Des politiques écologiques visant à protéger nos ressources naturelles pour les générations futures. Texte de remplissage pour l'exemple.",
    imageSrc: "/images/policy-image-3.jpg",
    color: "orange" as const,
  },
];

const PolicySection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Titre et Étiquette */}
          <div className="flex-shrink-0">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#F4E8A5] rounded-md">
              Qui est Vakaba FOFANA ?
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
              Un Leader Pour la Jeune Génération
            </h2>
          </div>

          {/* Texte d'introduction à droite */}
          <div className="md:border-l-4 md:border-green-600 md:pl-6 pt-1">
            <p className="text-sm text-gray-600">
              Fofana VAKABA est un leader engagé d’Abidjan, déterminé à défendre les intérêts de tous les citoyens 
              lors des élections législatives du 27 décembre 2025. Fort d’une expérience de terrain et d’un sens 
              profond du service public, il s’engage à promouvoir l’éducation, l’emploi et la cohésion sociale.
              Accompagné de son suppléant, M. Cissé Ousmane, il porte une vision de progrès durable pour les familles,
              les jeunes et les communautés d’Abidjan.
            </p>
          </div>
        </div>

        {/* Cartes de Politique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policyData.map((policy, index) => (
            <PolicyCard
              key={index}
              iconType={policy.iconType}
              title={policy.title}
              description={policy.description}
              imageSrc={policy.imageSrc}
              color={policy.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
