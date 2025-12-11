// components/shared/UpcomingEventsSection.tsx
import React from 'react';
import EventCard from './EventCard';

const eventsData = [
  {
    title: "Projet 'Jeunesse et Citoyenneté' 2024",
    description: "Impliquer les jeunes leaders dans la planification du développement local. Lorem Ipsum est un texte simulé.",
    date: "14 Novembre, 2025",
    speaker: "Fofana Vakaba",
    location: "Seydougou, CI",
    imageSrc: "/images/event-image-1.jpg",
  },
  {
    title: "Devenez Volontaire pour le changement",
    description: "Rejoignez notre équipe de bénévoles pour nos actions sociales et de terrain. Lorem Ipsum est un texte simulé.",
    date: "28 Novembre, 2025",
    speaker: "Mme Diomandé",
    location: "Yamoussoukro, CI",
    imageSrc: "/images/event-image-2.jpg",
  },
  {
    title: "Conférence : Leadership et Progrès",
    description: "Échange sur la bonne gouvernance et les clés du succès d'une campagne. Lorem Ipsum est un texte simulé.",
    date: "05 Décembre, 2025",
    speaker: "Dr. Koné",
    location: "Abidjan, CI",
    imageSrc: "/images/event-image-3.jpg",
  },
];

const UpcomingEventsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête de la section (Titre + Texte d'intro) - Espacés aux extrémités */}
        <div className="mb-12 flex flex-col md:flex-row md:items-start md:justify-between space-y-6 md:space-y-0 gap-8">

          {/* Titre et Étiquette - À gauche */}
          <div className="flex-shrink-0">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-red-500 rounded-full">
              Événements
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
              Prochains Événements
            </h2>
          </div>

          {/* Texte d'introduction - À droite */}
          <div className="md:border-l-4 md:border-[#F78E1E] md:pl-6 pt-1 md:max-w-xl">
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor sit amet elit dolor sit amet elit. Nous vous invitons à participer à nos rencontres.
            </p>
          </div>
        </div>

        {/* Liste des Cartes d'Événements - Plus larges */}
        <div className="space-y-8">
          {eventsData.map((event, index) => (
            <EventCard
              key={index}
              index={index}
              title={event.title}
              description={event.description}
              date={event.date}
              speaker={event.speaker}
              location={event.location}
              imageSrc={event.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;