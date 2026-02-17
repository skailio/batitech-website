import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* ── Devis section placeholder ── */}
      <section
        id="devis"
        className="min-h-screen flex items-center justify-center bg-secondary px-6"
      >
        <div className="text-center max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Demandez votre devis gratuit
          </h2>
          <p className="text-gray-400 mb-8">
            Remplissez le formulaire ci‑dessous ou appelez‑nous directement.
            Nous vous répondons sous 48&nbsp;h.
          </p>
          <div className="glass rounded-2xl p-8 text-left space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
            />
            <input
              type="tel"
              placeholder="Votre téléphone"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
            />
            <textarea
              rows={4}
              placeholder="Décrivez votre projet..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition resize-none"
            />
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]">
              Envoyer ma demande
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
