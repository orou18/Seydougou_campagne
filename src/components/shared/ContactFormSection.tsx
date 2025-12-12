// components/ContactFormSection.tsx

"use client";

import React from 'react';
import { IoLocationSharp, IoCallSharp, IoMailSharp, IoArrowForward } from "react-icons/io5"; 

// --- Couleurs et Constantes ---
const VIOLET_PRIMARY = '#4B0082';
const ORANGE_ACCENT = '#FFA500';

const ContactFormSection: React.FC = () => {
    
    const gradientClasses = `bg-gradient-to-r from-[#4B0082] to-[#FFA500]`;
    
    const inputFocusStyle = {
        borderColor: VIOLET_PRIMARY,
        // Ajout d'une ombre douce (glow) orange au focus
        boxShadow: `0 0 0 3px ${ORANGE_ACCENT}30`, // 30 = 20% d'opacité
        transition: 'border-color 0.3s, box-shadow 0.3s',
    };

    return (
        <section className="py-20 bg-gray-100"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <div className="inline-block py-1 px-3 mb-2 rounded-sm text-white bg-[#FFA500] font-bold text-xs uppercase tracking-widest">
                        PARTICIPATION
                    </div>
                    <h2 className="text-5xl font-extrabold  text-gray-900 mt-1">
                        S'engager et Construire Seydougou
                    </h2>
                    <p className="text-lg text-gray-600 italic max-w-3xl mx-auto mt-4">
                        Contactez directement l'équipe de campagne de M. Fofana Vakaba. Chaque citoyen est un pilier de notre victoire législative.
                    </p>
                </div>

                {/* Contenu (Infos + Formulaire) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Bloc Gauche : Informations de Contact (Visuellement Distinct) */}
                    <div className="lg:col-span-1 p-8 bg-[#4B0082] hover:bg-amber-500 rounded-xl shadow-2xl text-white" >
                        
                        <h3 className="text-3xl font-bold mb-8 border-b-2 pb-3" style={{ borderColor: ORANGE_ACCENT }}>
                            Restons en Contact !
                        </h3>
                        
                        {/* Texte d'Explication dans le bloc sombre */}
                        <p className="text-sm italic mb-10 opacity-80">
                            Que vous ayez une question, une proposition, ou l'envie de rejoindre le mouvement, notre équipe est prête à vous écouter.
                        </p>
                        
                        {/* Liste des Infos */}
                        <div className="space-y-8">
                            
                            {/* Adresse */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full text-gray-900 flex-shrink-0 shadow-lg" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoLocationSharp className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-md font-semibold">Adresse de Campagne</p>
                                    <p className="text-sm opacity-80">Quartier Général, Seydougou, Gbéléban, CI.</p>
                                </div>
                            </div>

                            {/* Téléphone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full text-gray-900 flex-shrink-0 shadow-lg" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoCallSharp className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-md font-semibold">Ligne Directe</p>
                                    <p className="text-sm opacity-80">+225 XX XX XX XX</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full text-gray-900 flex-shrink-0 shadow-lg" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoMailSharp className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-md font-semibold">Adresse E-mail</p>
                                    <p className="text-sm opacity-80">contact@fofanavakaba.ci</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bloc Droite : Formulaire (Clair et Net) */}
                    <div className="lg:col-span-2 bg-white p-10 rounded-xl shadow-2xl">
                        <form className="space-y-6">
                            
                            {/* Nom et Prénom */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input 
                                    type="text" 
                                    placeholder="Prénom" 
                                    className="p-3 border border-gray-300 rounded-lg w-full focus:ring-0 text-gray-500" 
                                 />
                                <input 
                                    type="text" 
                                    placeholder="Nom de Famille" 
                                    className="p-3 border border-gray-300 rounded-lg w-full focus:ring-0 text-gray-500" 
                                 />
                            </div>
                            
                            {/* Email et Téléphone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input 
                                    type="email" 
                                    placeholder="Votre E-mail" 
                                    className="p-3 border border-gray-300 rounded-lg w-full focus:ring-0 text-gray-500" 
                                 />
                                <input 
                                    type="tel" 
                                    placeholder="Numéro de Téléphone" 
                                    className="p-3 border border-gray-300 rounded-lg w-full focus:ring-0 text-gray-500" 
                                />
                            </div>
                            
                            {/* Commune/Village */}
                            <input 
                                type="text" 
                                placeholder="Votre Commune ou Village de résidence" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-500" 
                            />

                            {/* Message */}
                            <textarea 
                                placeholder="Votre message ou question (ex: 'Je veux être bénévole', 'Proposition pour le développement')" 
                                rows={5} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-500" 
                            ></textarea>

                            <button 
                                type="submit" 
                                className={`w-full py-4 text-xl font-extrabold text-white rounded-lg transition-all duration-300 shadow-xl ${gradientClasses} 
                                           transform hover:scale-[1.01] hover:shadow-2xl flex items-center justify-center space-x-3`}
                                style={{
                                    border: `2px solid ${VIOLET_PRIMARY}`, 
                                }}
                            >
                                <span>JE M'ENGAGE / ENVOYER MON MESSAGE</span>
                                <IoArrowForward className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;