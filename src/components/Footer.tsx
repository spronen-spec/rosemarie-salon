import { Instagram, MapPin, Map } from "lucide-react";
import { INSTAGRAM_URL, ADDRESS, FRESHA_URL, GOOGLE_MAPS_URL } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="w-full h-64 md:h-80">
        <iframe
          title="Rosemarie Beauty Centre location"
          src="https://maps.google.com/maps?q=25.0689553,55.1388336&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl mb-4">Rosemarie</h3>
            <p className="font-body text-xs text-primary-foreground/70 leading-relaxed">
              Beauty, cosmetic & personal care centre in the heart of Dubai.
              Premium treatments starting from 99 AED.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/50">Quick Links</h4>
            <div className="space-y-2">
              <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">Book Appointment</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/50">Location</h4>
            <p className="flex items-start gap-2 font-body text-sm text-primary-foreground/70">
              <MapPin size={14} className="mt-1 shrink-0" />
              {ADDRESS}
            </p>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors mt-2">
              <Map size={14} /> Get Directions
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Rosemarie Beauty Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
