"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import work1 from "@/assets/images/work-thumbnail.avif";
import work2 from "@/assets/images/work2.avif";
import {
  Play,
  TrendingUp,
  Clock,
  Sparkles,
  Filter,
  Youtube,
  Instagram,
  Film,
  Award,
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
  const [activeCategory, setActiveCategory] = useState("all");
  const [, setProjectsLoaded] = useState(false);

  const projects = [
    {
      id: 1,
      title: "iPhone 15 Pro Cinematic Review",
      category: "youtube",
      platform: "YouTube",
      thumbnail: work1,
      videoUrl: "https://www.youtube.com/embed/2HbozGsn4Oc?start=1",
      description: "High-retention tech review with cinematic pacing and dynamic b-roll",
      duration: "8:59",
      stats: { retention: "72%", views: "2.1M", likes: "145K" },
      tags: ["Tech", "Review", "Cinematic"],
      results: ["72% Avg View Duration", "2.1M Views", "Featured on Trending"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      title: "Instagram Reel - Morning Routine",
      category: "shorts",
      platform: "Instagram",
      thumbnail: work2,
      videoUrl: "https://www.youtube.com/embed/8Rx3Nvo3Zvg",
      description: "Scroll-stopping Reel with fast hooks and trending audio",
      duration: "0:59",
      stats: { retention: "85%", plays: "2.4M", shares: "12K" },
      tags: ["Lifestyle", "Reel", "Viral"],
      results: ["85% Retention", "2.4M Plays", "500K Reach"],
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Brand Commercial - Tech Startup",
      category: "commercial",
      platform: "YouTube",
      thumbnail: work1,
      videoUrl: "https://www.youtube.com/embed/2HbozGsn4Oc?start=1",
      description: "Cinematic brand film with emotional storytelling",
      duration: "1:30",
      stats: { engagement: "91%", leads: "+45%", shares: "2.3K" },
      tags: ["Brand", "Commercial", "Corporate"],
      results: ["91% Engagement", "+45% Leads", "500K Impressions"],
      color: "from-orange-600 to-red-600",
    },
  ];

  const categories = [
    { id: "all", label: "All", icon: Film, count: projects.length },
    { id: "youtube", label: "YouTube", icon: Youtube, count: projects.filter(p => p.category === "youtube").length },
    { id: "shorts", label: "Shorts", icon: Instagram, count: projects.filter(p => p.category === "shorts").length },
    { id: "commercial", label: "Commercial", icon: Award, count: projects.filter(p => p.category === "commercial").length },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const openVideoDialog = (project: any) => {
    setSelectedProject(project);
    setVideoDialogOpen(true);
  };

  useEffect(() => {
    // Set projects as loaded immediately
    setProjectsLoaded(true);

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".work-hero", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Stats animation
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          once: true
        }
      });

      // Grid animation - FIXED: Use GSAP for consistent animation
      gsap.from(".project-item", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true // This prevents re-animation on scroll
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:py-12 lg:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Portfolio Showcase
          </div>
          <h1 className="work-hero text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Selected <span className="text-primary">Work</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-impact video edits that drive views, retention, and growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Filter by Category</h2>
            <Badge variant="outline" className="text-xs">
              {filteredProjects.length} projects
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="gap-2"
                >
                  <Icon className="w-3 h-3" />
                  {category.label}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid - FIXED: Remove AnimatePresence and complex animations */}
        <div ref={gridRef} className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-item opacity-100" // Ensure opacity is always 100
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary/30">
                  {/* Thumbnail */}
                  <div
                    className="relative aspect-video cursor-pointer group overflow-hidden"
                    onClick={() => openVideoDialog(project)}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                      {project.platform}
                    </Badge>

                    {/* Duration badge */}
                    <Badge variant="secondary" className="absolute top-3 right-3 bg-black/50 text-white border-0">
                      <Clock className="w-3 h-3 mr-1" />
                      {project.duration}
                    </Badge>

                    {/* Hover info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-sm font-medium">
                        {project.stats.views || project.stats.plays}
                      </div>
                      <div className="text-white/70 text-xs flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {project.stats.retention || project.stats.engagement} retention
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2 mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full gap-2 group"
                      onClick={() => openVideoDialog(project)}
                    >
                      <Play className="w-4 h-4" />
                      Watch Edit
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try selecting a different category
              </p>
              <Button onClick={() => setActiveCategory("all")}>
                Show all projects
              </Button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 max-w-3xl mx-auto">
            <CardContent className="py-12 px-8">
              <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's create something that stops the scroll and grows your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Start Your Project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/services">View Services</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 backdrop-blur-sm border-white/10">
          {selectedProject && (
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src={selectedProject.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-sm">
                <div>
                  <div className="font-medium">{selectedProject.title}</div>
                  <div className="text-xs">{selectedProject.platform} • {selectedProject.duration}</div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setVideoDialogOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Work;