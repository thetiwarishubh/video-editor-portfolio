"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Instagram,
  Youtube,
  Mail,
  ArrowRight,
  Linkedin
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-xl">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand + Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight">
              Rahul<span className="text-primary text-violet-400">Motion</span>
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Crafting cinematic video edits that stop the scroll and keep viewers
              hooked. High-retention storytelling for ambitious creators and brands.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-5">
              {[
                { icon: Instagram, href: "https://www.instagram.com/rahul_motion", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/@Rahul.motion", label: "YouTube" },
                { icon: FaWhatsapp, href: "https://wa.me/919334609201", label: "WhatsApp" },
                { icon: Linkedin, href: "https://linkedin.com/in/rahul-motion-03aaa7242", label: "Linkedin" },
                { icon: Mail, href: "mailto:Rahulkumardas400m@gmail.com", label: "Email" }
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                  aria-label={item.label}
                >
                  <item.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/work", label: "Work" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground hover:text-primary transition-colors relative group inline-block"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Quick */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new edits, tips & exclusive offers.
            </p>

            <form className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-muted/50 border border-border rounded-lg py-3 px-4 pr-12 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© {currentYear} RahulMotion. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;