import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { GOOGLE_MAPS_URL } from "@/data/services";

// Custom pin icon for the salon
const salonIcon = L.divIcon({
  className: "",
  html: `<div style="width:14px;height:14px;background:#c9a070;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.5)"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const SALON: [number, number] = [25.0689553, 55.1388336];
const PARKING_RECOMMENDED: [number, number] = [25.0704, 55.1368];
const PARKING_ALTERNATIVE: [number, number] = [25.0685, 55.1402];

const ParkingSection = () => {
  // Remove default Leaflet marker icon path issue in Vite
  useEffect(() => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

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

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-500/20 inline-block" />
            <span className="font-body text-sm text-foreground">Recommended — plenty of spaces</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-red-500 bg-red-500/20 inline-block" />
            <span className="font-body text-sm text-muted-foreground">Alternative — may be full in peak hours</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#c9a070] inline-block" />
            <span className="font-body text-sm text-accent">Rosemarie Beauty Centre</span>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded overflow-hidden shadow-lg mb-8"
          style={{ height: "420px" }}
        >
          <MapContainer
            center={[25.0693, 55.1378]}
            zoom={17}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Recommended parking — green */}
            <Circle
              center={PARKING_RECOMMENDED}
              radius={45}
              pathOptions={{ color: "#10b981", fillColor: "#10b981", fillOpacity: 0.25, weight: 2.5 }}
            >
              <Popup>
                <strong style={{ color: "#059669" }}>Recommended Parking</strong><br />
                RTA surface lot just before Cluster C entrance on the right.<br />
                <em>Plenty of spaces even at peak hours.</em>
              </Popup>
            </Circle>

            {/* Alternative parking — red */}
            <Circle
              center={PARKING_ALTERNATIVE}
              radius={60}
              pathOptions={{ color: "#ef4444", fillColor: "#ef4444", fillOpacity: 0.2, weight: 2.5 }}
            >
              <Popup>
                <strong style={{ color: "#dc2626" }}>Alternative Parking</strong><br />
                Ground-level RTA lot next to Fortune Tower.<br />
                <em>May fill up quickly during busy hours.</em>
              </Popup>
            </Circle>

            {/* Salon marker */}
            <Marker position={SALON} icon={salonIcon}>
              <Popup>
                <strong>Rosemarie Beauty Centre</strong><br />
                Fortune Tower, Office 1409, Cluster C<br />
                14th Floor
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>

        <p className="font-body text-xs text-muted-foreground/50 text-center mb-6">
          Click on any highlighted area for details. Map circles are approximate — adjust by tapping.
        </p>

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
