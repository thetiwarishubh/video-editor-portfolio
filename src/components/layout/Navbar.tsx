import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import gsap from "gsap";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Work", to: "/work" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  /* 🔒 Lock scroll only for mobile menu */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* ❌ Close menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ⌨️ ESC key */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* 📱 Close menu when switching to desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 🌗 Theme toggle + GSAP flash */
  const handleThemeToggle = () => {
    const flash = document.getElementById("theme-flash");

    if (flash) {
      gsap.fromTo(
        flash,
        { opacity: 0 },
        {
          opacity: 0.4,
          duration: 0.15,
          repeat: 1,
          yoyo: true,
          ease: "power2.out",
        }
      );
    }

    toggleTheme();
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={isHome ? { y: -60, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="text-xl font-bold text-white">
            Rahul<span className="text-violet-400">Motion</span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `relative group transition ${isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-violet-400 scale-x-0 group-[.active]:scale-x-100 transition-transform origin-left" />
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={handleThemeToggle}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-white" />
              )}
            </motion.button>

            <Button size="sm" className="rounded-full cursor-pointer">
              Hire Me
            </Button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={handleThemeToggle}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-700 hover:bg-zinc-800"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-white" />
              )}
            </motion.button>

            <button onClick={() => setOpen(true)}>
              <Menu size={26} className="text-zinc-200" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-xl"
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-zinc-800">
              <span className="text-lg font-bold text-white">
                Rahul<span className="text-violet-400">Motion</span>
              </span>
              <button onClick={() => setOpen(false)}>
                <X size={26} className="text-white cursor-pointer" />
              </button>
            </div>

            <nav className="flex flex-col items-center mt-6 gap-5 text-lg">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Button size="lg" className="mt-8 rounded-full cursor-pointer">
                Hire Me
              </Button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* 🌗 Theme Flash Overlay */}
      <div
        id="theme-flash"
        className="pointer-events-none fixed inset-0 z-[999] bg-white opacity-0"
      />
    </>
  );
};

export default Navbar;
