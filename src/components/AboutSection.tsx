import { motion } from "framer-motion";
import { MapPin, Clock, CreditCard, Phone } from "lucide-react";
import { ADDRESS, WHATSAPP_URL } from "@/data/services";

const infoItems = [
  {
    icon: MapPin,
    title: "Location",
    detail: ADDRESS,
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Daily 10:00 AM – 10:00 PM",
  },
  {
    icon: CreditCard,
    title: "Payment",
    detail: "Card · Tabby · Cash",
  },
  {
    icon: Phone,
    title: "Contact",
    detail: "WhatsApp us anytime",
    link: WHATSAPP_URL,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Your Beauty, Our Passion
            </h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
              Welcome to Rosemarie Beauty Centre, your premier destination for beauty and wellness in the heart of Dubai's JLT. 
              Our team of skilled professionals is dedicated to providing exceptional beauty services in a luxurious and relaxing atmosphere.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              From rejuvenating massages to stunning nail art, flawless lash extensions to expert hair styling — 
              we offer a comprehensive range of beauty treatments designed to make you look and feel your absolute best.
              All our services start from just 99 AED.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="glass-card p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mb-4">
                    <Icon size={18} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              );

              return item.link ? (
                <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
