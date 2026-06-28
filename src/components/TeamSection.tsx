import { motion } from "framer-motion";


const team = [
  { name: "Moussa", role: "Senior Hair Dresser", rating: 0, reviews: 0, bio: "Expert in highlights, balayage, and hair extensions. Transforms hair with precision colour techniques and seamless extensions for a natural, radiant finish." },
  { name: "Fedaa", role: "Senior Hair Dresser", rating: 5.0, reviews: 1, bio: "Colour and styling expert who listens carefully. Delivers stunning results that match each client's vision." },
  { name: "Salie", role: "Facial Therapist", rating: 5.0, reviews: 4, bio: "Skincare expert with a gentle touch. Known for personalised treatments that leave skin radiant and refreshed." },
  { name: "Camyl", role: "Eyelash Technician", rating: 5.0, reviews: 4, bio: "Precision-focused lash specialist. Creates natural, fluttery looks tailored to each client's unique style." },
  { name: "Elena", role: "Massage Therapist", rating: 5.0, reviews: 2, bio: "Skilled in deep tissue and relaxation techniques. Brings calm and relief with every session." },
  { name: "Aanu", role: "Nail Technician", rating: 4.0, reviews: 1, bio: "Creative artist with an eye for detail. Specialises in intricate nail designs and long-lasting finishes." },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Our Experts</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Meet the Team</h2>
        </motion.div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-3 md:p-6 text-center"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full gold-gradient mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <span className="font-display text-lg md:text-2xl text-accent-foreground">{member.name[0]}</span>
              </div>
              <h3 className="font-display text-base md:text-xl text-foreground mb-1">{member.name}</h3>
              <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-1 md:mb-2 leading-tight">{member.role}</p>
              <p className="font-body text-xs text-muted-foreground/80 leading-relaxed mb-3 hidden lg:block">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
