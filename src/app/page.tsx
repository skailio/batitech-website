"use client";

import { SterlingGateNav } from '@/components/ui/sterling-gate-kinetic-navigation';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { LogoCloud } from '@/components/ui/logo-cloud';
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from '@/components/ui/image-comparison';
import { AboutSection } from '@/components/ui/about-section';
import { ContactMapSection } from '@/components/ui/contact-map-section';
import { ReviewsSection } from "@/components/ui/reviews-section";

export default function Home() {
  const logos = [
    { src: "/images/certs/qualibat.png", alt: "Qualibat RGE" },
    { src: "/images/certs/cert2.png", alt: "Certification 2" },
    { src: "/images/certs/cert3.png", alt: "Certification 3" },
    { src: "/images/certs/cert5.png", alt: "Certification 5" },
  ];

  return (
    <main className="bg-white min-h-screen relative selection:bg-primary selection:text-white">
      <SterlingGateNav />

      <MinimalistHero
        mainText="Entreprise de maçonnerie générale et rénovation basée à Château-Thierry. Nous transformons vos projets en réalité durable avec une finition impeccable."
        readMoreLink="#services"
        imageSrc="/images/maison-3d-v27.png"
        imageAlt="Batitech Construction"
        overlayText={{ part1: "Bâtir", part2: "L'Avenir." }}
        locationText="Zone d'intervention : 90km autour de Brasles"
      />

      <section className="py-12 bg-gray-50/50 border-t border-dashed border-gray-200">
        <div className="container mx-auto px-6 mb-8 text-center">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Nos Certifications & Partenaires</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <LogoCloud logos={logos} />
      </section>

      <AboutSection />

      <section className="py-16 bg-white relative overflow-hidden" id="realisations">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12 space-y-8">
              <div className="inline-block px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest">
                Etude de Cas
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
                Rénovation <br /> <span className="text-primary">Mairie</span>
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed border-l-4 border-primary/50 pl-6">
                Découvrez la transformation spectaculaire de cette façade.
                Grâce à notre expertise en <strong>maçonnerie traditionnelle</strong> et ravalement,
                nous avons redonné son éclat d&apos;origine au bâtiment tout en améliorant son isolation.
              </p>

              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">✓</span>
                  <span className="font-medium text-gray-900">Ravalement de façade complet</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">✓</span>
                  <span className="font-medium text-gray-900">Traitement des fissures</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">✓</span>
                  <span className="font-medium text-gray-900">Finitions à la chaux</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-7/12 w-full h-[400px] lg:h-[600px] relative group">
              <div className="absolute inset-0 bg-primary/20 blur-2xl -z-10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-700"></div>
              <ImageComparison className="aspect-[4/3] w-full h-full rounded-xl shadow-2xl border-4 border-white ring-1 ring-gray-100" enableHover>
                <ImageComparisonImage
                  src="/images/avant-mairie.jpg"
                  className="transition-all duration-700"
                  alt="Avant rénovation"
                  position="left"
                />
                <ImageComparisonImage
                  src="/images/après-mairie.jpg"
                  alt="Après rénovation"
                  position="right"
                />
                <ImageComparisonSlider className="w-1.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                  <div className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-gray-100 hover:scale-110 transition-transform">
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                      <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </ImageComparisonSlider>
              </ImageComparison>
              <p className="text-center mt-4 text-sm text-gray-500 italic">Glissez pour voir la transformation</p>
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection />
      <ContactMapSection />
    </main>
  );
}
