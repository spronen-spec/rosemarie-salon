import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Clock } from "lucide-react";
import { services, FRESHA_URL, WHATSAPP_URL } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Service not found</h1>
          <Link to="/" className="font-body text-sm text-accent hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <h1 className="font-display text-4xl md:text-6xl text-cream mb-3">{service.name}</h1>
            <p className="font-body text-sm text-cream/70">{service.price} · {service.duration}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-12">
              {service.description}
            </p>

            {/* Sub-services / Price List */}
            {service.subServices.length > 0 && (
              <div className="mb-12">
                <h2 className="font-display text-2xl text-foreground mb-6">Services & Prices</h2>
                <div className="space-y-1">
                  {service.subServices.map((sub, index) => (
                    <a
                      key={sub.name}
                      href={FRESHA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass-card p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 cursor-pointer hover:border-accent/40 hover:shadow-md transition-all group"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg text-foreground group-hover:text-accent transition-colors">{sub.name}</h3>
                        <p className="font-body text-xs text-muted-foreground mt-0.5 line-clamp-1">{sub.description}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock size={13} />
                          <span className="font-body text-xs">{sub.duration}</span>
                        </div>
                        <span className="font-body text-sm font-medium text-accent whitespace-nowrap">{sub.price}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Therapists */}
            <div className="mb-12">
              <h2 className="font-display text-2xl text-foreground mb-6">Available Therapists</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.therapists.map((therapist) => (
                  <div key={therapist.name} className="glass-card p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
                      <span className="font-display text-lg text-accent-foreground">{therapist.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{therapist.name}</h3>
                      <p className="font-body text-xs text-muted-foreground">{therapist.role}</p>
                      {therapist.rating > 0 && (
                        <div className="flex items-center gap-1 mt-1">
                          <Star size={12} className="fill-accent text-accent" />
                          <span className="font-body text-xs text-foreground">{therapist.rating}</span>
                          {therapist.reviews > 0 && (
                            <span className="font-body text-xs text-muted-foreground">({therapist.reviews})</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-body text-sm tracking-widest uppercase px-8 py-3.5 border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default ServiceDetail;