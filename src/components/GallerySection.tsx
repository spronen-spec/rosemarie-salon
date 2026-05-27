import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/data/services";

import serviceNails from "@/assets/service-nails.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import galleryNails1 from "@/assets/gallery-nails-1.jpg";
import galleryHair1 from "@/assets/gallery-hair-1.jpg";
import galleryHair2 from "@/assets/gallery-hair-2.jpg";
import galleryNails2 from "@/assets/gallery-nails-2.jpg";
import galleryNails3 from "@/assets/gallery-nails-3.jpg";
import galleryNails4 from "@/assets/gallery-nails-4.jpg";

const galleryImages = [
  { src: serviceNails, alt: "Nail art by Rosemarie" },
  { src: galleryNails1, alt: "Nail design with pattern" },
  { src: galleryNails2, alt: "Nail art with hearts" },
  { src: galleryNails3, alt: "Glitter and floral nails" },
  { src: galleryNails4, alt: "French tip nails" },
  { src: serviceHair, alt: "Hair styling" },
  { src: galleryHair1, alt: "Blonde wavy hair" },
  { src: galleryHair2, alt: "Brown wavy hair" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Our Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">Gallery</h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
          >
            <Instagram size={16} /> Follow us @rosemariebeautycentre
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                <Instagram size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
