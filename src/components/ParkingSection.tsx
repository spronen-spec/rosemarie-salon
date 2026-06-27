import { motion } from "framer-motion";
import { Car, MapPin, Navigation } from "lucide-react";
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
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Getting Here</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Where to Park</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Recommended parking card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-foreground/10">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Car size={15} className="text-accent" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-accent">Recommended</p>
                <p className="font-display text-base text-foreground">RTA Parking — Before Cluster C Entrance</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed px-5 py-4">
              Just before turning into Cluster C, there is an RTA surface lot on the <strong className="text-foreground">right-hand side</strong>. Plenty of spaces even during busy hours — a short walk to Fortune Tower.
            </p>
            {/* Placeholder for screenshot 2 */}
            <div className="mx-5 mb-5 rounded overflow-hidden bg-foreground/5 border border-dashed border-foreground/20 flex items-center justify-center h-48">
              <p className="font-body text-xs text-muted-foreground/50 text-center px-4">
                Satellite image coming soon
              </p>
            </div>
          </motion.div>

          {/* Alternative parking card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-foreground/10">
              <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                <MapPin size={15} className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Alternative · may be full</p>
                <p className="font-display text-base text-foreground">RTA Parking — Ground Floor</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed px-5 py-4">
              Ground-level parking directly next to Fortune Tower (circled below). Convenient but tends to fill up quickly — try the entrance lot first.
            </p>
            {/* Satellite image with overlay */}
            <div className="mx-5 mb-5 rounded overflow-hidden relative">
              {/* Crop Google Maps chrome: clip 8% top and 5% bottom */}
              <div className="overflow-hidden" style={{ clipPath: "inset(8% 0 5% 0)" }}>
                <img
                  src="/parking-alternative.png"
                  alt="Satellite view of alternative parking near Fortune Tower, JLT Cluster C"
                  className="w-full block"
                />
              </div>
              {/* SVG annotations */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 87"
                preserveAspectRatio="none"
              >
                {/* Red oval matching user's drawn circle (alt parking area) */}
                <ellipse
                  cx="32" cy="52" rx="16" ry="19"
                  fill="rgba(220,38,38,0.15)"
                  stroke="#dc2626"
                  strokeWidth="0.7"
                  strokeDasharray="2.5,1"
                />
                {/* Label background */}
                <rect x="51" y="36" width="32" height="10" rx="1.5" fill="rgba(0,0,0,0.65)" />
                <text x="67" y="43" textAnchor="middle" fontFamily="sans-serif" fontSize="4" fill="#f87171">
                  Ground floor parking
                </text>
                {/* Connector line from label to circle */}
                <line x1="51" y1="41" x2="46" y2="46" stroke="#dc2626" strokeWidth="0.5" />
                {/* Rosemarie pin label */}
                <rect x="56" y="22" width="28" height="9" rx="1.5" fill="rgba(0,0,0,0.65)" />
                <text x="70" y="28.5" textAnchor="middle" fontFamily="sans-serif" fontSize="3.5" fill="#c9a070">
                  Rosemarie Beauty Centre
                </text>
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors border border-foreground/20 hover:border-accent px-6 py-3"
          >
            <Navigation size={16} />
            Get directions to Fortune Tower
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ParkingSection;
