"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

/* ─── Animation variants ─── */
const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
    },
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1 },
    },
};



/* ─── Social proof items ─── */
const badges = [
    { label: "Qualibat-RGE", icon: "🏅" },
    { label: "+15 ans d'expérience", icon: "⏳" },
    { label: "Devis gratuit", icon: "✅" },
];

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* ── Background image ── */}
            <div className="absolute inset-0 z-0">
                {/*
          Replace /images/hero-bg.jpg with your real construction photo.
          Drop it into public/images/ and update the src below.
        */}
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Chantier de maçonnerie Batitech Construction"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                    quality={85}
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* ── Decorative top-right glow ── */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-32 lg:py-0">
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                    {/* Left: Text block (3 cols) */}
                    <motion.div
                        className="lg:col-span-3 text-center lg:text-left"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge / Tagline */}
                        <motion.div variants={fadeUp}>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase text-primary-light border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Maçonnerie Générale — Neuf &amp; Rénovation
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-6"
                        >
                            Bâtissons l&apos;avenir,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-light">
                                pierre par pierre.
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeUp}
                            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
                        >
                            Batitech Construction, votre partenaire maçonnerie à{" "}
                            <strong className="text-white">Château‑Thierry</strong> et
                            environs (90&nbsp;km). Constructions neuves, rénovations,
                            extensions — devis gratuit sous 48&nbsp;h.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            {/* Primary CTA — Appeler */}
                            <a
                                href="tel:+33XXXXXXXXX"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base sm:text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.03]"
                            >
                                <span className="text-xl">📞</span>
                                Appeler maintenant
                                {/* Shine effect */}
                                <span className="absolute inset-0 rounded-xl overflow-hidden">
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                </span>
                            </a>

                            {/* Secondary CTA — Devis */}
                            <a
                                href="#devis"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-[1.03]"
                            >
                                Demander un devis
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </motion.div>

                        {/* Trust / Stats bar */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
                        >
                            {[
                                { value: "200+", label: "Chantiers réalisés" },
                                { value: "15+", label: "Années d'expérience" },
                                { value: "100%", label: "Clients satisfaits" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <p className="text-2xl sm:text-3xl font-heading font-bold text-white">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Social proof card (2 cols) */}
                    <motion.div
                        className="lg:col-span-2 flex justify-center lg:justify-end"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="glass rounded-2xl p-6 sm:p-8 max-w-sm w-full space-y-5">
                            {/* Card header */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                                    B
                                </div>
                                <div>
                                    <p className="text-white font-heading font-semibold text-sm">
                                        Batitech Construction
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        Brasles / Château‑Thierry
                                    </p>
                                </div>
                            </div>

                            {/* Badges */}
                            {badges.map((badge) => (
                                <div
                                    key={badge.label}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                                >
                                    <span className="text-xl flex-shrink-0">{badge.icon}</span>
                                    <span className="text-sm text-gray-200 font-medium">
                                        {badge.label}
                                    </span>
                                </div>
                            ))}

                            {/* Mini testimonial */}
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-gray-300 text-sm italic leading-relaxed">
                                    &ldquo;Travail soigné, délais respectés. Je recommande
                                    Batitech les yeux fermés !&rdquo;
                                </p>
                                <p className="text-gray-500 text-xs mt-2">
                                    — M. Dupont, Château‑Thierry
                                </p>
                                <div className="flex gap-0.5 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 text-accent"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-gray-400 text-xs tracking-widest uppercase">
                    Découvrir
                </span>
                <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-1.5">
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
