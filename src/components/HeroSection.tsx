"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

/* ─── Animation variants ─── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-[85vh] flex items-center">
            {/* ── Background image ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Maçonnerie Batitech Construction sur chantier"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {/* Tagline */}
                        <motion.div variants={fadeUp} className="mb-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase text-primary-light bg-primary/10 border border-primary/20 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Intervention rapide (90 km)
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Maçonnerie fiable pour vos{" "}
                            <span className="text-primary">projets neufs</span> et{" "}
                            <span className="text-white">rénovations</span>.
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeUp}
                            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
                        >
                            Batitech Construction – travaux de qualité à{" "}
                            <strong className="text-white font-medium">Château‑Thierry</strong>{" "}
                            et environs. Devis gratuit sous 48h.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                        >
                            {/* Primary CTA */}
                            <a
                                href="tel:+33XXXXXXXXX"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-primary/20 hover:scale-[1.02]"
                            >
                                <span>📞</span>
                                Appeler maintenant
                            </a>

                            {/* Secondary CTA */}
                            <a
                                href="#devis"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white/90 border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-200 font-medium text-lg"
                            >
                                Demander un devis
                            </a>
                        </motion.div>

                        {/* Minimalist Social Proof */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-12 flex items-center gap-4 sm:gap-8 border-t border-white/10 pt-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                                    🏅
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Qualibat RGE</p>
                                    <p className="text-gray-400 text-xs">Entreprise certifiée</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                                    🏗️
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">
                                        +15 ans d&apos;expérience
                                    </p>
                                    <p className="text-gray-400 text-xs">Savoir-faire local</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
