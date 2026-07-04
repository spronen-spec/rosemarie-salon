import { useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
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
    text: "Aanu is a real nail artist. I've done gel mani and pedi with her twice and planning to come regularly. She has a great eye to recreate ideas from pictures. Super kind and patient. 10/10!",
    service: "Nails",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Elena's massage was exactly what I needed after a long week. Deep tissue, very professional. Left feeling completely relaxed.",
    service: "Massage",
  },
  {
    name: "Mia L.",
    rating: 5,
    text: "Camyl did my lash extensions and they look absolutely natural. Lasted over three weeks! I get compliments every day.",
    service: "Lashes",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Beautiful salon with a very calm atmosphere. Salie did my facial and my skin felt amazing the next morning. Highly recommend.",
    service: "Facial",
  },
  {
    name: "Lara T.",
    rating: 5,
    text: "Quick, clean, and friendly. Got my brows shaped and waxing done — both perfect. The team really knows what they're doing.",
    service: "Brows & Waxing",
  },
];

const ReviewsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 md:gap-4">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="flex-none w-[72vw] sm:w-[46vw] md:w-[32vw] lg:w-[23vw] max-w-[320px]"
                >
                  <div className="glass-card p-3 md:p-5 flex flex-col gap-2 h-full">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={scrollPrev}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
            >
              Read all reviews on Google
            </a>
            <button
              onClick={scrollNext}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
