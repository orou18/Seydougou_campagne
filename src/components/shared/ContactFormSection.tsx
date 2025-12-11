// components/ContactFormSection.tsx

"use client";

import React from 'react';
// Importation des icônes pour les points de contact (simulées ici, remplacez par des icônes réelles comme IoLocation, IoCall, IoMail)
import { IoLocationSharp, IoCallSharp, IoMailSharp } from "react-icons/io5"; 

// --- Couleurs et Constantes ---
const VIOLET_PRIMARY = '#4B0082';
const ORANGE_ACCENT = '#FFA500';

const ContactFormSection: React.FC = () => {
    
    // Pour une meilleure réutilisation, les classes de gradient (Violet vers Orange)
    // J'utilise la syntaxe Tailwind avec des valeurs HEX entre crochets pour le gradient.
    const gradientClasses = `bg-gradient-to-r from-[${VIOLET_PRIMARY}] to-[${ORANGE_ACCENT}]`;

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* En-tête de la Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between pb-10 mb-8">
                    
                    {/* Bloc Titre */}
                    <div className="mb-6 md:mb-0 max-w-lg">
                        <div className="inline-block py-1 px-3 mb-2 rounded-sm text-white font-bold text-xs uppercase"
                             style={{ backgroundColor: VIOLET_PRIMARY }}>
                            RESTER CONNECTÉ
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-800 mt-1">
                            Connectez-vous à M. Fofana Vakaba
                        </h2>
                        {/* Texte d'accroche */}
                         <p className="text-gray-600 italic mt-3 border-l-4 pl-4" style={{ borderColor: ORANGE_ACCENT }}>
                            Votre voix compte ! Contactez-nous pour partager vos idées, devenir bénévole ou en savoir plus sur notre programme pour Gbéléban–Seydougou.
                        </p>
                    </div>

                    {/* Bloc Texte d'Explication (Basé sur le design fourni) */}
                    <div className="md:w-1/3 text-gray-700 italic pt-4">
                        {/* Ce texte est inspiré de la mise en page de votre image. */}
                        "Nous nous engageons à construire un lien fort et durable avec chaque citoyen de notre département. Chaque message est lu attentivement."
                    </div>
                </div>

                {/* Contenu (Infos + Formulaire) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Bloc Gauche : Informations de Contact (Get In Touch) */}
                    <div className="lg:col-span-1 p-8 bg-white shadow-xl rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Informations Utiles
                        </h3>
                        
                        {/* Liste des Infos */}
                        <div className="space-y-6">
                            
                            {/* Adresse */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full text-white flex-shrink-0" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoLocationSharp className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-md font-semibold text-gray-800">Adresse de Campagne</p>
                                    <p className="text-sm text-gray-600">Quartier Général, Seydougou, Gbéléban, CI.</p>
                                </div>
                            </div>

                            {/* Téléphone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full text-white flex-shrink-0" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoCallSharp className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-md font-semibold text-gray-800">Ligne Directe</p>
                                    <p className="text-sm text-gray-600">+225 XX XX XX XX</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full text-white flex-shrink-0" style={{ backgroundColor: ORANGE_ACCENT }}>
                                    <IoMailSharp className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-md font-semibold text-gray-800">Adresse E-mail</p>
                                    <p className="text-sm text-gray-600">contact@fofanavakaba.ci</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bloc Droite : Formulaire */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl">
                        <form className="space-y-6">
                            
                            {/* Nom et Prénom */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" placeholder="Prénom" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50" style={{ borderColor: VIOLET_PRIMARY }} required />
                                <input type="text" placeholder="Nom de Famille" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50" style={{ borderColor: VIOLET_PRIMARY }} required />
                            </div>
                            
                            {/* Email et Téléphone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="email" placeholder="Votre E-mail" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50" style={{ borderColor: VIOLET_PRIMARY }} required />
                                <input type="tel" placeholder="Numéro de Téléphone" className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50" style={{ borderColor: VIOLET_PRIMARY }} />
                            </div>
                            
                            {/* Zone/Code Postal - Adapté au contexte CI (Circonscription ou Commune) */}
                            <input type="text" placeholder="Votre Commune ou Village de résidence" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50" style={{ borderColor: VIOLET_PRIMARY }} required />

                            {/* Message */}
                            <textarea placeholder="Votre message ou question (ex: 'Je veux être bénévole', 'Question sur le programme Éducation')" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50" style={{ borderColor: VIOLET_PRIMARY }} required></textarea>

                            {/* Bouton d'Action (Join Now) */}
                            <button 
                                type="submit" 
                                className={`w-full py-3 text-lg font-medium text-white rounded-lg transition-all duration-300 shadow-lg ${gradientClasses} hover:opacity-90`}
                            >
                                Rejoindre le Mouvement / Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;