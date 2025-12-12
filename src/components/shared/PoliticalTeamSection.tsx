// components/TeamCarouselSection.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'; // Import des vraies icônes

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageSrc: string; // Le chemin d'accès à l'image
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}

// --- Couleurs Thématiques (Adaptation du Violet pour la cohérence) ---
// Note: J'utilise 'indigo-600' comme proxy pour un violet foncé, et 'orange-500' pour l'accent.
const VIOLET_PRIMARY_CLASS = 'text-indigo-600'; 
const ORANGE_ACCENT_CLASS = 'bg-orange-500';  
const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: "Mr. Vakaba FOFANA",
        role: "Candidat au législative",
        imageSrc: "/images/fofanaPolitique.png", 
        facebookUrl: "https://facebook.com/fofana.vakaba",
        linkedinUrl: "https://linkedin.com/in/fofana.vakaba",
        twitterUrl: "https://twitter.com/fofana.vakaba",
    },
    {
        id: 2,
        name: "Mme. DIALLO AÏCHA",
        role: "Directrice de Campagne",
        imageSrc: "/images/vision-team.png",
        facebookUrl: "https://facebook.com/aicha.diallo",
        linkedinUrl: "https://linkedin.com/in/aicha.diallo",
        twitterUrl: "https://twitter.com/aicha.diallo",
    },
    {
        id: 3,
        name: "Mr. Ousmane CISSE",
        role: "Suppléant de Mr FOFANA",
        imageSrc: "/images/ousmanePolitique.png",
        facebookUrl: "https://facebook.com/idriss.kone",
        linkedinUrl: "https://linkedin.com/in/idriss.kone",
        twitterUrl: "https://twitter.com/idriss.kone",
    },
];

// --- Composant pour les Cartes des Membres ---

const MemberCard: React.FC<{ member: TeamMember, isActive: boolean }> = ({ member, isActive }) => {
    
    // Classes pour les icônes sociales (maintenant de vraies icônes)
    const socialIconClasses = `w-8 h-8 rounded-full bg-white ${VIOLET_PRIMARY_CLASS} flex items-center justify-center text-lg hover:${ORANGE_ACCENT_CLASS} hover:text-white transition-colors shadow-md`;
    
    // Classes de transition pour la carte entière
    const cardClasses = `relative w-full overflow-hidden bg-white shadow-lg rounded-xl group transition-all duration-700 ease-in-out ${
        isActive 
            ? 'opacity-100 scale-105 shadow-2xl z-10 border-4 border-indigo-600' // Ajout d'une bordure accentuée
            : 'opacity-70 scale-100 shadow-md z-0'   // Légèrement plus opaque
    }`;
    
    // Couleur de l'overlay au survol (Orange avec 40% d'opacité)
    const overlayColor = 'group-hover:bg-orange-500/50'; // Opacité légèrement augmentée

    return (
        <div className={cardClasses}>
            
            {/* Conteneur Image */}
            <div 
                className={`relative w-full h-96 bg-gray-100 flex items-center justify-center`} // Hauteur augmentée
            >
                <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
            </div>
            
            {/* Overlay au Survol */}
            <div 
                className={`absolute inset-0 flex flex-col justify-between p-6 transition-all duration-300 ${overlayColor}`}
            >
                {/* Liens Sociaux (en haut, centrés) */}
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 transform group-hover:translate-y-0 translate-y-4">
                    
                    <a href={member.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={`Facebook de ${member.name}`} className={socialIconClasses}>
                        <IoLogoFacebook className="w-5 h-5" /> {/* VRAIE ICÔNE */}
                    </a>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`} className={socialIconClasses}>
                        <IoLogoLinkedin className="w-5 h-5" /> {/* VRAIE ICÔNE */}
                    </a>
                    <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer" aria-label={`Twitter de ${member.name}`} className={socialIconClasses}>
                        <IoLogoTwitter className="w-5 h-5" /> {/* VRAIE ICÔNE */}
                    </a>
                </div>

                {/* Nom et Statut (en bas) */}
                <div className={`text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 
                                p-3 rounded-md ${ORANGE_ACCENT_CLASS} bg-opacity-90 transform group-hover:translate-y-0 translate-y-4`}>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm italic font-medium">{member.role}</p>
                </div>
            </div>
        </div>
    );
};

// --- Composant de Section Principal ---

export const TeamCarouselSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalMembers = TEAM_MEMBERS.length;
    const intervalTime = 4000; 

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % totalMembers);
        }, intervalTime);

        return () => clearInterval(timer);
    }, [totalMembers, intervalTime]);
    
    const goToIndex = (index: number) => {
        setActiveIndex(index);
    };


    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* En-tête de la Section */}
                <div className="text-center pb-12 mb-8 border-b border-gray-200">
                    <div className={`inline-block py-1 px-3 mb-2 rounded-sm ${ORANGE_ACCENT_CLASS} text-white font-bold text-xs uppercase`}>
                        ÉQUIPE
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mt-1">
                        Notre Équipe Politique
                    </h2>
                    <p className="text-gray-600 italic max-w-2xl mx-auto mt-4">
                        Nous sommes unis derrière la candidature de M. FOFANA VAKABA pour les législatives en Côte d&apos;Ivoire. Découvrez les piliers de notre campagne.
                    </p>
                </div>

                {/* Grille des Membres (Passage à 3 colonnes, Légèrement Centré) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"> 
                    {TEAM_MEMBERS.map((member, index) => (
                        <MemberCard 
                            key={member.id} 
                            member={member} 
                            isActive={index === activeIndex} 
                        />
                    ))}
                </div>
                
                {/* Points de Navigation/Contrôle */}
                <div className="flex justify-center mt-12 space-x-3">
                    {TEAM_MEMBERS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToIndex(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                index === activeIndex ? `bg-indigo-600 scale-125` : 'bg-gray-300 hover:bg-indigo-400'
                            }`}
                            aria-label={`Afficher le membre ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamCarouselSection;