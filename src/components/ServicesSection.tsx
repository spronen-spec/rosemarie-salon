import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="px-6 pt-20 pb-10 md:px-12 lg:px-24 lg:pt-28 lg:pb-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                to={`/service/${service.id}`}
                className="group flex flex-col h-full glass-card overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-28 sm:h-40 md:h-52 lg:h-64 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                </div>
                <div className="p-2 md:p-4 flex flex-col flex-1">
                  <h3 className="font-display text-base md:text-2xl text-foreground mb-1 min-h-[2.5rem] md:min-h-[3.5rem]">{service.name}</h3>
                  <p className="font-body text-xs text-muted-foreground mb-1 md:mb-2 hidden sm:block flex-1">{service.shortDescription}</p>
                  <div className="flex items-center justify-end mt-auto pt-1">
                    <span className="flex items-center gap-1 text-accent font-body text-[10px] tracking-wider uppercase group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
