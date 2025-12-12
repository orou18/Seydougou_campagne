// components/Footer.tsx

import React from 'react';
// Importation des icônes pour les réseaux sociaux 
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';

// --- Couleurs et Constantes ---
const VIOLET_PRIMARY = '#4B0082';
const ORANGE_ACCENT = '#FFA500';

// Données des liens rapides
const quickLinks = [
    { label: 'Programme', href: '/programme' },
    { label: 'Notre Équipe', href: '/equipe' },
    { label: 'À Propos de Nous', href: '/apropos' },
    { label: 'Bénévolat', href: '/benevolat' },
    { label: 'Contact', href: '/contact' },
    { label: 'Galerie', href: '/galerie' },
];

// Données des services/sections (adapté à une campagne politique)
const campaignSections = [
    { label: 'Priorités Éducation', href: '/priorites/education' },
    { label: 'Emploi Jeunesse', href: '/priorites/emploi' },
    { label: 'Santé et Social', href: '/priorites/sante' },
    { label: 'Actualités Locales', href: '/actualites' },
    { label: 'Donations', href: '/donations' },
];

const Footer: React.FC = () => {
    
    // Le gradient pour le fond du pied de page (Violet vers Orange)
    const backgroundGradientStyle = {
        background: `linear-gradient(to right, ${VIOLET_PRIMARY}, ${ORANGE_ACCENT})`,
    };

    return (
        <footer className="w-full text-white pt-16">
            
            {/* 1. Bloc Abonnement Newsletter (Avec Bordure d'Input Améliorée) */}
            <div className="py-8" style={backgroundGradientStyle}>
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <h3 className="text-2xl font-bold mb-4 md:mb-0">
                        Abonnez-vous à notre Newsletter
                    </h3>
                    <div className="flex w-full md:w-1/2 space-x-2">
                        <input
                            type="email"
                            placeholder="Votre E-mail"
                            // Bordure claire et focus accentué
                            className={`flex-grow p-3 rounded-l-md text-gray-800 focus:outline-none border-2 border-white focus:border-[${VIOLET_PRIMARY}]`}
                            aria-label="Adresse e-mail pour la newsletter"
                        />
                        <button
                            className="px-6 py-3 font-semibold rounded-r-md transition-colors duration-300"
                            style={{ backgroundColor: VIOLET_PRIMARY, color: 'white' }}
                            aria-label="S'abonner à la newsletter"
                        >
                            S'abonner
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Bloc Liens et Infos (Structure Espacée et Innovante) */}
            <div className="py-16 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Conteneur principal utilisant flexbox pour un espacement maximal */}
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                        
                        {/* A. Colonne Gauche : À Propos de la Campagne (Plus d'espace) */}
                        <div className="w-full lg:w-1/3 pr-8">
                            <h4 className="text-2xl font-extrabold mb-4 border-b-4 pb-2" style={{ borderColor: ORANGE_ACCENT }}>
                                M. Fofana Vakaba
                            </h4>
                            <p className="text-sm text-gray-300 mb-4">
                                Candidat aux législatives du 27 décembre 2025 pour **Gbéléban–Seydougou**. Notre engagement est d'être la voix forte de nos populations à l'Assemblée Nationale.
                            </p>
                            <p className="text-sm text-gray-300 italic">
                                **Ensemble, Osons le changement Maintenant !**
                            </p>
                        </div>

                        {/* B. Colonne Milieu : Liens et Priorités (Utilisation d'une grille interne pour la clarté) */}
                        <div className="w-full lg:w-1/3 grid grid-cols-2 gap-8">
                            
                            {/* Liens Rapides */}
                            <div>
                                <h4 className="text-xl font-bold mb-4 border-b pb-2" style={{ borderColor: VIOLET_PRIMARY }}>
                                    Liens Rapides
                                </h4>
                                <ul className="space-y-2">
                                    {quickLinks.slice(0, 3).map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center">
                                                &gt; {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Priorités de la Campagne */}
                            <div>
                                <h4 className="text-xl font-bold mb-4 border-b pb-2" style={{ borderColor: VIOLET_PRIMARY }}>
                                    Nos Priorités
                                </h4>
                                <ul className="space-y-2">
                                    {campaignSections.slice(0, 3).map((section, index) => (
                                        <li key={index}>
                                            <a href={section.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center">
                                                &gt; {section.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {/* C. Colonne Droite : Suivez-nous & Donation (Au bout) */}
                        <div className="w-full lg:w-1/3 lg:pl-8">
                            <h4 className="text-2xl font-extrabold mb-4 border-b-4 pb-2" style={{ borderColor: ORANGE_ACCENT }}>
                                Restez Engagé
                            </h4>
                            
                            <p className="text-sm text-gray-300 mb-4 font-semibold">
                                Suivez-nous sur les réseaux sociaux pour les mises à jour en direct :
                            </p>
                            
                            {/* Liens Sociaux */}
                            <div className="flex space-x-4 mb-10">
                                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoLogoFacebook className="w-6 h-6 text-white" />
                                </a>
                                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoLogoTwitter className="w-6 h-6 text-white" />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoLogoLinkedin className="w-6 h-6 text-white" />
                                </a>
                            </div>
                            
                            {/* Donation */}
                            <h4 className="text-xl font-bold mb-4">
                                Soutenez la Campagne
                            </h4>
                            <a href="/donations" className="inline-block py-2 px-6 font-semibold rounded-lg transition-colors duration-300 shadow-md" style={{ backgroundColor: VIOLET_PRIMARY, color: 'white' }}>
                                Faire un Don
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Bande de Copyright (En bas) */}
            <div className="py-4 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Campagne Législative FOFANA VAKABA. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;