"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
                'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
                className
            )}
        >
            {/* Header (Removed generic nav here since we use Kinetic Nav separately, but keeping layout props if needed) */}
            <header className="z-30 flex w-full max-w-7xl items-center justify-between pointer-events-none">
                {/* Spacer to push content down if needed or keep structure */}
            </header>

            {/* Main Content Area */}
            <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 pt-20">
                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="z-20 order-2 md:order-1 text-center md:text-left"
                >
                    <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0 font-medium">
                        {mainText}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                        <a href="tel:0323694292" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            DEVIS GRATUIT
                        </a>
                        <a href={readMoreLink} className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            NOS SERVICES
                        </a>
                    </div>
                </motion.div>

                {/* Center Image with Building Theme Shape */}
                <div className="relative order-1 md:order-2 flex justify-center items-center h-[500px]">
                    {/* Building/House Theme Shape: Square with rounded corners (Squaricle) instead of Circle */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="absolute z-0 h-[300px] w-[300px] rounded-[2rem] bg-primary/20 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
                        style={{ borderRadius: '2rem 2rem 0 0' }} // House/Arch shape hint
                    ></motion.div>

                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className="relative z-10 h-auto w-56 object-contain md:w-64 lg:w-80 drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    />
                </div>

                {/* Right Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
                >
                    <h1 className="text-6xl font-extrabold text-foreground md:text-7xl lg:text-8xl leading-none tracking-tight">
                        {overlayText.part1}
                        <br />
                        <span className="text-primary">{overlayText.part2}</span>
                    </h1>
                </motion.div>
            </div>

            {/* Footer Elements */}
            <footer className="z-30 flex w-full max-w-7xl items-center justify-between pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex items-center space-x-4"
                >
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-gray-900">15+</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500">Années d&apos;exp.</span>
                    </div>
                    <div className="h-8 w-px bg-gray-200 mx-4"></div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-gray-900">250+</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500">Chantiers livrés</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="text-sm font-medium text-foreground/80 hidden md:block"
                >
                    {locationText}
                </motion.div>
            </footer>
        </div>
    );
};
