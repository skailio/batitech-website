/* eslint-disable @typescript-eslint/no-explicit-any */
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

        const ctx = gsap.context(() => {
            // 1. Arrow Animation (Removed from indicator, but keeping logic if arrow existed/restored elsewhere)
            const arrowLine = document.querySelector(".arrow-line");
            if (arrowLine) {
                const pathLength = (arrowLine as SVGPathElement).getTotalLength();
                gsap.set(arrowLine, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
                const arrowTl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
                arrowTl
                    .to(arrowLine, { strokeDashoffset: 0, duration: 1, ease: "power2.out" })
                    .to({}, { duration: 1.2 })
                    .to(arrowLine, { strokeDashoffset: -pathLength, duration: 0.6, ease: "power2.in" })
                    .set(arrowLine, { strokeDashoffset: pathLength });
            }

            // 2. Shape Hover
            const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
            const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");

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

                (item as any)._cleanup = () => {
                    item.removeEventListener("mouseenter", onEnter);
                    item.removeEventListener("mouseleave", onLeave);
                };
            });

        }, containerRef);

        return () => {
            ctx.revert();
            if (containerRef.current) {
                const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
                items.forEach((item: any) => item._cleanup && item._cleanup());
            }
        };
    }, []);

    // Menu Open/Close Animation Effect
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Updated Selectors logic to handle parent container visibility
            const menuContainer = containerRef.current!.querySelector(".fullscreen-menu-container");
            const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
            const menu = containerRef.current!.querySelector(".menu-content");
            const overlay = containerRef.current!.querySelector(".overlay");
            const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
            const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
            const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");

            const menuButton = containerRef.current!.querySelector(".nav-close-btn");
            const menuButtonTexts = menuButton?.querySelectorAll("p");
            const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

            const tl = gsap.timeline();

            if (isMenuOpen) {
                // OPEN
                if (menuContainer) {
                    tl.set(menuContainer, { display: "block" });
                }

                if (navWrap) {
                    navWrap.setAttribute("data-nav", "open");
                    tl.set(navWrap, { display: "block" }, "<");
                }

                if (menu) {
                    tl.set(menu, { xPercent: 0 }, "<");
                }

                if (menuButtonTexts && menuButtonTexts.length > 0) {
                    tl.fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 }, "<");
                }
                if (menuButtonIcon) {
                    tl.fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<");
                }

                if (overlay) tl.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<");
                if (bgPanels.length > 0) tl.fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<");
                if (menuLinks.length > 0) tl.fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");

                if (fadeTargets.length) {
                    tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
                }

            } else {
                // CLOSE
                if (navWrap) navWrap.setAttribute("data-nav", "closed");

                if (overlay) tl.to(overlay, { autoAlpha: 0 });
                if (menu) tl.to(menu, { xPercent: 120 }, "<");

                if (menuButtonTexts && menuButtonTexts.length > 0) {
                    tl.to(menuButtonTexts, { yPercent: 0 }, "<");
                }
                if (menuButtonIcon) {
                    tl.to(menuButtonIcon, { rotate: 0 }, "<");
                }

                if (navWrap) tl.set(navWrap, { display: "none" });
                if (menuContainer) tl.set(menuContainer, { display: "none" });
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div ref={containerRef}>
            <div className="site-header-wrapper fixed top-0 w-full z-50">
                <header className="header container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo / Home Link - Image Logo */}
                    <a href="#" aria-label="home" className="nav-logo-row w-inline-block">
                        <img src="/images/logo-batitech.png" alt="Batitech" className="h-10 w-auto" />
                    </a>

                    <div className="nav-row__right flex items-center gap-4">

                        {/* <button role="button" className="nav-close-btn relative w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform" onClick={toggleMenu} style={{ pointerEvents: 'auto' }}>
                            <div className="icon-wrap w-6 h-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="menu-button-icon transition-transform duration-500"
                                >
                                    <path
                                        d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </button> */}
                    </div>
                </header>
            </div>

            <section className="fullscreen-menu-container fixed inset-0 z-40" style={{ display: 'none' }}>
                <div data-nav="closed" className="nav-overlay-wrapper hidden h-full w-full">
                    {/* Overlay must stay above or below depending on desired clickability. 
              The original has it cover content. */}
                    <div className="overlay absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMenu}></div>
                    <nav className="menu-content absolute top-0 right-0 h-full w-full md:w-[600px] bg-white shadow-2xl z-50 overflow-hidden transform translate-x-full">
                        <div className="menu-bg absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                            <div className="backdrop-layer first absolute inset-0 bg-gray-100 z-10 translate-x-full"></div>
                            <div className="backdrop-layer second absolute inset-0 bg-gray-50 z-20 translate-x-full"></div>
                            <div className="backdrop-layer absolute inset-0 bg-white z-30 translate-x-full"></div>

                            {/* Abstract shapes container */}
                            <div className="ambient-background-shapes absolute inset-0 z-40 opacity-50 pointer-events-none">
                                {/* Shape 1: Floating circles */}
                                <svg className="bg-shape bg-shape-1 absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                                    <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(22,163,74,0.1)" />
                                    <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(22,163,74,0.15)" />
                                </svg>

                                {/* Shape 2: Wave pattern */}
                                <svg className="bg-shape bg-shape-2 absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                                    <path
                                        className="shape-element"
                                        d="M0 200 Q100 100, 200 200 T 400 200"
                                        stroke="rgba(22,163,74,0.1)"
                                        strokeWidth="60"
                                        fill="none"
                                    />
                                </svg>

                                {/* Shape 3: Grid dots */}
                                <svg className="bg-shape bg-shape-3 absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                                    <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(22,163,74,0.2)" />
                                    <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(22,163,74,0.2)" />
                                </svg>
                            </div>
                        </div>

                        <div className="menu-content-wrapper relative z-50 h-full flex flex-col justify-center px-12 md:px-20">
                            <ul className="menu-list space-y-4">
                                <li className="menu-list-item transform translate-y-full rotate-6" data-shape="1">
                                    <a href="#services" onClick={closeMenu} className="nav-link inline-block text-5xl md:text-6xl font-bold text-gray-900 hover:text-primary transition-colors">
                                        <span className="nav-link-text">Services</span>
                                    </a>
                                </li>
                                <li className="menu-list-item transform translate-y-full rotate-6" data-shape="2">
                                    <a href="#realisations" onClick={closeMenu} className="nav-link inline-block text-5xl md:text-6xl font-bold text-gray-900 hover:text-primary transition-colors">
                                        <span className="nav-link-text">Réalisations</span>
                                    </a>
                                </li>
                                <li className="menu-list-item transform translate-y-full rotate-6" data-shape="3">
                                    <a href="#contact" onClick={closeMenu} className="nav-link inline-block text-5xl md:text-6xl font-bold text-gray-900 hover:text-primary transition-colors">
                                        <span className="nav-link-text">Contact</span>
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-12 pt-12 border-t border-gray-100 transform translate-y-10 opacity-0" data-menu-fade>
                                <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">Adresse</p>
                                <p className="text-xl font-bold text-gray-900">9 La Croix Vitard, 02400 Brasles</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    );
}
