"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

/* ─── Animation variants ─── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
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
        transition: { duration: 0.8 },
    },
};

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
            {/* ── Left Column: Content (White/Light) ── */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-0 relative z-10 bg-white">
                {/* Decorative accent line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-0 left-0 w-32 h-2 bg-primary origin-left"
                />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                    className="max-w-xl"
                >
                    {/* Label */}
                    <motion.div variants={fadeUp} className="mb-6">
                        <span className="inline-block py-1 px-3 bg-secondary text-white text-xs font-bold tracking-widest uppercase mb-4">
                            Batitech Construction
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUp}
                        className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-secondary leading-tight mb-8"
                    >
                        Bâtissons <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                            L&apos;Excellence.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-600 mb-10 leading-relaxed font-medium"
                    >
                        Maçonnerie générale, gros œuvre et rénovation à{" "}
                        <span className="text-secondary font-bold">Château‑Thierry</span>.
                        Votre projet mérite une expertise solide et certifiée.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <a
                            href="tel:+33XXXXXXXXX"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg uppercase tracking-wide transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30"
                        >
                            Appeler maintenant
                        </a>
                        <a
                            href="#devis"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-secondary font-bold text-lg uppercase tracking-wide transition-all border border-gray-200"
                        >
                            Devis Gratuit
                        </a>
                    </motion.div>

                    {/* Trust Indicators (Grid) */}
                    <motion.div
                        variants={fadeIn}
                        className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-secondary mb-1">15+</h3>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                                Années d&apos;expérience
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-secondary mb-1">100%</h3>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                                Satisfaction Client
                            </p>
                        </div>
                        <div className="col-span-2 flex items-center gap-3 mt-2">
                            <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-xl shadow-sm">
                                🏅
                            </span>
                            <span className="text-secondary font-bold text-sm">
                                Certifié Qualibat RGE
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Right Column: Image (Full Height) ── */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative bg-gray-900">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Chantier Batitech"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                />
                {/* Accent Overlay blocked */}
                <div className="absolute inset-0 bg-secondary/10 lg:bg-transparent" />

                {/* Decorative Box (Yellow) */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary hidden lg:block" />
                <div className="absolute bottom-8 left-8 w-24 h-24 border-2 border-white/30 hidden lg:block" />
            </div>
        </section>
    );
}
