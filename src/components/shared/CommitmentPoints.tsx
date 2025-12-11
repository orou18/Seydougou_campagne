// components/CommitmentPoints.tsx 

import React from "react";
import {
  // Importation des icônes spécifiques pour les engagements
  IoBookOutline,        // Éducation
  IoBriefcaseOutline,   // Emploi/Opportunités
  IoHeartOutline,       // Santé
  IoBusinessOutline,    // Entrepreneuriat/Petites entreprises
  IoSaveOutline,        // Gouvernance/Transparence
} from "react-icons/io5";

// Définition du type pour chaque engagement
interface CommitmentItem {
  icon: React.ReactElement<any , any>;
  label: string; // Le point d'engagement complet
}

// --- Codes Couleurs Personnalisés ---
const VIOLET_PRIMARY = "#4B0082"; // Violet Indigo
const ORANGE_ACCENT = "#FFA500";  // Orange Crème (Accent)

// Les données des engagements (Remplacement des anciennes stats)
const commitments: CommitmentItem[] = [
  {
    icon: <IoBookOutline />,
    label: "Renforcer l’éducation et l’accès aux services scolaires de qualité",
  },
  {
    icon: <IoBriefcaseOutline />,
    label: "Créer des opportunités d’emploi pour les jeunes et les femmes",
  },
  {
    icon: <IoHeartOutline />,
    label: "Améliorer l’accès aux soins de santé dans toutes les communes",
  },
  {
    icon: <IoBusinessOutline />,
    label: "Soutenir les petites entreprises et l’entrepreneuriat local",
  },
  {
    icon: <IoSaveOutline />,
    label: "Garantir une gouvernance transparente et responsable",
  },
];

const CommitmentPoints: React.FC = () => {
  // Couleur de fond de la section pour la rendre plus visible
  const bgColor = "bg-gray-50"; 
  
  // Utilisation d'une ombre légère sur la section pour la démarquer
  return (
    <div className={`py-12 sm:py-16 ${bgColor} shadow-inner`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de Section Stylisé */}
        <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white rounded-full mb-3"
                  style={{ backgroundColor: ORANGE_ACCENT }}>
                Notre Programme
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: VIOLET_PRIMARY }}>
                Nos 5 Engagements Prioritaires
            </h2>
        </div>
        
        {/* Grille des Engagements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {commitments.map((item, index) => (
            <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 bg-white 
                           shadow-md transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-opacity-0"
                // Ajout d'un effet de bordure au survol
                style={{ borderBottom: `4px solid ${VIOLET_PRIMARY}` }}
            >
              
              {/* Conteneur Icône (Violet/Orange) */}
              <div 
                className={`mb-4 p-4 rounded-full transition-all duration-300`} 
                style={{ 
                    backgroundColor: `${VIOLET_PRIMARY}1A`, // Violet avec 10% d'opacité
                    color: VIOLET_PRIMARY, // Couleur par défaut de l'icône
                }} 
              >
                {/* L'icône elle-même avec taille adaptée */}
                {React.cloneElement(item.icon as React.ReactElement, {
                    className: "w-7 h-7",
                    style: { color: VIOLET_PRIMARY } as React.CSSProperties
                })}
              </div>
              
              {/* Texte de l'engagement (Violet) */}
              <p className={`text-base font-bold`} style={{ color: VIOLET_PRIMARY }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitmentPoints;