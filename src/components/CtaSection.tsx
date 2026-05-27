import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

const CtaSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gold-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-8 h-8 mx-auto mb-6 text-accent-foreground/80" />
          <h2 className="font-display text-3xl md:text-5xl font-light text-accent-foreground mb-4">
            Ready to Glow?
          </h2>
          <p className="font-body text-sm md:text-base text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Book your appointment today and experience the Rosemarie difference. 
            Our experts are ready to pamper you.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors shadow-lg"
          >
            Book via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
