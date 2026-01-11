"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Play,
  Sparkles,
  Zap,
  Target,
  Clock,
  BarChart3,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import bgImage from "@/assets/images/HeroImage.jpg"

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.06,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.7,
      });

      gsap.from(".feature-chip", {
        scale: 0.92,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 1,
        ease: "back.out(1.3)",
      });

      gsap.from(".hero-cta", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.2,
      });

      if (bgRef.current && document.documentElement.classList.contains("dark")) {
        gsap.to(bgRef.current, {
          scale: 1.08,
          duration: 28,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Target, text: "Retention-First Editing" },
    { icon: Clock, text: "Fast Turnaround" },
    { icon: Zap, text: "Trending Style" },
    { icon: BarChart3, text: "Performance Focused" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-background to-primary/5 dark:from-black dark:to-gray-950"
    >
      {/* Dark Mode Only: Client Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center hidden dark:block transition-transform duration-500"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
      </div>

      {/* Main Content - z-index high rakha taaki overlay ke upar rahe */}
      <div className="max-w-6xl text-center relative z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 bg-white/10 dark:bg-black/40 backdrop-blur-md text-foreground dark:text-white px-5 py-2.5 rounded-full text-sm font-medium mb-10 border border-border dark:border-white/20"
        >
          <Sparkles className="w-5 h-5" />
          Available for Freelance Projects
        </motion.div>

        {/* Title */}
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground dark:text-white">
          <span className="block">Transform Your</span>
          <span className="block mt-2 text-primary">Raw Footage</span>
          <span className="block mt-2">
            Into{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Scroll-Stopping Stories
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p className="hero-subtitle mt-2 text-sm md:text-base text-muted-foreground dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          I’m a <span className="text-primary font-semibold">freelance video editor</span> helping YouTubers, brands, and creators grow faster with high-retention YouTube videos, Instagram reels, and cinematic edits.
        </motion.p>

        {/* Features Chips */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="feature-chip flex items-center gap-2.5 px-5 py-2.5 bg-secondary/80 dark:bg-black/40 backdrop-blur-md rounded-full border border-border dark:border-white/10"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-foreground dark:text-white">{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div className="hero-cta mt-8 flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact">
            <Button
              size="lg"
              className="rounded-full px-12 md:px-12 py-6 md:py-6 cursor-pointer text-sm md:text-base gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              Start a Project
              <Zap className="w-5 h-5" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 md:px-12 py-6 md:py-6 cursor-pointer text-sm md:text-base gap-2 border-border dark:border-white text-foreground dark:text-white hover:bg-accent dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            onClick={() => setShowVideo(true)}
          >
            <Play className="w-5 h-5" />
            Watch Showreel
          </Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-4xl bg-black/95 border-0">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl">
              Showreel 2025
            </DialogTitle>
          </DialogHeader>

          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/8Rx3Nvo3Zvg?autoplay=1&mute=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Editor Showreel"
            />
          </div>


          <Button
            variant="outline"
            className="mt-6 border-white/30 text-[#000] cursor-pointer hover:bg-white/10"
            onClick={() => setShowVideo(false)}
          >
            <X className="w-4 h-4 mr-2" /> Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;