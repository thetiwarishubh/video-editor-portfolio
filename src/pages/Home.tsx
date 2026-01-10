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

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1,
      });
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
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5" />

      <div className="max-w-5xl text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Available for Freelance Projects
        </motion.div>

        {/* Title */}
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          <span className="block">Transform Your</span>
          <span className="block mt-2 text-primary">Raw Footage</span>
          <span className="block mt-2">
            Into{" "}
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              Scroll-Stopping Stories
            </span>
          </span>
        </h1>

        {/* SEO Subtitle */}
        <motion.p className="hero-subtitle mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          I’m a <span className="text-primary font-semibold">freelance video editor</span>{" "}
          helping YouTubers, brands, and creators grow faster with
          high-retention YouTube videos, Instagram reels, and cinematic edits.
        </motion.p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/60 rounded-full"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div className="hero-cta mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="rounded-full px-12 py-7 text-lg gap-2 hover:shadow-xl hover:shadow-primary/20"
            >
              Start a Project
              <Zap className="w-5 h-5" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-12 py-7 text-lg"
            onClick={() => setShowVideo(true)}
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Showreel
          </Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-4xl bg-black/90 border-0">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl">
              Showreel 2024
            </DialogTitle>
          </DialogHeader>

          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              className="w-full h-full"
              allowFullScreen
              title="Video Editor Showreel"
            />
          </div>

          <Button
            variant="outline"
            className="mt-4 border-white/20 text-white"
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
