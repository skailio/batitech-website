"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function ContactMapSection() {
    return (
        <section className="py-20 bg-gray-50" id="contact">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[600px] bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">

                    {/* Left: Contact Info */}
                    <div className="p-10 lg:p-16 flex flex-col justify-center space-y-12">
                        <ScrollReveal>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Nous <span className="text-primary">Contacter</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Une question ? Un projet ? <br />
                                    N&apos;hésitez pas à nous solliciter pour un devis gratuit.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-8">
                            <ScrollReveal delay={0.1}>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Adresse</h4>
                                        <p className="text-gray-600">
                                            ZA La Sente aux Dames <br />
                                            02400 Brasles
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Téléphone</h4>
                                        <a href="tel:0323694292" className="text-gray-600 hover:text-primary transition-colors">
                                            03 23 69 42 92
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                                        <a href="mailto:contact@batitech-construction.fr" className="text-gray-600 hover:text-primary transition-colors">
                                            contact@batitech-construction.fr
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right: Google Map */}
                    <ScrollReveal direction="left" delay={0.2} className="h-full min-h-[400px]">
                        <div className="h-full w-full bg-gray-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.567845632123!2d3.3996717769512356!3d49.076395971424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e85a0671f0c2e3%3A0xf633446820526e03!2sBatitech!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
