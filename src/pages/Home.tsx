import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 flex items-center justify-center px-6 overflow-hidden">
      
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_60%)]" />

      <div className="max-w-5xl text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          I help creators & brands craft
          <span className="text-violet-400"> cinematic video edits</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          High-impact video editing for YouTube, Instagram & brands —
          focused on storytelling, retention and engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link to="/work">
            <Button size="lg" className="rounded-full px-8 cursor-pointer">
              View Work
            </Button>
          </Link>

          <Link to="/contact">
            <Button size="lg" variant="outline" className="rounded-full px-8 cursor-pointer">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
