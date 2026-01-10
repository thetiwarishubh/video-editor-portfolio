"use client";

import { motion } from "framer-motion";
import { Video, Film, Sparkles, Youtube, Clapperboard, Scissors } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Youtube,
    title: "YouTube Long-Form Editing",
    description: "High-retention cuts with perfect pacing, emotional flow & chapter-ready structure to maximize watch time.",
    color: "violet",
  },
  {
    icon: Clapperboard,
    title: "Short-Form Content",
    description: "Scroll-stopping Reels, Shorts & TikToks — fast hooks, rhythmic cuts, trending effects & dopamine hits.",
    color: "pink",
  },
  {
    icon: Scissors,
    title: "Cinematic Brand Videos",
    description: "Polished, cinematic visuals — color grading, sound design & storytelling that elevate brand identity.",
    color: "indigo",
  },
  {
    icon: Sparkles,
    title: "Color Grading & VFX",
    description: "Mood-specific cinematic looks, LUTs, grain, flares & subtle VFX that make footage feel premium.",
    color: "amber",
  },
  {
    icon: Film,
    title: "Podcast & Talking Head Edits",
    description: "Clean multi-cam switches, jump cuts, B-roll integration & captions that keep viewers engaged.",
    color: "cyan",
  },
  {
    icon: Video,
    title: "Custom Motion Graphics",
    description: "Lower thirds, transitions, animated text & kinetic typography tailored to your brand style.",
    color: "emerald",
  },
];

const Services = () => {
  return (
    <section className="relative min-h-screen bg-background text-foreground py-20 md:py-32 overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Services I Offer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Turning raw footage into content that stops scrolls and keeps eyes glued.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card className="group h-full bg-card/60 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-600/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-400 group-hover:text-${service.color}-300 transition-colors`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Optional subtle bottom accent */}
                  <div className={`mt-6 h-1 w-16 bg-gradient-to-r from-${service.color}-500 to-${service.color}-700/40 rounded-full group-hover:w-24 transition-all duration-500`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 md:mt-32 text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Ready to level up your content?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 rounded-xl text-lg font-medium transition-all hover:scale-[1.02] shadow-lg shadow-primary/20">
              Let's Work Together
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-10 py-6 rounded-xl text-lg font-medium transition-all">
              See My Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;