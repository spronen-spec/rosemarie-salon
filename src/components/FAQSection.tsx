import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online via the Book Now button on our website (powered by Fresha), message us on WhatsApp at +971 58 802 9012, or simply walk in.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, walk-ins are always welcome. To avoid waiting, we recommend booking in advance — especially on weekends and evenings when we tend to be fully booked.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open every day from 11:00 am to 10:00 pm, including weekends and public holidays.",
  },
  {
    question: "Where are you located and is there parking?",
    answer:
      "We are on the 14th floor of Fortune Tower, Office 1409, Cluster C, Jumeirah Lakes Towers, Dubai. Paid public parking is available throughout JLT. The nearest metro station is DMCC (Red Line), approximately a 5-minute walk away.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash and all major credit and debit cards.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For hair colour, lash extensions, and facials we recommend booking 2–3 days ahead. For weekends, booking earlier in the week is advised to secure your preferred time slot.",
  },
  {
    question: "Do you offer packages or promotions?",
    answer:
      "Yes, we run seasonal promotions throughout the year. Follow us on Instagram @rosemariebeautycentre or check back on our website for the latest offers.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Got Questions</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-foreground/10"
              >
                <AccordionTrigger className="font-body text-sm text-foreground hover:text-accent hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
