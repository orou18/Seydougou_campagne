// components/PolicyCard.tsx
import React from "react";
import {
  IoLeafOutline,
  IoScaleOutline,
  IoTrendingUpOutline,
  IoLogoFacebook, 
  IoLogoLinkedin, 
} from "react-icons/io5"; // Les icônes sont les logos officiels de Ionicons

// --- Couleurs Thématiques (pour l'overlay social) ---
const VIOLET_PRIMARY = '#4B0082';
const ORANGE_ACCENT = '#FFA500';

// Définition des propriétés que la carte va recevoir
interface PolicyCardProps {
  iconType: "economy" | "budget" | "environment";
  title: string;
  description: string;
  imageSrc: string; // Source de l'image de fond
  color: "orange" | "green"; // Couleur pour l'icône et l'accent
}

// Fonction pour déterminer l'icône et la couleur d'accentuation
const getIconAndAccent = (
  iconType: PolicyCardProps["iconType"],
  color: PolicyCardProps["color"]
) => {
  const accentColorCode = color === "orange" ? ORANGE_ACCENT : "#10B981"; // Vert standard

  let iconComponent;
  
  // Style pour le cercle d'icône principal (dans le contenu de la carte)
  const iconStyle = { 
      backgroundColor: accentColorCode, 
      color: 'white' // L'icône elle-même est blanche sur le fond coloré
  };

  switch (iconType) {
    case "economy":
      iconComponent = <IoTrendingUpOutline className="w-6 h-6" style={iconStyle} />;
      break;
    case "budget":
      iconComponent = <IoScaleOutline className="w-6 h-6" style={iconStyle} />;
      break;
    case "environment":
      iconComponent = <IoLeafOutline className="w-6 h-6" style={iconStyle} />;
      break;
  }
  
  return { icon: iconComponent, accentColorCode };
};

const PolicyCard: React.FC<PolicyCardProps> = ({
  iconType,
  title,
  description,
  imageSrc,
  color,
}) => {
  const { icon, accentColorCode } = getIconAndAccent(iconType, color);
  
  // Classes de base pour les icônes sociales (RÉSEAUX SOCIAUX)
  // Petite taille, propre et rond
  const socialIconClasses = `w-8 h-8 rounded-full flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-110`;
  
  // Styles de base et de survol pour les icônes sociales (utilisation des couleurs thématiques)
  const socialIconBaseStyle = {
      color: VIOLET_PRIMARY, // Couleur par défaut: Violet
      backgroundColor: 'white',
      boxShadow: `0 0 5px rgba(0, 0, 0, 0.2)`
  };
  
  // Style de survol spécifique pour les icônes pour qu'elles prennent la couleur Orange Accent
  const socialIconHoverStyle = {
      backgroundColor: ORANGE_ACCENT,
      color: 'white',
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:shadow-2xl flex flex-col group">
      
      {/* Zone de l'image */}
      <div className="h-96 relative overflow-hidden">
        
        <img
          src={imageSrc}
          alt={`Illustration pour ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* --- OVERLAY POUR LES RÉSEAUX SOCIAUX --- */}
        <div 
            className={`absolute inset-0 flex items-center justify-center 
                        bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
            
            <div className="flex space-x-4">
                
                {/* Facebook Icon (Officiel IoLogoFacebook) */}
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Partager sur Facebook" 
                   className={socialIconClasses}
                   style={socialIconBaseStyle}
                   onMouseEnter={e => Object.assign(e.currentTarget.style, socialIconHoverStyle)}
                   onMouseLeave={e => Object.assign(e.currentTarget.style, socialIconBaseStyle)}> 
                    <IoLogoFacebook />
                </a>
                
                {/* LinkedIn Icon (Officiel IoLogoLinkedin) */}
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Partager sur LinkedIn" 
                   className={socialIconClasses}
                   style={socialIconBaseStyle}
                   onMouseEnter={e => Object.assign(e.currentTarget.style, socialIconHoverStyle)}
                   onMouseLeave={e => Object.assign(e.currentTarget.style, socialIconBaseStyle)}>
                    <IoLogoLinkedin />
                </a>
            </div>
        </div>
        {/* --- FIN OVERLAY --- */}

      </div>

      <div className="p-6 flex flex-col h-auto">
        <div className="flex items-start mb-4">
          <div className="p-3 rounded-full text-white" style={{ backgroundColor: accentColorCode }}>
             {React.cloneElement(icon as React.ReactElement,)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        <p className="text-gray-600 text-sm">{description}</p>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
          <span className={`text-xl font-bold mr-2`} style={{ color: accentColorCode }}>
            &bull;
          </span>
          <span className="text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer">Lire Plus</span>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;