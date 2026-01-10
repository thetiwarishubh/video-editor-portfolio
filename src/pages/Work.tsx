"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Play, 
  Youtube, 
  Instagram, 
  Film, 
  TrendingUp, 
  Clock, 
  BarChart3,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Filter,
  Award,
  Eye,
  Users,
  Zap,
  Volume2,
  Palette,
  Scissors
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Tech Review - 2.1M Views",
      category: "youtube",
      platform: "YouTube",
      thumbnail: "/projects/tech-review.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "High-retention tech review with cinematic pacing, dynamic b-roll, and viewer-friendly chapters",
      duration: "8:45",
      stats: { retention: "72%", views: "2.1M", subscribers: "+25K" },
      tags: ["Tech", "Review", "Cinematic", "Educational"],
      software: ["Premiere Pro", "After Effects", "Audition"],
      client: "TechWithAlex",
      results: [
        "72% Average View Duration",
        "2.1M Total Views",
        "25K New Subscribers",
        "Featured on YouTube Trending"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Travel Vlog Montage",
      category: "shorts",
      platform: "Instagram",
      thumbnail: "/projects/travel-montage.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Scroll-stopping travel reels with fast hooks, trending audio, and seamless transitions",
      duration: "0:45",
      stats: { retention: "85%", shares: "12K", saves: "8.5K" },
      tags: ["Travel", "Montage", "Reels", "Viral"],
      software: ["Premiere Pro", "CapCut"],
      client: "Wanderlust Diaries",
      results: [
        "85% Retention Rate",
        "12K Shares",
        "8.5K Saves",
        "500K Reach in 48h"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Gaming Montage - 3.4M Views",
      category: "gaming",
      platform: "YouTube",
      thumbnail: "/projects/gaming-montage.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "High-energy gaming edit with sync kills, custom sound design, and hype moments",
      duration: "4:20",
      stats: { retention: "68%", views: "3.4M", likes: "250K" },
      tags: ["Gaming", "Montage", "Action", "Hype"],
      software: ["Premiere Pro", "After Effects", "Audition"],
      client: "GamingGod",
      results: [
        "3.4M Total Views",
        "68% Average Retention",
        "250K Likes",
        "Top 10 Trending Gaming"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Brand Commercial",
      category: "commercial",
      platform: "LinkedIn",
      thumbnail: "/projects/brand-commercial.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Cinematic brand film with emotional storytelling, motion graphics, and corporate messaging",
      duration: "1:30",
      stats: { engagement: "91%", leads: "+45%", shares: "2.3K" },
      tags: ["Brand", "Commercial", "Corporate", "Storytelling"],
      software: ["DaVinci Resolve", "After Effects"],
      client: "TechCorp Inc.",
      results: [
        "91% Engagement Rate",
        "45% Increase in Leads",
        "2.3K Professional Shares",
        "CEO Featured Content"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Podcast Highlights",
      category: "podcast",
      platform: "YouTube",
      thumbnail: "/projects/podcast-highlights.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Multi-cam podcast edit with jump cuts, animated captions, and engaging b-roll",
      duration: "12:15",
      stats: { retention: "78%", downloads: "+40%", subs: "+15K" },
      tags: ["Podcast", "Interview", "Educational", "Multi-cam"],
      software: ["Premiere Pro", "Descript"],
      client: "The Insight Podcast",
      results: [
        "78% Average Retention",
        "40% Increase in Downloads",
        "15K New Subscribers",
        "Apple Podcasts Featured"
      ],
      color: "from-indigo-600 to-blue-600"
    },
    {
      id: 6,
      title: "Fashion Reel - 5M Plays",
      category: "shorts",
      platform: "TikTok",
      thumbnail: "/projects/fashion-reel.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Viral fashion reel with trending transitions, beat-sync cuts, and aesthetic color grading",
      duration: "0:21",
      stats: { plays: "5M", shares: "150K", follows: "+80K" },
      tags: ["Fashion", "Reel", "Viral", "Trending"],
      software: ["Premiere Pro", "CapCut"],
      client: "StyleHub",
      results: [
        "5M Total Plays",
        "150K Shares",
        "80K New Followers",
        "Week on For You Page"
      ],
      color: "from-rose-600 to-pink-600"
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length, icon: Film },
    { id: "youtube", label: "YouTube", count: projects.filter(p => p.category === "youtube" || p.platform === "YouTube").length, icon: Youtube },
    { id: "shorts", label: "Short Form", count: projects.filter(p => p.category === "shorts").length, icon: Instagram },
    { id: "gaming", label: "Gaming", count: projects.filter(p => p.category === "gaming").length, icon: Zap },
    { id: "commercial", label: "Commercial", count: projects.filter(p => p.category === "commercial").length, icon: Award },
    { id: "podcast", label: "Podcast", count: projects.filter(p => p.category === "podcast").length, icon: Volume2 },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => 
        project.category === activeCategory || 
        project.platform.toLowerCase().includes(activeCategory)
      );

  const totalStats = {
    views: "25M+",
    retention: "75% Avg",
    projects: "500+",
    clients: "150+"
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".work-hero", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Stats animation
      gsap.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        }
      });

      // Grid animation
      gsap.from(".project-item", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        }
      });

      // CTA animation
      gsap.from(".work-cta", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".work-cta",
          start: "top 85%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openVideoDialog = (project: any) => {
    setSelectedProject(project);
    setVideoDialogOpen(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 text-foreground pt-20 pb-16 md:pt-24 md:pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Portfolio Showcase
          </div>
          
          <h1 className="work-hero text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6">
            Selected <span className="text-primary">Work</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            A collection of high-impact video edits that stopped the scroll, drove engagement, 
            and delivered measurable results for creators and brands.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Watch Showreel
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Filter className="w-5 h-5" />
              Filter by Platform
            </Button>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="stats-section mb-16 md:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Eye, value: totalStats.views, label: "Total Views", color: "blue" },
              { icon: TrendingUp, value: totalStats.retention, label: "Avg Retention", color: "green" },
              { icon: Film, value: totalStats.projects, label: "Projects", color: "purple" },
              { icon: Users, value: totalStats.clients, label: "Happy Clients", color: "orange" }
            ].map((stat, index) => (
              <Card key={index} className="stat-card bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full bg-${stat.color}-500/10 flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <div className="text-sm text-muted-foreground">
              {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                  <Badge variant="secondary" className="ml-1 bg-background/50">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="mb-24 md:mb-32">
          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="project-item group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 border-border hover:border-primary/30">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden cursor-pointer">
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity`}
                        onClick={() => openVideoDialog(project)}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                          {project.platform}
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">{project.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-medium">{project.stats.retention}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="font-medium">
                          {project.category}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pb-4">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-secondary/50 rounded-lg">
                          <div className="text-lg font-bold text-primary">{project.stats.views}</div>
                          <div className="text-xs text-muted-foreground">Views</div>
                        </div>
                        <div className="text-center p-2 bg-secondary/50 rounded-lg">
                          <div className="text-lg font-bold text-primary">{project.stats.retention}</div>
                          <div className="text-xs text-muted-foreground">Retention</div>
                        </div>
                        <div className="text-center p-2 bg-secondary/50 rounded-lg">
                          <div className="text-lg font-bold text-primary">{project.stats.shares || project.stats.likes || "+45%"}</div>
                          <div className="text-xs text-muted-foreground">Engagement</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-4 border-t">
                      <Button 
                        variant="outline" 
                        className="w-full gap-2 group"
                        onClick={() => openVideoDialog(project)}
                      >
                        <Play className="w-4 h-4" />
                        Watch Project
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Video Dialog */}
        <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
          <DialogContent className="max-w-4xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    {selectedProject.platform} • {selectedProject.category} • {selectedProject.duration}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <iframe
                    src={selectedProject.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Project Details</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Palette className="w-4 h-4 text-primary" />
                        <span>Color Grading & Cinematic Look</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-primary" />
                        <span>Custom Sound Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Scissors className="w-4 h-4 text-primary" />
                        <span>Dynamic Editing & Transitions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span>Retention-Optimized Structure</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Results Achieved</h4>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1" asChild>
                    <a href="/contact" target="_blank">
                      Start Similar Project
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in YouTube
                    </a>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <div className="work-cta">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/20 border-primary/20">
            <CardContent className="py-16 px-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
                <Film className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your <span className="text-primary">Next Masterpiece</span>?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's transform your vision into a video that captures attention, drives engagement, 
                and delivers exceptional results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 min-w-[200px]">
                  <Play className="w-5 h-5" />
                  Book Discovery Call
                </Button>
                <Button size="lg" variant="outline" className="gap-2 min-w-[200px]">
                  <ExternalLink className="w-5 h-5" />
                  View All Projects
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Free Revisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Work;