// components/PolicyCard.tsx
import React from "react";
import {
  IoLeafOutline,
  IoScaleOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

// Définition des propriétés que la carte va recevoir
interface PolicyCardProps {
  iconType: "economy" | "budget" | "environment";
  title: string;
  description: string;
  imageSrc: string; // Source de l'image de fond
  color: "orange" | "green"; // Couleur pour l'icône et l'accent
}

// Fonction pour déterminer l'icône et la couleur d'accentuation (orange/vert Ivoirien)
const getIconAndAccent = (
  iconType: PolicyCardProps["iconType"],
  color: PolicyCardProps["color"]
) => {
  const baseClasses = `p-3 rounded-full text-white`;
  let icon;
  let accentClass;

  if (color === "orange") {
    accentClass = "bg-[#F4E8A5]"; // Orange du drapeau Ivoirien
  } else {
    accentClass = "bg-green-600"; // Vert du drapeau Ivoirien
  }

  const iconClasses = `${baseClasses} ${accentClass}`;

  switch (iconType) {
    case "economy":
      icon = <IoTrendingUpOutline className="w-6 h-6" />;
      break;
    case "budget":
      icon = <IoScaleOutline className="w-6 h-6" />;
      break;
    case "environment":
      icon = <IoLeafOutline className="w-6 h-6" />;
      break;
  }

  return { icon, accentClass: accentClass.replace("bg-", "text-") };
};

const PolicyCard: React.FC<PolicyCardProps> = ({
  iconType,
  title,
  description,
  imageSrc,
  color,
}) => {
  const { icon, accentClass } = getIconAndAccent(iconType, color);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:shadow-2xl flex flex-col">
      {/* Zone de l'image */}
      <div className="h-96 relative overflow-hidden">
        {/* On utilise l'image fournie, mais on pourrait utiliser next/image */}
        <img
          src={imageSrc}
          alt={`Illustration pour ${title}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu de la carte */}
      <div className="p-6 flex flex-col h-auto">
        <div className="flex items-start mb-4">
          <div
            className={icon.props.className.replace(
              "text-white",
              "text-white bg-opacity-90"
            )}
          >
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        <p className="text-gray-600 text-sm">{description}</p>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
          {/* Petit accent visuel comme sur l'image d'origine */}
          <span className={`text-xl font-bold mr-2 ${accentClass}`}>
            &bull;
          </span>
          <span className="text-xs font-semibold text-gray-500">Lire Plus</span>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
