// components/FullTextModal.tsx

import React, { useEffect, useRef } from 'react';

interface FullTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fullText: string;
}

const INDIGO_PRIMARY = 'indigo-600'; // Violet Indigo
const ORANGE_ACCENT = 'amber-500';  // Orange Crème

const FullTextModal: React.FC<FullTextModalProps> = ({ isOpen, onClose, title, fullText }) => {
  
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Gère la fermeture avec la touche Échap et capture le focus
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Optionnel : Déplacer le focus sur le contenu de la modale pour l'accessibilité
      modalRef.current?.focus(); 
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 bg-black bg-opacity-70" // Opacité augmentée pour mieux masquer l'arrière-plan
      onClick={onClose}
    >
      <div
        ref={modalRef} // Référence pour la gestion du focus
        tabIndex={-1} // Permet de recevoir le focus
        className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-6 md:p-8 transition-transform duration-500 scale-100 outline-none" // Ajout de 'outline-none' pour supprimer la bordure de focus par défaut
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de Fermeture Amélioré */}
        <button
          className={`absolute top-3 right-3 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-${INDIGO_PRIMARY} hover:text-white transition-all duration-200 text-xl`}
          onClick={onClose}
          aria-label="Fermer la déclaration complète"
        >
          &times;
        </button>

        {/* Titre */}
        <h3 className={`text-2xl font-bold mb-4 pr-10 text-${INDIGO_PRIMARY} border-b border-${ORANGE_ACCENT} pb-2`}>
          {title}
        </h3>
        
        {/* Contenu du Texte - Taille réduite à 'text-sm' */}
        <div className={`text-gray-700 whitespace-pre-line text-sm leading-relaxed max-h-[70vh]`}>
          {fullText}
        </div>
        
      </div>
    </div>
  );
};

export default FullTextModal;