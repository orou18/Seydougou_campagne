// components/shared/DonationBanner.tsx
import React from 'react';
import Link from 'next/link';

const DonationBanner: React.FC = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative rounded-sm overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #5A458E 0%, #8B5A9E 50%, #F78E1E 100%)'
          }}
        >
          {/* Motif décoratif en arrière-plan */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
          </div>

          {/* Contenu */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 p-6 md:p-8">
            
            {/* Texte */}
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                Soutenez la Campagne de FOFANA VAKABA
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Votre contribution nous aide à porter la voix de notre circonscription à l'Assemblée Nationale. 
                Ensemble, construisons un avenir meilleur pour la Côte d'Ivoire.
              </p>
            </div>

            {/* Bouton */}
            <div className="flex-shrink-0">
              <Link 
                href="/faire-un-don"
                className="inline-block px-6 py-3 bg-white text-[#5A458E] font-bold text-base rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 hover:bg-[#F78E1E] hover:text-white transition-all duration-300"
              >
                Faire un Don
              </Link>
            </div>
          </div>

          {/* Barre décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5A458E] via-white to-[#F78E1E]"></div>
        </div>
      </div>
    </section>
  );
};

export default DonationBanner;