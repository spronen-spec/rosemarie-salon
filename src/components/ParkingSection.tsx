import { motion } from "framer-motion";
import { Car, MapPin } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Option 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Car size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-1">Recommended</p>
                <h3 className="font-display text-xl text-foreground mb-2">RTA Parking — Cluster C Entrance</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Just before you turn into Cluster C, there is an RTA surface parking lot on the <strong className="text-foreground">right-hand side</strong>. It has plenty of spaces even during busy hours and is a short walk to Fortune Tower.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Option 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Alternative</p>
                <h3 className="font-display text-xl text-foreground mb-2">RTA Parking — Ground Floor</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  There is also RTA parking on the ground floor directly beneath Fortune Tower. Convenient, but tends to fill up quickly during peak hours — try the entrance parking first.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Schematic diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-10 mb-8"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-6 text-center">Parking Guide</p>
          <svg
            viewBox="0 0 560 280"
            className="w-full max-w-2xl mx-auto"
            aria-label="Parking schematic for Rosemarie Beauty Centre, JLT Cluster C"
          >
            {/* ── Approach road (horizontal) ── */}
            <rect x="0" y="108" width="400" height="44" rx="2" fill="#2a2520" />
            {/* Road dashes */}
            {[20, 80, 140, 200, 260, 320].map((x) => (
              <rect key={x} x={x} y="128" width="40" height="4" rx="2" fill="#4a4540" />
            ))}
            {/* Direction arrow */}
            <text x="30" y="105" fontFamily="sans-serif" fontSize="11" fill="#6b6560" letterSpacing="1">
              APPROACHING CLUSTER C →
            </text>

            {/* ── Recommended parking (before turn) ── */}
            <rect x="290" y="36" width="110" height="66" rx="4" fill="#1a1510" stroke="#c9a070" strokeWidth="2" />
            <text x="345" y="62" textAnchor="middle" fontFamily="sans-serif" fontSize="22" fontWeight="bold" fill="#c9a070">P</text>
            <text x="345" y="80" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#c9a070" letterSpacing="0.5">RECOMMENDED</text>
            <text x="345" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#8a7a6a">Plenty of spaces</text>
            {/* Arrow from road up to parking */}
            <line x1="345" y1="108" x2="345" y2="102" stroke="#c9a070" strokeWidth="2" markerEnd="url(#arrowGold)" />
            <polygon points="345,102 341,112 349,112" fill="#c9a070" />
            {/* Label on road */}
            <text x="318" y="168" fontFamily="sans-serif" fontSize="9" fill="#c9a070">Turn in here ↓</text>

            {/* ── Turn-off road (vertical into cluster) ── */}
            <rect x="310" y="152" width="44" height="128" rx="2" fill="#2a2520" />

            {/* ── Cluster C label ── */}
            <text x="332" y="200" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b6560" letterSpacing="1">CLUSTER C</text>

            {/* ── Fortune Tower building ── */}
            <rect x="380" y="175" width="90" height="90" rx="4" fill="#1a1510" stroke="#c9a070" strokeWidth="1.5" />
            <text x="425" y="214" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#fff">Fortune</text>
            <text x="425" y="228" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#fff">Tower</text>
            <text x="425" y="244" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#c9a070">1409, 14th Floor</text>
            {/* Small "you are here" dot */}
            <circle cx="425" cy="197" r="5" fill="#c9a070" />
            <text x="425" y="193" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#c9a070">★</text>

            {/* ── Ground floor parking (alternative) ── */}
            <rect x="480" y="195" width="75" height="55" rx="4" fill="#1a1510" stroke="#4a4540" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="517" y="218" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#4a4540">P</text>
            <text x="517" y="233" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#4a4540">Ground floor</text>
            <text x="517" y="243" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#6b5a4a">(often full)</text>

            {/* ── Legend ── */}
            <rect x="4" y="210" width="12" height="12" rx="2" fill="#c9a070" />
            <text x="22" y="221" fontFamily="sans-serif" fontSize="10" fill="#c9a070">Recommended parking</text>
            <rect x="4" y="230" width="12" height="12" rx="2" fill="none" stroke="#4a4540" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="22" y="241" fontFamily="sans-serif" fontSize="10" fill="#6b6560">Alternative (may be full)</text>
            <circle cx="10" cy="257" r="5" fill="#c9a070" />
            <text x="22" y="261" fontFamily="sans-serif" fontSize="10" fill="#c9a070">Rosemarie Beauty Centre</text>
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
            <MapPin size={16} />
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ParkingSection;
