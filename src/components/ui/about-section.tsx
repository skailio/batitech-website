"use client";

import React from "react";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 bg-white" id="about">
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
                        {/* Commitments List */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                Nos Engagements
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-700 text-sm"><strong className="text-gray-900">Réglementation :</strong> respect des normes en vigueur.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-700 text-sm"><strong className="text-gray-900">Fournitures :</strong> produits ciblés et performants (meilleur rapport qualité/prix).</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-700 text-sm"><strong className="text-gray-900">Recrutement :</strong> qualification de nos employés, sous-traitants et fournisseurs.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-700 text-sm"><strong className="text-gray-900">Environnement :</strong> traçabilité des déchets, produits biodégradables ECO’LABEL.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <p className="text-gray-700 text-sm"><strong className="text-gray-900">SAV :</strong> strict respect des exigences légales et des attentes clients.</p>
                                </li>
                            </ul>
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
                                        <p className="font-bold text-lg">03 23 69 42 92</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Email</p>
                                        <p className="font-bold text-lg">contact@batitech-construction.com</p>
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
