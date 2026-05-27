import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FRESHA_URL } from "@/data/services";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Team", href: "/#team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const id = href.replace("/#", "");
    
    if (location.pathname === "/") {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="font-display text-xl md:text-2xl font-semibold tracking-wide text-foreground">
              Rosemarie
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={FRESHA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm tracking-widest uppercase px-5 py-2.5 gold-gradient text-accent-foreground rounded-sm hover:opacity-90 transition-opacity"
              >
                Book Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-foreground relative z-[60]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] md:hidden bg-background flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  onClick={() => scrollToSection(link.href)}
                  className="font-display text-2xl tracking-widest uppercase text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                href={FRESHA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-body text-sm tracking-widest uppercase px-8 py-3.5 gold-gradient text-accent-foreground rounded-sm hover:opacity-90 transition-opacity"
              >
                Book Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
