// components/StatBar.tsx
import React from "react";
import {
  IoCheckmarkCircleOutline,
  IoHappyOutline,
  IoLocationOutline,
  IoRibbonOutline,
} from "react-icons/io5";

// Définition du type pour chaque statistique
interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

// Les données des statistiques
const stats: StatItem[] = [
  {
    icon: <IoCheckmarkCircleOutline className="w-8 h-8" />,
    value: "1,500",
    label: "Campagnes en cours",
  },
  {
    icon: <IoHappyOutline className="w-8 h-8" />,
    value: "4,500",
    label: "Volontaires",
  },
  {
    icon: <IoLocationOutline className="w-8 h-8" />,
    value: "5,500",
    label: "Visites de terrain",
  },
  {
    icon: <IoRibbonOutline className="w-8 h-8" />,
    value: "6,500",
    label: "Prix remportés",
  },
];

const StatBar: React.FC = () => {
  // Couleur principale du drapeau Ivoirien (Orange)
  const bgColor = "bg-[#F4E8A5]";

  return (
    <div className={`py-6 sm:py-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <div className="mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm uppercase tracking-wide opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatBar;
