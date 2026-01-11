"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import work1 from "@/assets/images/work-thumbnail.avif";
import work2 from "@/assets/images/work2.avif";
import {
  Play,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Tech Review - 2.1M Views",
      category: "youtube",
      platform: "YouTube",
      thumbnail: work1,
      videoUrl: "https://www.youtube.com/embed/2HbozGsn4Oc?start=1",
      description: "High-retention tech review with cinematic pacing and dynamic b-roll",
      duration: "8:59",
      stats: { retention: "72%", views: "2.1M" },
      tags: ["Tech", "Review", "Cinematic"],
      results: ["72% Avg View Duration", "2.1M Views", "Featured on Trending"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      title: "Tech Review - 2.1M Views",
      category: "youtube",
      platform: "YouTube",
      thumbnail: work2,
      videoUrl: "https://www.youtube.com/embed/8Rx3Nvo3Zvg",
      description: "High-retention tech review with cinematic pacing and dynamic b-roll",
      duration: "0:59",
      stats: { retention: "72%", views: "2.1M" },
      tags: ["Tech", "Review", "Cinematic"],
      results: ["72% Avg View Duration", "2.1M Views", "Featured on Trending"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      title: "Tech Review - 2.1M Views",
      category: "youtube",
      platform: "YouTube",
      thumbnail: work1,
      videoUrl: "https://www.youtube.com/embed/2HbozGsn4Oc?start=1",
      description: "High-retention tech review with cinematic pacing and dynamic b-roll",
      duration: "8:59",
      stats: { retention: "72%", views: "2.1M" },
      tags: ["Tech", "Review", "Cinematic"],
      results: ["72% Avg View Duration", "2.1M Views", "Featured on Trending"],
      color: "from-blue-600 to-cyan-600",
    },
  ];

  const openVideoDialog = (project: any) => {
    setSelectedProject(project);
    setVideoDialogOpen(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero simple fade-in
      gsap.from(".work-hero", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Project cards stagger on scroll
      gsap.from(".project-item", {
        y: 80,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Portfolio
          </div>
          <h1 className="work-hero text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Selected <span className="text-primary">Work</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-impact video edits that drive views, retention, and growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                {/* Thumbnail */}
                <div
                  className="relative aspect-video cursor-pointer group"
                  onClick={() => openVideoDialog(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3">{project.platform}</Badge>
                </div>

                {/* Content */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {project.stats.retention} retention
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => openVideoDialog(project)}
                  >
                    <Play className="w-4 h-4" />
                    Watch Edit
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's create something that stops the scroll and grows your audience.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl p-0">
          {selectedProject && (
            <div className="aspect-video">
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Work;