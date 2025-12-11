
import React from "react";
import Topbar from "@/components/shared/Topbar";
import Header from "@/components/shared/Header";
import HeroSlider from "@/components/shared/HeroSlider";
import PolicyPositionSection from "@/components/shared/PolicyPositionSection";
import VisionMissionSection from "@/components/shared/VisionMissionSection";
import UpcomingEventsSection from '../components/shared/UpcomingEventsSection';
export default function HomePage() {
  return (
    <main className="w-full min-h-screen">

      {/* TOPBAR (petite barre en haut avec réseaux / contact) */}
      <Topbar
        email="contact@seydougou.ci"
        phone="+225 07 99 00 00"
        socials={[
          { icon: <></>, href: "#" }, 
        ]}
      />

      {/* HEADER */}
      <Header
        logo="/images/logo1.png"
        menuItems={[
          { label: "Accueil", href: "/" },
          { label: "Biographie", href: "/biographie" },
          { label: "Programme", href: "/programme" },
          { label: "Actualités", href: "/actualites" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaLabel="Je soutiens la campagne"
        ctaHref="/soutenir"
      />

      {/* HERO SLIDER */}
      <HeroSlider
        slides={[
          {
            title: "Fofana Vakaba – Candidat à la mairie de Seydougou",
            subtitle: "Pour une commune forte, unie et prospère",
            imageSrc: "/images/candidat1.jpg",
            ctaButtons: [
              { label: "Je soutiens la campagne", href: "/soutenir" },
              { label: "Découvrir le programme", href: "/programme" },
            ],
          },
          {
            title: "Ensemble, construisons l’avenir",
            subtitle: "Innovation • Développement • Cohésion",
            imageSrc: "/images/candidat2.jpg",
            ctaButtons: [
              { label: "Participer", href: "/participer" },
              { label: "Voir les actions", href: "/actions" },
            ],
          },
          {
            title: "Une vision moderne pour Seydougou",
            subtitle: "Leadership – Transparence – Impact",
            imageSrc: "/images/candidat3.jpg",
            ctaButtons: [
              { label: "Rejoindre l’équipe", href: "/team" },
              { label: "Lire les actualités", href: "/actualites" },
            ],
          },
        ]}
      />

      {/* SECTION VALEURS */}
      <PolicyPositionSection />

       {/*Section Visions   */}
      <VisionMissionSection />

      <UpcomingEventsSection/>



    </main>
  );
}
