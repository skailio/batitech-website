"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from './tilt';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
    mainText: string;
    readMoreLink: string;
    imageSrc: string;
    imageAlt: string;
    overlayText: {
        part1: string;
        part2: string;
    };
    locationText: string;
    className?: string;
}

// The main reusable Hero Section component
export const MinimalistHero = ({
    mainText,
    readMoreLink,
    imageSrc,
    imageAlt,
    overlayText,
    locationText,
    className,
}: MinimalistHeroProps) => {
    return (
        <div
            className={cn(
                'relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-background p-6 font-sans md:p-12',
                className
            )}
        >
            <header className="z-30 flex w-full max-w-7xl mx-auto items-center justify-between pointer-events-none">
                {/* Spacer */}
            </header>

            {/* Main Content Area - Competely Redesigned for Tighter Layout (2 cols) */}
            <div className="relative grid w-full max-w-7xl mx-auto flex-grow grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 pt-12 md:pt-0">

                {/* Left Column: Text & CTA */}
                <div className="z-20 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.9] tracking-tight mb-6">
                            {overlayText.part1}
                            <br />
                            <span className="text-primary">{overlayText.part2}</span>
                        </h1>
                        <p className="max-w-md text-base md:text-lg leading-relaxed text-muted-foreground font-medium">
                            {mainText}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
                    >
                        <a href="tel:0323694292" className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all hover:-translate-y-1">
                            DEVIS GRATUIT
                        </a>
                        <a href={readMoreLink} className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary/20 bg-background px-8 text-base font-bold text-foreground shadow-sm hover:border-primary hover:bg-primary/5 transition-all">
                            NOS SERVICES
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: 3D Image with Tilt Effect */}
                <div className="relative order-1 md:order-2 flex justify-center items-center h-[400px] md:h-[600px]">
                    <motion.div
                        className="relative cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.05,
                            rotateX: 5,
                            rotateY: -5,
                            transition: { duration: 0.4 }
                        }}
                        style={{ perspective: 1000 }}
                    >
                        {/* Glow Effect behind image */}
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75 -z-10" />

                        <motion.img
                            src={imageSrc}
                            alt={imageAlt}
                            className="relative z-10 w-full max-w-[320px] md:max-w-[500px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Footer Elements */}
            <footer className="z-30 flex w-full max-w-7xl mx-auto items-center justify-between pb-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-8"
                >
                    <div>
                        <span className="block text-3xl font-black text-foreground">15+</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Années</span>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                        <span className="block text-3xl font-black text-foreground">250+</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Projets</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="hidden md:block text-sm font-semibold text-muted-foreground"
                >
                    {locationText}
                </motion.div>
            </footer>
        </div>
    );
};
