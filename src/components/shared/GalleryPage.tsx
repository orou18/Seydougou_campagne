// components/GalleryPage.tsx

"use client";

import React, { useState, useMemo, useEffect } from 'react';

// --- Définition des Types ---
type Category = 'Tous' | 'Événement' | 'Campagne' | 'Vote' | 'Parole';
type GalleryItemType = 'Image' | 'Video';

interface GalleryItem {
  id: number;
  src: string;
  fullSrc: string;
  category: Category;
  type: GalleryItemType;
  alt: string;
}

// --- Constantes et Données d'Exemple (Mise à jour des catégories) ---
const INDIGO_PRIMARY = 'indigo-600';
const ORANGE_ACCENT = 'yellow-500';

// Catégories traduites
const categories: Category[] = ['Tous', 'Événement', 'Campagne', 'Vote', 'Parole'];

// Mise à jour des données factices avec les nouvelles catégories
const DUMMY_ITEMS: GalleryItem[] = [
    { id: 1, src: '/images/gal1.jpg', fullSrc: '/images/gal1.jpg', category: 'Événement', type: 'Image', alt: 'Manifestation pour la paix' },
    { id: 2, src: 'path/to/image2_thumb.jpg', fullSrc: '/images/video1.mp4', category: 'Campagne', type: 'Video', alt: 'Discours politique'},
    { id: 3, src: '/images/gal3.jpg', fullSrc: '/images/gal3.jpg', category: 'Vote', type: 'Image', alt: 'Homme votant' },
    { id: 4, src: '/images/gal4.jpeg', fullSrc: '/images/gal4.jpeg', category: 'Parole', type: 'Image', alt: 'Femme parlant en public' },
    { id: 5, src: '/images/gal1.jpg', fullSrc: '/images/gal1.jpg', category: 'Événement', type: 'Image', alt: 'Réunion de travail' },
    { id: 6, src: '/images/gal1.jpg', fullSrc: '/images/gal1.jpg', category: 'Campagne', type: 'Image', alt: 'Affiche de campagne' },
    { id: 7, src: '/images/gal1.jpg', fullSrc: '/images/gal1.jpg', category: 'Vote', type: 'Image', alt: 'Urne de vote' },
    { id: 8, src: '/images/gal1.jpg', fullSrc: '/images/gal1.jpg', category: 'Parole', type: 'Image', alt: 'Intervention télévisée' },
];


// --- 1. Composant Modale (Popover) ---

interface MediaModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({ item, onClose }) => {
  const isVisible = !!item;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible, onClose]);


  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 
                ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      style={{ backgroundColor: isVisible ? 'rgba(0, 0, 0, 0.4)' : 'transparent' }}
      onClick={onClose}
    >
      {item && (
        <div
          className={`relative p-2 bg-white rounded-lg shadow-2xl max-w-[90vw] max-h-[90vh] transition-transform duration-300 
                    ${isVisible ? 'scale-100' : 'scale-90'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {item.type === 'Image' ? (
            <img src={item.fullSrc} alt={item.alt} className="block max-w-full max-h-[85vh] h-auto object-contain rounded" />
          ) : (
            <div className="aspect-video w-[800px] max-w-full max-h-[85vh]">
                <iframe
                    className="w-full h-full rounded"
                    src={item.fullSrc}
                    title={item.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
          )}
          
          <button
            className={`absolute top-[-15px] right-[-15px] bg-${INDIGO_PRIMARY} text-white rounded-full w-8 h-8 
                       text-xl flex items-center justify-center shadow-lg hover:bg-${ORANGE_ACCENT} transition-colors`}
            onClick={onClose}
            aria-label="Fermer la modale"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};


// --- 2. Composant Principal de la Galerie ---

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Tous') {
      return DUMMY_ITEMS;
    }
    return DUMMY_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);
  
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* --- Header et Filtres RÉORGANISÉS --- */}
      <header className="flex flex-col md:flex-row md:items-start justify-between pb-5 mb-8 border-b border-gray-200">
        
        {/* Colonne de Gauche (Titres) */}
        <div className="flex flex-col mb-4 md:mb-0">
          {/* Titre "GALLARY" avec fond indigo */}
          <div className={`inline-block py-1 px-3 mb-1 rounded-sm bg-[#5A458E] w-24 text-white font-bold text-sm uppercase`}>
            GALERIE
          </div>
          {/* Sous-titre "My Best Work" */}
          <h2 className="text-3xl font-medium text-gray-800 mt-1">NOS REALISATION</h2>
        </div>
        
        {/* Barre de Filtre (Colonnes de Droite) */}
        <div className="flex flex-wrap gap-2 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded transition-all duration-200 relative
                          ${activeCategory === cat 
                              ? `text-${INDIGO_PRIMARY} bg-transparent after:content-[''] after:absolute after:bottom-[-8px] after:left-1/4 after:w-1/2 after:h-0.5 after:bg-${INDIGO_PRIMARY}`
                              : `text-gray-600 hover:text-white hover:bg-[#5A458E] hover:shadow-md`
                          }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      
      {/* --- Grille de la Galerie --- */}
      <section 
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => openModal(item)}
            role="button"
            tabIndex={0}
            aria-label={`Ouvrir ${item.alt}`}
            className="relative h-72 rounded-lg shadow-md overflow-hidden cursor-pointer 
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
          >
            <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover block" 
            />
            
            {/* Overlay et icône vidéo */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-colors"></div>
            {item.type === 'Video' && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                text-white text-5xl text-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    ▶
                </span>
            )}
          </div>
        ))}
      </section>

      {/* --- Modale d'Affichage --- */}
      <MediaModal item={selectedItem} onClose={closeModal} />
    </div>
  );
};