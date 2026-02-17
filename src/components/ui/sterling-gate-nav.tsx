"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";


// Register GSAP Plugins safely
if (typeof window !== "undefined") {
    gsap.registerPlugin(CustomEase);
}

export function SterlingGateNav() {
    // We need a ref for the parent container to scope GSAP
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Initial Setup & Hover Effects
    useEffect(() => {
        if (!containerRef.current) return;

        // Create custom easing
        try {
            if (!gsap.parseEase("main")) {
                CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
                gsap.defaults({ ease: "main", duration: 0.7 });
            }
        } catch (e) {
            console.warn("CustomEase failed to load, falling back to default.", e);
            gsap.defaults({ ease: "power2.out", duration: 0.7 });
        }

        const currentContainer = containerRef.current;

        const ctx = gsap.context(() => {
            // 2. Shape Hover
            const menuItems = currentContainer!.querySelectorAll(".menu-list-item[data-shape]");
            const shapesContainer = currentContainer!.querySelector(".ambient-background-shapes");

            menuItems.forEach((item) => {
                const shapeIndex = item.getAttribute("data-shape");
                const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;

                if (!shape) return;

                const shapeEls = shape.querySelectorAll(".shape-element");

                const onEnter = () => {
                    if (shapesContainer) {
                        shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
                    }
                    shape.classList.add("active");

                    gsap.fromTo(shapeEls,
                        { scale: 0.5, opacity: 0, rotation: -10 },
                        { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
                    );
                };

                const onLeave = () => {
                    gsap.to(shapeEls, {
                        scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
                        onComplete: () => shape.classList.remove("active"),
                        overwrite: "auto"
                    });
                };

                item.addEventListener("mouseenter", onEnter);
                item.addEventListener("mouseleave", onLeave);

                (item as Element & { _cleanup?: () => void })._cleanup = () => {
                    item.removeEventListener("mouseenter", onEnter);
                    item.removeEventListener("mouseleave", onLeave);
                };
            });

        }, containerRef);

        return () => {
            ctx.revert();
            if (currentContainer) {
                const items = currentContainer.querySelectorAll(".menu-list-item[data-shape]");
                items.forEach((item) => (item as Element & { _cleanup?: () => void })._cleanup?.());
            }
        };
    }, []);

    // Menu Open/Close Animation Effect
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
            const menu = containerRef.current!.querySelector(".menu-content");
            const overlay = containerRef.current!.querySelector(".overlay");
            const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
            const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
            const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");

            const menuButton = containerRef.current!.querySelector(".nav-close-btn");
            const menuButtonTexts = menuButton?.querySelectorAll("p") || [];
            const menuButtonIcon = menuButton?.querySelector(".menu-button-icon") || [];

            const tl = gsap.timeline();

            if (isMenuOpen) {
                // OPEN
                if (navWrap) navWrap.setAttribute("data-nav", "open");

                tl.set(navWrap, { display: "block" })
                    .set(menu, { xPercent: 0 }, "<")
                    .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
                    .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")

                    .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
                    .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
                    .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");

                if (fadeTargets.length) {
                    tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
                }

            } else {
                // CLOSE
                if (navWrap) navWrap.setAttribute("data-nav", "closed");

                tl.to(overlay, { autoAlpha: 0 })
                    .to(menu, { xPercent: 120 }, "<")
                    .to(menuButtonTexts, { yPercent: 0 }, "<")
                    .to(menuButtonIcon, { rotate: 0 }, "<")

                    .set(navWrap, { display: "none" });
            }

        }, containerRef);

        return () => ctx.revert();
    }, [isMenuOpen]);

    // keydown Escape handling
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            {/* 
        Modified to use 'fixed' and 'pointer-events-none' so it overlays the page 
        without blocking clicks on underlying content when closed.
        The interactive elements (buttons) will have 'pointer-events-auto'.
      */}

            <div className="site-header-wrapper w-full">
                <header className="header w-full px-6 py-4 flex justify-between items-center bg-transparent">
                    {/* Transparent header */}
                    <div className="container is--full flex justify-between items-center w-full max-w-7xl mx-auto">
                        {/* Logo */}
                        <a href="#" aria-label="home" className="nav-logo-row w-inline-block pointer-events-auto font-heading text-2xl font-bold text-secondary">
                            BATITECH
                        </a>

                        <div className="nav-row__right flex items-center gap-4">
                            {/* Clean Menu Indicator (Arrow Removed) */}
                            <div className="nav-toggle-label hidden sm:block pointer-events-auto" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                                <span className="toggle-text text-sm font-medium uppercase tracking-widest text-secondary">Menu</span>
                            </div>

                            {/* Restored Menu Button */}
                            <button role="button" className="nav-close-btn pointer-events-auto relative w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full overflow-hidden hover:scale-105 transition-transform" onClick={toggleMenu}>
                                <div className="menu-button-text absolute inset-0 flex flex-col items-center justify-center transition-transform">
                                    {/* SVG Icon instead of text for simplicity or keep logic */}
                                    {/* The GSAP logic expects specific structure for icon rotation. */}
                                </div>
                                <div className="icon-wrap relative z-10 w-4 h-4">
                                    {/* Hamburger / Close Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="menu-button-icon text-white"
                                    >
                                        <path
                                            d="M0 4h16v2H0zM0 10h16v2H0z" // Simple hamburger
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            <section className="fullscreen-menu-container absolute top-0 left-0 w-full h-screen pointer-events-none">
                <div data-nav="closed" className="nav-overlay-wrapper hidden w-full h-full fixed inset-0 z-50 pointer-events-auto">
                    <div className="overlay absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0" onClick={closeMenu}></div>
                    <nav className="menu-content absolute top-0 right-0 w-full md:w-[600px] h-full bg-white transform translate-x-full shadow-2xl overflow-hidden">
                        <div className="menu-bg absolute inset-0 w-full h-full">
                            <div className="backdrop-layer first absolute inset-0 bg-secondary/10 z-10"></div>
                            <div className="backdrop-layer second absolute inset-0 bg-secondary/20 z-20"></div>
                            <div className="backdrop-layer absolute inset-0 bg-white z-0"></div>

                            {/* Abstract shapes container */}
                            <div className="ambient-background-shapes absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                                <svg className="bg-shape bg-shape-1 absolute inset-0 w-full h-full text-primary" viewBox="0 0 400 400" fill="none">
                                    <circle className="shape-element" cx="80" cy="120" r="40" fill="currentColor" opacity="0.1" />
                                    <circle className="shape-element" cx="300" cy="80" r="60" fill="currentColor" opacity="0.1" />
                                </svg>
                                {/* Simplified shapes for performance */}
                            </div>
                        </div>

                        <div className="menu-content-wrapper relative z-30 h-full flex items-center justify-center p-12">
                            <ul className="menu-list space-y-6">
                                <li className="menu-list-item overflow-hidden" data-shape="1">
                                    <a href="#" className="nav-link w-inline-block text-4xl md:text-5xl font-heading font-bold text-secondary hover:text-primary transition-colors block">
                                        <p className="nav-link-text">Accueil</p>
                                    </a>
                                </li>
                                <li className="menu-list-item overflow-hidden" data-shape="2">
                                    <a href="#" className="nav-link w-inline-block text-4xl md:text-5xl font-heading font-bold text-secondary hover:text-primary transition-colors block">
                                        <p className="nav-link-text">Réalisations</p>
                                    </a>
                                </li>
                                <li className="menu-list-item overflow-hidden" data-shape="3">
                                    <a href="#" className="nav-link w-inline-block text-4xl md:text-5xl font-heading font-bold text-secondary hover:text-primary transition-colors block">
                                        <p className="nav-link-text">Services</p>
                                    </a>
                                </li>
                                <li className="menu-list-item overflow-hidden" data-shape="5">
                                    <a href="#" className="nav-link w-inline-block text-4xl md:text-5xl font-heading font-bold text-secondary hover:text-primary transition-colors block">
                                        <p className="nav-link-text">Contact</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Close Button Inside Menu */}
                        <button className="absolute top-6 right-6 p-4 text-secondary hover:text-primary transition-colors" onClick={closeMenu}>
                            Fermer
                        </button>

                    </nav>
                </div>
            </section>
        </div>
    );
}
