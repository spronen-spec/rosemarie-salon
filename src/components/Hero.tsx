import { motion } from "framer-motion";
import heroImage from "@/assets/hero-salon.jpg";
import { FRESHA_URL } from "@/data/services";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Rosemarie Beauty Centre luxury spa interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-gold-light mb-6"
        >
          Beauty & Wellness Centre — Dubai
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream mb-6 leading-tight"
        >
          Rosemarie
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-px gold-gradient mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-xl md:text-2xl text-cream/80 italic mb-10"
        >
          Nails · Lashes · Brows · Facial · Massage · Hair
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-widest uppercase px-8 py-3.5 gold-gradient text-accent-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </a>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="font-body text-sm tracking-widest uppercase px-8 py-3.5 border border-cream/30 text-cream rounded-sm hover:bg-cream/10 transition-colors"
          >
            Our Services
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 font-body text-xs tracking-wider text-cream/50"
        >
          ✨ Starting from 99 AED · Card | Tabby | Cash
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
