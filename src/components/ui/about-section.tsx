"use client";

import { ShieldCheck, Leaf, Users, Truck } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Main Description */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs rounded-full">
                            Notre Expertise
                        </div>
                        <h2 className="text-4xl font-heading font-extrabold text-gray-900 leading-tight">
                            Votre projet de A à Z, <br />
                            <span className="text-primary">clé en main.</span>
                        </h2>
                        <div className="prose prose-lg text-gray-700 space-y-4">
                            <p>
                                Chez <strong>BATITECH</strong>, nous gérons votre projet de A à Z, de la réalisation des plans jusqu’à la livraison clé en main de votre projet, en vous assurant un travail de qualité.
                            </p>
                            <p>
                                Tous vos travaux font l’objet en interne de procédures d’autocontrôle dont l’objectif est le respect de la qualité et des délais de réalisation.
                            </p>
                            <p>
                                Notre entreprise intervient en corps d’état séparés, en entreprise générale, mais aussi en groupement d’entreprises.
                            </p>
                        </div>

                        <div className="pt-6 relative">
                            <div className="absolute left-0 top-6 bottom-0 w-1 bg-primary rounded-full"></div>
                            <div className="pl-6 space-y-1">
                                <h4 className="font-bold text-gray-900">Zone d&apos;intervention</h4>
                                <p className="text-gray-600">
                                    Nous intervenons jusqu’à <strong>90 km</strong> autour de Château-Thierry. <br />
                                    Situé sur l&apos;axe A4 entre PARIS et REIMS.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Commitments Grid (Expanded) */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <ShieldCheck className="text-primary w-8 h-8" />
                                Nos Engagements
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Card 1 */}
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">Réglementation</h4>
                                    <p className="text-gray-600 leading-relaxed">Respect strict des normes en vigueur (DTU, règles de l&apos;art).</p>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <Truck className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">Fournitures</h4>
                                    <p className="text-gray-600 leading-relaxed">Produits ciblés et performants (meilleur rapport qualité/prix).</p>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">Recrutement</h4>
                                    <p className="text-gray-600 leading-relaxed">Qualification certifiée de nos employés et partenaires.</p>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <Leaf className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">Environnement</h4>
                                    <p className="text-gray-600 leading-relaxed">Traçabilité déchets & produits ECO’LABEL.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
