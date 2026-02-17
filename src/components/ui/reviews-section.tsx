"use client";

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Real Review Data from User
const REVIEWS = [
    {
        author: "Champagne PHD",
        date: "il y a 7 mois",
        text: "Entreprise très sérieuse et très PRO, Félicitations à Sylvain, José les maçons et Joël et Lucas, les couvreurs.",
        initial: "C",
    },
    {
        author: "Maxime Livernaux",
        date: "il y a 5 ans",
        text: "Nous sommes passés par cette entreprise sans aucune connaissance dans l'Aisne mais le dirigeant (monsieur Morin) a su nous conseiller et nous permettre d'éviter des erreurs sur les différents devis que nous avons réalisés.",
        initial: "M",
    },
    {
        author: "Laetitia Adnet",
        date: "il y a 7 ans",
        text: "Très bon travail, professionnel et investit dans la réalisation des travaux. Merci.",
        initial: "L",
    },
    {
        author: "Lionnel Bonnet",
        date: "il y a 5 ans",
        text: "Positif : Ponctualité, Qualité, Professionnalisme.",
        initial: "L",
    },
    {
        author: "Yann Tatry",
        date: "il y a 8 ans",
        text: "Très Pro.",
        initial: "Y",
    },
];

// Google Logo SVG
const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const ReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[400px] snap-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[240px]">
            <div>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                            {review.initial}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">{review.author}</h4>
                            <p className="text-gray-400 text-xs">{review.date}</p>
                        </div>
                    </div>
                    <GoogleLogo />
                </div>
                <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-600 text-sm line-clamp-4 leading-relaxed">
                    {review.text}
                </p>
            </div>
        </div>
    );
};

export function ReviewsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 350; // Approx card width + gap
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                            Ils nous font <span className="text-gray-900">confiance</span>
                        </h2>
                        <p className="text-gray-500 max-w-lg">
                            Découvrez les retours de nos clients sur la qualité de nos réalisations et notre professionnalisme.
                        </p>
                    </div>

                    {/* Google Badge Summary */}
                    <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-xl text-gray-900">4.6</span>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                            <GoogleLogo />
                            <span className="text-sm font-medium text-gray-600">Google Reviews</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-2 mb-4">
                    <button
                        onClick={() => scroll("left")}
                        className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Previous reviews"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Next reviews"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 px-1"
                >
                    {REVIEWS.map((review, idx) => (
                        <ReviewCard key={`${review.author}-${idx}`} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
