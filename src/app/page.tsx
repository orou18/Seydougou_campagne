
import React from "react";
import Topbar from "@/components/shared/Topbar";
import Header from "@/components/shared/Header";
import HeroSlider from "@/components/shared/HeroSlider";
import PolicyPositionSection from "@/components/shared/PolicyPositionSection";
import VisionMissionSection from "@/components/shared/VisionMissionSection";
import UpcomingEventsSection from '../components/shared/UpcomingEventsSection';
import DonationBanner from "@/components/shared/DonationBanner";
import { GalleryPage } from "@/components/shared/GalleryPage";
import PoliticalTeamSection from "@/components/shared/PoliticalTeamSection";
import {RegularUpdateSection} from "@/components/shared/RegularUpdateSection";
import ContactFormSection from "@/components/shared/ContactFormSection";
import Footer from "@/components/shared/Footer";

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
            title: "Fofana Vakaba – Candidat aux élections légioslatives du 27 décembre 2025",
            subtitle: "Pour une Côte d'Ivoire plus juste, plus forte et plus solidaire.",
            imageSrc: "/images/fofana2.jpeg",
            ctaButtons: [
              { label: "Je soutiens la campagne", href: "/soutenir" },
              { label: "Découvrir le programme", href: "/programme" },
            ],
          },
          {
            title: "Ensemble, osons le changement pour Gbélégban - Seydougou !",
            subtitle: "Innovation • Développement • Cohésion",
            imageSrc: "/images/fofana_ousmane.jpeg",
            ctaButtons: [
              { label: "Participer", href: "/participer" },
              { label: "Voir les actions", href: "/actions" },
            ],
          },
          {
            title: "Une vision moderne pour Gbélégban - Seydougou",
            subtitle: "Leadership – Transparence – Impact",
            imageSrc: "/images/seydougou.png",
            ctaButtons: [
              { label: "Rejoindre l’équipe", href: "/team" },
              { label: "Lire les actualités", href: "/actualites" },
            ],
          },
        ]}
      />
      <br />

      {/* SECTION VALEURS */}
      <PolicyPositionSection />

      <br />

       {/*Section Visions   */}
      <VisionMissionSection />

      <br />

      <UpcomingEventsSection/>

      <br />

       <DonationBanner/>

       <br />

        <GalleryPage/>

        <br />

        <PoliticalTeamSection/>
         <br />

        <RegularUpdateSection/>
         <br />

        <ContactFormSection/>
         <br />

        <Footer/>



    </main>
  );
}
