// components/RegularUpdateSection.tsx

"use client";

import React from 'react';

// --- Définition des Types ---
interface NewsItem {
  id: number;
  imageSrc: string; // Chemin vers l'image d'illustration
  admin: string;
  date: string;
  title: string;
  excerpt: string;
  readMoreLink: string;
}

// --- Constantes et Couleurs Tailwind ---
const INDIGO_PRIMARY = 'indigo-600'; // Violet Indigo
const ORANGE_ACCENT = 'amber-500';  // Jaune Crème/Orange

// --- Données d'Exemple (Traduites) ---
const NEWS_ITEMS: NewsItem[] = [
    {
        id: 1,
        imageSrc: "/images/actu1.jpg",
        admin: "Admin",
        date: "18 Nov, 2023",
        title: "ÉLECTIONS LÉGISLATIVES 2025 CIRCONSCRIPTION",
        excerpt: "Après 15 ans d’espoir non abouti, nous avons décidé d’écouter votre appel. Avec Ousmane CISSE, nous nous portons candidats pour défendre Gbéléban–Seydougou. Nous voulons enfin offrir à notre département la place qu’il mérite dans le développement national",
        readMoreLink: "#",
    },
    {
        id: 2,
        imageSrc: "/images/actu2.jpg",
        admin: "Admin",
        date: "18 Nov, 2023",
        title: "Il est temps de changer...",
        excerpt: "Plus récemment, du faux texte est apparu depuis que Lorem Ipsum est simplement le texte d'impression et de typographie...",
        readMoreLink: "#",
    },
    {
        id: 3,
        imageSrc: "/images/actu3.jpg",
        admin: "Admin",
        date: "18 Nov, 2023",
        title: "Tout le monde est bon...",
        excerpt: "Plus récemment, du faux texte est apparu depuis que Lorem Ipsum est simplement le texte d'impression et de typographie...",
        readMoreLink: "#",
    },
];

// --- Composant pour une Carte d'Actualité ---

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
    
    // Classes pour les méta-données en Orange
    const metaClasses = `flex items-center text-${ORANGE_ACCENT} text-sm`;
    
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
            
            {/* Conteneur Image avec l'effet de barre de progression au survol (Violet Indigo) */}
            <div className="relative w-full h-56 overflow-hidden">
                <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Ligne/Barre qui se remplit au survol (Violet Indigo) */}
                <div 
                    className={`absolute bottom-0 left-0 h-1 bg-${INDIGO_PRIMARY} w-0 transition-all duration-300 ease-in-out group-hover:w-full`}
                ></div>
            </div>

            {/* Corps du contenu */}
            <div className="p-6">
                
                {/* Meta Data (Admin, Date, Partage) - Couleur Orange */}
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                    <div className="flex space-x-4 text-[#FFA500]">
                        {/* Admin en Orange */}
                        <span className={metaClasses}>
                            <i className="fas fa-user mr-1 text-xs"></i> {item.admin}
                        </span>
                        {/* Date en Orange */}
                        <span className={metaClasses}>
                            <i className="fas fa-calendar-alt mr-1 text-xs"></i> {item.date}
                        </span>
                    </div>
                    {/* Icône de partage (simulée) en Orange */}
                    <span className={`text-[#FFA500] hover:text-opacity-80 cursor-pointer transition-colors text-sm`}>
                         <i className="fas fa-share-alt">Partager</i>
                    </span>
                </div>

                {/* Titre et Excerpt */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors cursor-pointer">
                    {item.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm">{item.excerpt}</p>
                <a 
                    href={item.readMoreLink} 
                    className={`inline-block px-6 py-2 text-white font-medium rounded transition-all duration-300 
                               bg-[#5A458E] hover:bg-opacity-90 shadow-md 
                               group-hover:bg-[#F4E8A5] group-hover:shadow-lg`} 
                >
                    Lire la suite
                </a>
            </div>
        </div>
    );
};


// --- Composant de Section Principal ---

export const RegularUpdateSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* En-tête de la Section (ACTUALITÉS et Description) */}
                <div className="flex flex-wrap items-start justify-between pb-10 mb-10">
                    
                    <div className="mb-6 md:mb-0">
                        {/* Tag 'ACTUALITÉS' avec fond Violet Indigo */}
                        <div className={`inline-block py-1 px-3 mb-2 rounded-sm bg-${INDIGO_PRIMARY} text-white font-bold text-xs uppercase`}>
                            ACTUALITÉS
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mt-1">
                            Mise à Jour Régulière
                        </h2>
                    </div>
                    
                    {/* Texte descriptif à droite */}
                    <div className="max-w-xl border-l-4 border-gray-300 pl-4 self-center text-gray-600">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor sit amet elit dolor sit amet elit.
                        </p>
                    </div>
                </div>

                {/* Grille des Actualités */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {NEWS_ITEMS.map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};