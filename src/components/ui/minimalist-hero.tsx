"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 text-secondary text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Disponible pour vos projets
                    </div>

                    <p className="mx-auto max-w-xs text-secondary/80 leading-relaxed md:mx-0 text-base md:text-lg font-medium">
                        {mainText}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Button className="h-12 px-8 text-base font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                            <Phone className="mr-2 h-4 w-4" /> Devis Gratuit
                        </Button>
                        <Link href={readMoreLink} passHref>
                            <Button variant="outline" className="h-12 px-8 text-base font-bold uppercase tracking-wide border-secondary text-secondary hover:bg-secondary hover:text-white">
                                Nos Services
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Center Image with Circle */}
                <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[400px]">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="absolute z-0 h-[280px] w-[280px] rounded-full bg-primary/20 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
                    ></motion.div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="absolute z-0 h-[220px] w-[220px] rounded-full border border-primary/40 md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]"
                    ></motion.div>

                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className="relative z-10 h-[300px] w-[200px] object-cover md:w-[280px] md:h-[400px] lg:w-[320px] lg:h-[500px] shadow-2xl rounded-sm"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    />
                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute top-10 right-0 md:-right-10 z-20 bg-white p-4 rounded-lg shadow-xl border border-gray-100 max-w-[150px]"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                            <span className="font-bold text-secondary text-sm">Qualibat RGE</span>
                        </div>
                        <p className="text-xs text-gray-500">Certification officielle garantie.</p>
                    </motion.div>
                </div>

                {/* Right Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="z-20 order-3 flex items-center justify-center text-center md:justify-start pl-0 md:pl-8"
                >
                    <h1 className="text-6xl font-extrabold text-secondary md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
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
                        <p className="text-3xl font-bold text-secondary">15+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Années d&apos;exp.</p>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div>
                        <p className="text-3xl font-bold text-secondary">250+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Chantiers livrés</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="text-sm font-medium text-gray-500 hidden sm:block"
                >
                    {locationText}
                </motion.div>
            </div>
        </div>
    );
};
