// components/TeamCarouselSection.tsx

"use client";

import React, { useState, useEffect } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageSrc: string; // Le chemin d'accès à l'image
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}

// --- Constantes et Couleurs Tailwind ---
const INDIGO_PRIMARY = 'indigo-600'; // Violet Indigo
const ORANGE_ACCENT = 'orange-500';  
const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: "M. FOFANA VAKABA",
        role: "Candidat Député",
        // MODIFICATION ICI : Référence directe au dossier /public
        imageSrc: "/images/fofanaPolitique.png", 
        facebookUrl: "https://facebook.com/fofana.vakaba",
        linkedinUrl: "https://linkedin.com/in/fofana.vakaba",
        twitterUrl: "https://twitter.com/fofana.vakaba",
    },
    // ... (Reste des membres inchangé)
    {
        id: 2,
        name: "Mme. DIALLO AÏCHA",
        role: "Directrice de Campagne",
        imageSrc: "path/to/diallo_aicha.jpg",
        facebookUrl: "https://facebook.com/aicha.diallo",
        linkedinUrl: "https://linkedin.com/in/aicha.diallo",
        twitterUrl: "https://twitter.com/aicha.diallo",
    },
    {
        id: 3,
        name: "M. KONE IDRISS",
        role: "Chargé de Communication",
        imageSrc: "path/to/kone_idriss.jpg",
        facebookUrl: "https://facebook.com/idriss.kone",
        linkedinUrl: "https://linkedin.com/in/idriss.kone",
        twitterUrl: "https://twitter.com/idriss.kone",
    },
    {
        id: 4,
        name: "Mme. TRAORÉ MARIAMA",
        role: "Coordinatrice des Volontaires",
        imageSrc: "path/to/traore_mariama.jpg",
        facebookUrl: "https://facebook.com/mariama.traore",
        linkedinUrl: "https://linkedin.com/in/mariama.traore",
        twitterUrl: "https://twitter.com/mariama.traore",
    },
];

// ... (Reste du composant inchangé, il utilise déjà member.imageSrc)

const MemberCard: React.FC<{ member: TeamMember, isActive: boolean }> = ({ member, isActive }) => {
    
    // Classes pour les icônes (Tailwind n'inclut pas les icônes, donc on simule)
    const socialIconClasses = `w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center text-lg hover:bg-orange-500 hover:text-white transition-colors`;
    
    // Classes de transition pour la carte entière
    const cardClasses = `relative w-full overflow-hidden bg-white shadow-lg rounded-lg group transition-all duration-700 ease-in-out ${
        isActive 
            ? 'opacity-100 scale-105 shadow-2xl z-10' 
            : 'opacity-50 scale-100 shadow-md z-0'   
    }`;
    
    // Couleur de l'overlay au survol (Orange avec 40% d'opacité)
    const overlayColor = 'group-hover:bg-orange-500/40';

    return (
        <div className={cardClasses} onMouseEnter={() => { }}>
            
            {/* Conteneur Image */}
            <div 
                className={`relative w-full h-80 bg-gray-100 flex items-center justify-center`} 
            >
                {/* Cette balise <img> utilisera le chemin mis à jour */}
                <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
            </div>
            
            {/* ... (Reste de MemberCard inchangé) ... */}
            <div 
                className={`absolute inset-0 flex flex-col justify-between p-4 transition-all duration-300 ${overlayColor}`}
            >
                {/* Liens Sociaux (en haut, centrés) */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 transform group-hover:translate-y-0 translate-y-4">
                    
                    <a href={member.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={`Facebook de ${member.name}`} className={socialIconClasses}>
                        <i className="fab fa-facebook-f">FB</i> 
                    </a>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`} className={socialIconClasses}>
                        <i className="fab fa-linkedin-in">LI</i>
                    </a>
                    <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer" aria-label={`Twitter de ${member.name}`} className={socialIconClasses}>
                        <i className="fab fa-twitter">TW</i> 
                    </a>
                </div>

                {/* Nom et Statut (en bas) */}
                <div className={`text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 
                                p-2 rounded-md bg-orange-500 bg-opacity-90 transform group-hover:translate-y-0 translate-y-4`}>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm italic">{member.role}</p>
                </div>
            </div>
        </div>
    );
};

// ... (Reste de TeamCarouselSection inchangé) ...
export const TeamCarouselSection: React.FC = () => {
    // État pour gérer l'index de la carte actuellement active
    const [activeIndex, setActiveIndex] = useState(0);
    const totalMembers = TEAM_MEMBERS.length;
    const intervalTime = 4000; // Défilement toutes les 4 secondes

    // Hook pour le défilement automatique
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % totalMembers);
        }, intervalTime);

        // Nettoyage de l'intervalle lors du démontage du composant
        return () => clearInterval(timer);
    }, [totalMembers, intervalTime]);
    
    // Fonction pour passer à l'index spécifique (utile pour les points de navigation)
    const goToIndex = (index: number) => {
        setActiveIndex(index);
    };


    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* En-tête de la Section */}
                <div className="text-center pb-12 mb-8 border-b border-gray-200">
                    <div className={`inline-block py-1 px-3 mb-2 rounded-sm bg-orange-500 text-white font-bold text-xs uppercase`}>
                        ÉQUIPE
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mt-1">
                        Notre Équipe Politique
                    </h2>
                    <p className="text-gray-600 italic max-w-2xl mx-auto mt-4">
                        Nous sommes unis derrière la candidature de M. FOFANA VAKABA pour les législatives en Côte d'Ivoire. Découvrez les piliers de notre campagne.
                    </p>
                </div>

                {/* Grille des Membres (Mise en page Carrousel) */}
                {/* J'utilise une grille standard, mais les styles gèrent l'effet de mise en avant */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {TEAM_MEMBERS.map((member, index) => (
                        <MemberCard 
                            key={member.id} 
                            member={member} 
                            isActive={index === activeIndex} // Passe l'état actif/inactif
                        />
                    ))}
                </div>
                
                {/* Points de Navigation/Contrôle */}
                <div className="flex justify-center mt-10 space-x-3">
                    {TEAM_MEMBERS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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