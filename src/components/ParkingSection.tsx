import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/data/services";

const ParkingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Getting Here</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Where to Park</h2>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-6 font-body text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border-2 border-orange-500 bg-orange-500/20 inline-flex items-center justify-center text-orange-500 font-bold text-xs">A</span>
            <span className="text-foreground">Ground-level RTA parking — may be busy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border-2 border-orange-500 bg-orange-500/20 inline-flex items-center justify-center text-orange-500 font-bold text-xs">B</span>
            <span className="text-foreground">Surface lot before Cluster C — less busy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#c9a070] inline-block" />
            <span className="text-accent">Rosemarie Beauty Centre</span>
          </div>
        </motion.div>

        {/* Map image with SVG overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded overflow-hidden shadow-lg mb-8"
        >
          <img
            src="/parking-map.png"
            alt="Parking map for Rosemarie Beauty Centre, JLT Cluster C"
            className="w-full block"
          />
          {/* SVG overlay — coordinates match 901×552 source, scale with image */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 901 552"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* A1 — near Palladium */}
            <ellipse cx="811" cy="314" rx="81" ry="76"
              fill="rgba(234,88,12,0.15)" stroke="rgb(234,88,12)" strokeWidth="3" />
            <text x="811" y="322" textAnchor="middle" fontFamily="Arial" fontSize="22"
              fontWeight="bold" fill="rgb(234,88,12)">A</text>

            {/* A2 — near Fortune Tower */}
            <ellipse cx="651" cy="487" rx="86" ry="69"
              fill="rgba(234,88,12,0.15)" stroke="rgb(234,88,12)" strokeWidth="3" />
            <text x="651" y="495" textAnchor="middle" fontFamily="Arial" fontSize="22"
              fontWeight="bold" fill="rgb(234,88,12)">A</text>

            {/* Rosemarie gold dot inside A2 */}
            <circle cx="557" cy="452" r="17"
              fill="rgba(201,160,112,0.75)" stroke="rgb(201,160,112)" strokeWidth="2.5" />

            {/* B — surface lot */}
            <ellipse cx="243" cy="425" rx="95" ry="87"
              fill="rgba(234,88,12,0.15)" stroke="rgb(234,88,12)" strokeWidth="3" />
            <text x="243" y="433" textAnchor="middle" fontFamily="Arial" fontSize="22"
              fontWeight="bold" fill="rgb(234,88,12)">B</text>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors border border-foreground/20 hover:border-accent px-6 py-3"
          >
            <Navigation size={16} />
            Get turn-by-turn directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ParkingSection;
