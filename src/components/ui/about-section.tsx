"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, Leaf, Users, Truck } from "lucide-react";

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

                    {/* Right: Commitments & Info */}
                    <div className="space-y-10">
                        {/* Commitments Grid */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <ShieldCheck className="text-primary w-8 h-8" />
                                Nos Engagements
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">Réglementation</h4>
                                    <p className="text-sm text-gray-600">Respect strict des normes en vigueur.</p>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary">
                                        <Truck className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">Fournitures</h4>
                                    <p className="text-sm text-gray-600">Produits ciblés et performants (meilleur rapport qualité/prix).</p>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">Recrutement</h4>
                                    <p className="text-sm text-gray-600">Qualification certifiée de nos employés et partenaires.</p>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary">
                                        <Leaf className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">Environnement</h4>
                                    <p className="text-sm text-gray-600">Traçabilité déchets & produits ECO’LABEL.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl" id="contact">
                            <h3 className="text-2xl font-bold mb-6">Nous Contacter</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Téléphone</p>
                                        <a href="tel:0323694292" className="font-bold text-lg hover:text-primary transition-colors">03 23 69 42 92</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Email</p>
                                        <a href="mailto:contact@batitech-construction.com" className="font-bold text-lg hover:text-primary transition-colors">contact@batitech-construction.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Adresse</p>
                                        <p className="font-bold">Château-Thierry, Picardie</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
