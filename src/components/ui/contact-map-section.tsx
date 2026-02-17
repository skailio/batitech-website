"use client";


import { Phone, Mail, MapPin } from "lucide-react";

export function ContactMapSection() {
    return (
        <section className="py-0 bg-white relative" id="contact">
            <div className="flex flex-col lg:flex-row min-h-[600px]">

                {/* Left: Contact Info */}
                <div className="w-full lg:w-1/2 bg-gray-50 p-12 lg:p-24 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full space-y-10">
                        <div>
                            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs rounded-full mb-6">
                                Contact
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
                                Infos <span className="text-primary">Pratiques</span>
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                Une question ? Un projet ? N&apos;hésitez pas à venir nous rencontrer ou à nous contacter.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Adresse</h4>
                                    <p className="text-gray-600">
                                        Château-Thierry, Picardie<br />
                                        France
                                    </p>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Château-Thierry" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm mt-1 inline-block hover:underline">
                                        Itinéraire &rarr;
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Téléphone</h4>
                                    <a href="tel:0323694292" className="text-gray-600 hover:text-primary transition-colors block text-xl font-medium">
                                        03 23 69 42 92
                                    </a>
                                    <p className="text-sm text-gray-400 mt-1">Du Lundi au Vendredi, 8h - 18h</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                                    <a href="mailto:contact@batitech-construction.com" className="text-gray-600 hover:text-primary transition-colors block font-medium">
                                        contact@batitech-construction.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Google Map */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-auto bg-gray-200 relative">
                    <iframe
                        title="Carte de localisation Batitech Construction à Château-Thierry"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41807.96200236402!2d3.376837128682057!3d49.04356777651817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e85c21e51b6817%3A0x40af13e81643c10!2sCh%C3%A2teau-Thierry!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.9)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}
