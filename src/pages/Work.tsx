import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Sample projects (replace with your real work + real video links)
const projects = [
  {
    id: 1,
    title: "Cinematic Travel Vlog 2025",
    category: "YouTube Long-form",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    description:
      "High-retention edit with dynamic pacing, color grading & sound design",
    videoUrl: "#", // ← replace with real Vimeo/YouTube link
  },
  {
    id: 2,
    title: "Brand Story | Tech Startup",
    category: "Corporate / Brand Video",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    description:
      "Emotional storytelling + motion graphics for product launch",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Instagram Reels Pack",
    category: "Short-form / Reels",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    description: "Fast-cut, trendy transitions, viral-ready edits",
    videoUrl: "#",
  },
  {
    id: 4,
    title: "Documentary Short: Urban Life",
    category: "Documentary",
    thumbnail:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    description:
      "Moody grading, slow-motion sequences & atmospheric audio",
    videoUrl: "#",
  },
  // Add more real projects here...
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Animations
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(".work-heading", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Cards stagger
      gsap.utils.toArray(".project-card").forEach((card: any, i) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        });
      });

      // Parallax on images
      gsap.utils.toArray(".thumbnail-wrapper").forEach((thumb: any) => {
        gsap.to(thumb.querySelector("img"), {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: thumb,
            scrub: 0.8,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pt-32 pb-24 px-6 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="work-heading text-5xl md:text-7xl font-bold tracking-tight">
            Selected <span className="text-violet-600 dark:text-violet-400">Work</span>
          </h1>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            A collection of cinematic video edits focused on powerful storytelling,
            viewer retention, emotional impact and high engagement.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm shadow-lg dark:shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
            >
              {/* Thumbnail */}
              <div className="thumbnail-wrapper relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4 text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-violet-600/90 dark:bg-violet-700/90 flex items-center justify-center backdrop-blur-sm border-2 border-violet-400/60 shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-white fill-white ml-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm text-violet-200 dark:text-violet-300 font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-3">
                <h4 className="font-semibold text-lg text-zinc-900 dark:text-white">
                  {project.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 rounded-full border-violet-600 dark:border-violet-500 text-violet-700 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
                  asChild
                >
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Project
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to create something{" "}
              <span className="text-violet-600 dark:text-violet-400">epic</span>?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
              Let's turn your vision into a high-impact, cinematic video that stops the scroll.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-lg bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white shadow-lg"
              asChild
            >
              <a href="/contact">Let's Collaborate</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;