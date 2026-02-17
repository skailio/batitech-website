"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
    mainText: string;
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
    overlayText,
    locationText,
    className,
}: MinimalistHeroProps) => {
    return (
        <div
            className={cn(
                'relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-white p-6 font-sans md:p-12 pt-24', // added pt-24 for fixed header spacing
                className
            )}
        >
            {/* Main Content Area */}
            <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 gap-8 md:gap-0">

                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="z-20 order-2 md:order-1 text-center md:text-left space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-black text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Disponible pour vos projets
                    </div>

                    <p className="mx-auto max-w-xs text-black leading-relaxed md:mx-0 text-base md:text-lg font-bold">
                        {mainText}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="tel:0323694292">
                            <Button className="h-12 px-8 text-base font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                                <Phone className="mr-2 h-4 w-4" /> Devis Gratuit
                            </Button>
                        </a>
                        <Link href="#services" passHref>
                            <Button variant="outline" className="h-12 px-8 text-base font-bold uppercase tracking-wide border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                                Nos Services
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Center Content Removed (Layout Adjusted) */}
                <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[100px] md:min-h-[400px]">
                    {/* Placeholder for spacing or potential future content */}
                </div>

                {/* Right Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="z-20 order-3 flex items-center justify-center text-center md:justify-start pl-0 md:pl-8"
                >
                    <h1 className="text-6xl font-extrabold text-black md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
                        {overlayText.part1}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-dark">
                            {overlayText.part2}
                        </span>
                        <span className="text-primary text-4xl">.</span>
                    </h1>
                </motion.div>
            </div>

            {/* Footer Elements inside Hero */}
            <div className="z-30 mt-12 flex w-full max-w-7xl items-center justify-between border-t border-gray-100 pt-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex items-center gap-6"
                >
                    {/* Stats */}
                    <div>
                        <p className="text-3xl font-bold text-gray-900">15+</p>
                        <p className="text-xs text-gray-900 uppercase tracking-wider">Années d&apos;exp.</p>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">250+</p>
                        <p className="text-xs text-gray-900 uppercase tracking-wider">Chantiers livrés</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="text-sm font-medium text-gray-800 hidden sm:block"
                >
                    {locationText}
                </motion.div>
            </div>
        </div>
    );
};
