"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
    gsap.registerPlugin(CustomEase);
}

export function SterlingGateNav() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;
        try {
            if (!gsap.parseEase("main")) {
                CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
                gsap.defaults({ ease: "main", duration: 0.7 });
            }
        } catch (e) {
            console.warn("CustomEase failed", e);
            gsap.defaults({ ease: "power2.out", duration: 0.7 });
        }
    }, []);

    // Animation Logic
    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
            const menu = containerRef.current!.querySelector(".menu-content");
            const overlay = containerRef.current!.querySelector(".overlay");
            const links = containerRef.current!.querySelectorAll(".nav-link");

            const tl = gsap.timeline();

            if (isMenuOpen) {
                // Remove hidden class manually to ensure GSAP can animate opacity/display
                if (navWrap) {
                    navWrap.classList.remove("hidden");
                    navWrap.setAttribute("data-nav", "open");
                }

                tl.set(navWrap, { display: "block", autoAlpha: 1 })
                    .set(menu, { xPercent: 0, opacity: 1 }, "<") // Ensure opacity 1
                    .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
                    .fromTo(links, { x: 50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.2");
            } else {
                if (navWrap) navWrap.setAttribute("data-nav", "closed");
                tl.to(overlay, { autoAlpha: 0 })
                    .to(menu, { xPercent: 100 }, "<")
                    .set(navWrap, { display: "none", autoAlpha: 0 }); // Hide after animation
            }
        }, containerRef);
        return () => ctx.revert();
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
            {/* Header */}
            <header className="w-full px-6 py-4 flex justify-between items-center bg-transparent pointer-events-auto relative z-[10000]">
                <a href="#" className="pointer-events-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo-batitech.png" alt="Batitech" className="h-12 md:h-14 w-auto object-contain" />
                </a>

                {/* Custom Green Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="group flex items-center gap-3 pointer-events-auto focus:outline-none"
                >
                    <span className="text-gray-900 font-bold uppercase tracking-widest text-sm hidden sm:block group-hover:text-primary transition-colors">
                        Menu
                    </span>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg transition-transform transform group-hover:scale-110">
                        {/* Hamburger Icon */}
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="2" rx="1" fill="currentColor" />
                            <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
                            <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
                        </svg>
                    </div>
                </button>
            </header>

            {/* Fullscreen Overlay Menu */}
            {/* Added bg-primary directly to debug transparency, though it should be on nav. Added high z-index */}
            <div className="nav-overlay-wrapper hidden fixed inset-0 z-[9998] pointer-events-auto">
                {/* Dark Overlay */}
                <div className="overlay absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleMenu}></div>

                {/* Menu Panel (Green Background) */}
                <nav className="menu-content absolute top-0 right-0 w-full md:max-w-md h-full bg-green-600 shadow-2xl flex flex-col transform translate-x-full">
                    {/* Forced bg-green-600 to ensure visibility if bg-primary variable is weak */}

                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={toggleMenu}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 flex flex-col justify-center px-10 space-y-8">
                        <div className="space-y-6">
                            <a href="#" className="nav-link block text-white text-3xl md:text-4xl font-heading font-bold hover:text-white/80 transition-colors pb-4 border-b border-white/20">
                                La société Batitech
                            </a>
                            <a href="#realisations" className="nav-link block text-white text-3xl md:text-4xl font-heading font-bold hover:text-white/80 transition-colors pb-4 border-b border-white/20">
                                Nos Réalisations
                            </a>
                            <a href="#contact" className="nav-link block text-white text-3xl md:text-4xl font-heading font-bold hover:text-white/80 transition-colors pb-4 border-b border-white/20">
                                Nous Contacter
                            </a>
                        </div>
                    </div>

                    {/* Footer Info in Menu */}
                    <div className="p-10 text-white/80 text-sm space-y-2">
                        <p className="font-bold text-white">Batitech Construction</p>
                        <p>03 23 69 42 92</p>
                        <p>contact@batitech-construction.com</p>
                    </div>
                </nav>
            </div>
        </div>
    );
}
