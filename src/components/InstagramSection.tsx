import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/data/services";

import galleryHair1 from "@/assets/gallery-hair-1.jpg";
import galleryHair2 from "@/assets/gallery-hair-2.jpg";
import galleryNails1 from "@/assets/gallery-nails-1.jpg";
import galleryNails2 from "@/assets/gallery-nails-2.jpg";
import galleryNails3 from "@/assets/gallery-nails-3.jpg";
import galleryNails4 from "@/assets/gallery-nails-4.jpg";

const images = [
  galleryHair1,
  galleryNails1,
  galleryHair2,
  galleryNails2,
  galleryNails3,
  galleryNails4,
];

const InstagramSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Follow Along</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-3">
            @rosemariebeautycentre
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            See our latest work on Instagram
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 mb-10">
          {images.map((src, index) => (
            <motion.a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={src}
                alt="Rosemarie Beauty Centre"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={24} className="text-accent" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors border border-foreground/20 hover:border-accent px-6 py-3"
          >
            <Instagram size={16} />
            Follow us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
