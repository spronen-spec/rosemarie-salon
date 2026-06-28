import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/data/services";

const reviews = [
  {
    name: "Nadiia C.",
    rating: 5,
    text: "I've done facial there. Excellent and professional service. The therapist knew what she was doing.",
    service: "Facial",
  },
  {
    name: "Christina R.",
    rating: 5,
    text: "Moussa did a wonderful job with my hair wash and blow dry – I absolutely love the result. Not only is he highly skilled…",
    service: "Hair",
  },
  {
    name: "Radhika M.",
    rating: 5,
    text: "Fedaa is so lovely. Professional and good. I love the place. Super service. Good haircut and massage and also blow dry.",
    service: "Hair & Massage",
  },
  {
    name: "Inferioo",
    rating: 5,
    text: "Aanu is a real nail artist. I've done gel mani and pedi with her twice and planning to come regularly. She has a great eye to recreate ideas from pictures and a good taste when it comes to adjustments. Super kind and patient. 10/10!",
    service: "Nails",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">What Our Clients Say</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Client Reviews</h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-accent text-accent" />
            ))}
            <span className="font-body text-sm text-muted-foreground ml-2">4.8 on Google · 45+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-3 md:p-5 flex flex-col gap-2"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={10} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1">"{review.text}"</p>
              <div>
                <p className="font-body text-xs font-medium text-foreground">{review.name}</p>
                <p className="font-body text-[10px] text-accent tracking-wider uppercase">{review.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
          >
            Read all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
