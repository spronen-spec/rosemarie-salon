import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/service/${service.id}`}
                className="group block glass-card overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-body text-xs tracking-wider uppercase px-3 py-1.5 bg-background/90 backdrop-blur-sm text-foreground rounded-sm">
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground mb-2">{service.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">{service.duration}</span>
                    <span className="flex items-center gap-1 text-accent font-body text-xs tracking-wider uppercase group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={14} />
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
