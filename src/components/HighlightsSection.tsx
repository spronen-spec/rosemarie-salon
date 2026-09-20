import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Clock3, CreditCard } from "lucide-react";
import { FRESHA_URL } from "@/data/services";

const highlights = [
  {
    icon: Sparkles,
    title: "Luxury treatments",
    description: "Premium services with polished finishes and a calm, elevated atmosphere.",
  },
  {
    icon: ShieldCheck,
    title: "Skilled specialists",
    description: "Experienced beauty professionals focused on comfort, detail, and confidence.",
  },
  {
    icon: Clock3,
    title: "Flexible appointments",
    description: "Easy booking for quick touch-ups or full beauty sessions that fit your schedule.",
  },
  {
    icon: CreditCard,
    title: "Convenient payments",
    description: "Card, Tabby, and cash options make your visit effortless from start to finish.",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-[#f8f1e7] via-background to-secondary/80 p-8 md:p-12 lg:p-16 shadow-[0_25px_80px_rgba(34,27,18,0.06)]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Why Rosemarie
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                A polished beauty experience in one elegant salon
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8 max-w-2xl">
                From your first booking to your final reveal, our team is here to make every appointment feel indulgent, effortless, and tailored to your style.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={FRESHA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest uppercase px-6 py-3 gold-gradient text-accent-foreground rounded-sm hover:opacity-90 transition-opacity shadow-[0_18px_45px_rgba(191,149,78,0.25)]"
                >
                  Book Your Visit
                </a>
                <a
                  href="#gallery"
                  className="font-body text-sm tracking-widest uppercase px-6 py-3 border border-border/70 text-foreground rounded-sm hover:bg-foreground/5 transition-colors"
                >
                  View the Studio
                </a>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="glass-card p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(25,22,20,0.07)]"
                  >
                    <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center mb-4 shadow-[0_10px_25px_rgba(191,149,78,0.25)]">
                      <Icon size={18} className="text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
