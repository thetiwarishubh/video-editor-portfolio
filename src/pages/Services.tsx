"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Film,
  Youtube,
  Clapperboard,
  Mic,
  Palette,
  Zap,
  CheckCircle2,
  ChevronRight,
  Headphones,
  FileVideo,
  Sparkle,
  Rocket,
  Calendar,
  Sparkles,
  X
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Color mapping with complete classes
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return {
          gradient: 'from-red-500 to-orange-500',
          text: 'text-red-500',
          bg: 'bg-red-500/10',
          border: 'border-red-500/20',
          hover: 'hover:bg-red-500/20'
        };
      case 'pink':
        return {
          gradient: 'from-pink-500 to-rose-500',
          text: 'text-pink-500',
          bg: 'bg-pink-500/10',
          border: 'border-pink-500/20',
          hover: 'hover:bg-pink-500/20'
        };
      case 'purple':
        return {
          gradient: 'from-purple-500 to-violet-500',
          text: 'text-purple-500',
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          hover: 'hover:bg-purple-500/20'
        };
      case 'amber':
        return {
          gradient: 'from-amber-500 to-yellow-500',
          text: 'text-amber-500',
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/20',
          hover: 'hover:bg-amber-500/20'
        };
      case 'blue':
        return {
          gradient: 'from-blue-500 to-cyan-500',
          text: 'text-blue-500',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/20',
          hover: 'hover:bg-blue-500/20'
        };
      case 'green':
        return {
          gradient: 'from-green-500 to-emerald-500',
          text: 'text-green-500',
          bg: 'bg-green-500/10',
          border: 'border-green-500/20',
          hover: 'hover:bg-green-500/20'
        };
      default:
        return {
          gradient: 'from-primary to-primary/80',
          text: 'text-primary',
          bg: 'bg-primary/10',
          border: 'border-primary/20',
          hover: 'hover:bg-primary/20'
        };
    }
  };

  const services = [
    {
      id: 1,
      icon: Youtube,
      title: "YouTube Long-Form Editing",
      category: "youtube",
      description: "High-retention cuts with perfect pacing, emotional flow & chapter-ready structure to maximize watch time.",
      color: "red",
      highlights: ["Retention Optimization", "Chapter Markers", "Story Arcs", "SEO Optimization"],
      deliverables: ["4K Master File", "1080p Social Cut", "Thumbnail Design", "SRT Captions"],
      features: [
        "Hook-first structure",
        "B-roll synchronization",
        "Sound design enhancement",
        "Retention analytics report"
      ],
      stats: { retention: "+35%", views: "+2.5x", subs: "+15%" },
      examples: ["Tech Reviews", "Educational Content", "Documentaries", "Vlogs"]
    },
    {
      id: 2,
      icon: Clapperboard,
      title: "Short-Form Content",
      category: "shorts",
      description: "Scroll-stopping Reels, Shorts & TikToks — fast hooks, rhythmic cuts, trending effects & dopamine hits.",
      color: "pink",
      highlights: ["Trending Sounds", "Quick Hooks", "Platform Optimization", "Viral Patterns"],
      deliverables: ["Vertical 9:16", "Square 1:1", "Optimized Audio", "Hashtag Strategy"],
      features: [
        "First 3-second hook",
        "Trending audio sync",
        "Caption animations",
        "Engagement triggers"
      ],
      stats: { retention: "85%+", shares: "3x", completion: "92%" },
      examples: ["Instagram Reels", "TikToks", "YouTube Shorts", "Facebook Stories"]
    },
    {
      id: 3,
      icon: Film,
      title: "Cinematic Brand Films",
      category: "commercial",
      description: "Polished, cinematic visuals — color grading, sound design & storytelling that elevate brand identity.",
      color: "purple",
      highlights: ["Brand Storytelling", "Corporate Identity", "Product Showcase", "Emotional Appeal"],
      deliverables: ["4K Cinema File", "Social Versions", "Behind Scenes", "Case Study"],
      features: [
        "Cinematic color grading",
        "Professional voiceover",
        "Motion graphics",
        "Licensed music"
      ],
      stats: { engagement: "+40%", recall: "3.5x", leads: "+25%" },
      examples: ["Company Introductions", "Product Launches", "Testimonials", "Brand Stories"]
    },
    {
      id: 4,
      icon: Palette,
      title: "Color Grading & VFX",
      category: "post",
      description: "Mood-specific cinematic looks, LUTs, grain, flares & subtle VFX that make footage feel premium.",
      color: "amber",
      highlights: ["Cinematic LUTs", "Mood Creation", "Visual Effects", "Style Consistency"],
      deliverables: ["Custom LUTs", "Graded Footage", "Before/After", "Style Guide"],
      features: [
        "DaVinci Resolve grading",
        "Film emulation",
        "Light effects",
        "Color theory application"
      ],
      stats: { quality: "+60%", mood: "Premium", consistency: "100%" },
      examples: ["Cinematic Looks", "Film Emulation", "Color Correction", "Visual Effects"]
    },
    {
      id: 5,
      icon: Mic,
      title: "Podcast Production",
      category: "audio",
      description: "Clean multi-cam switches, jump cuts, B-roll integration & captions that keep viewers engaged.",
      color: "blue",
      highlights: ["Audio Cleaning", "Video Sync", "Chapter Creation", "Clip Packaging"],
      deliverables: ["Full Episode", "Social Clips", "Audio Only", "Show Notes"],
      features: [
        "Noise removal",
        "Dynamic leveling",
        "Multi-cam editing",
        "SEO-optimized titles"
      ],
      stats: { clarity: "Studio", retention: "78%", downloads: "+30%" },
      examples: ["Interview Podcasts", "Educational Series", "Conversational Shows", "Audio-Only"]
    },
    {
      id: 6,
      icon: Zap,
      title: "Motion Graphics",
      category: "motion",
      description: "Lower thirds, transitions, animated text & kinetic typography tailored to your brand style.",
      color: "green",
      highlights: ["Brand Assets", "Animated Logos", "Text Animations", "Transitions"],
      deliverables: ["After Effects Files", "Motion Presets", "Usage Guide", "Template"],
      features: [
        "Custom animations",
        "Logo reveals",
        "Infographic motion",
        "Template creation"
      ],
      stats: { uniqueness: "100%", engagement: "+45%", recall: "4.2x" },
      examples: ["Logo Animations", "Title Sequences", "Infographic Videos", "Social Media Assets"]
    },
  ];

  const categories = [
    { id: "all", label: "All Services", count: services.length, color: "primary" },
    { id: "youtube", label: "YouTube", count: services.filter(s => s.category === "youtube").length, color: "red" },
    { id: "shorts", label: "Short Form", count: services.filter(s => s.category === "shorts").length, color: "pink" },
    { id: "commercial", label: "Commercial", count: services.filter(s => s.category === "commercial").length, color: "purple" },
    { id: "post", label: "Post-Production", count: services.filter(s => s.category === "post").length, color: "amber" },
    { id: "audio", label: "Audio", count: services.filter(s => s.category === "audio").length, color: "blue" },
    { id: "motion", label: "Motion", count: services.filter(s => s.category === "motion").length, color: "green" },
  ];

  const filteredServices = activeTab === "all"
    ? services
    : services.filter(service => service.category === activeTab);

  const processSteps = [
    { step: 1, title: "Consultation", description: "We discuss your vision, goals, and requirements", icon: Headphones },
    { step: 2, title: "Planning", description: "Storyboard, script review, and timeline creation", icon: FileVideo },
    { step: 3, title: "Production", description: "Editing, color grading, and sound design", icon: Video },
    { step: 4, title: "Review", description: "You review the first cut and provide feedback", icon: CheckCircle2 },
    { step: 5, title: "Revisions", description: "Two rounds of revisions included", icon: Sparkle },
    { step: 6, title: "Delivery", description: "Final files delivered in all required formats", icon: Rocket },
  ];

  const openServiceDialog = (service: any) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 text-foreground md:py-12 lg:py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Professional Video Editing Services
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Services
            </span>
            <span className="text-primary">.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your raw footage into <span className="text-primary font-semibold">high-performing, scroll-stopping content</span> that drives results.
          </p>
        </motion.div>


        {/* Services Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <Button
                  key={category.id}
                  variant={activeTab === category.id ? "default" : "outline"}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative cursor-pointer ${activeTab === category.id ? '' : colorClasses.hover}`}
                >
                  {category.label}
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-background/50 text-xs"
                  >
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div ref={servicesRef} className="mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service, index) => {
                const colorClasses = getColorClasses(service.color);
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    onHoverStart={() => setHoveredService(service.id)}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    <Card className="group h-full bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-14 h-14 rounded-xl ${colorClasses.bg} ${colorClasses.border} flex items-center justify-center`}>
                            <service.icon className={`w-7 h-7 ${colorClasses.text}`} />
                          </div>
                        </div>

                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>

                        <CardDescription className="text-sm">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pb-6">
                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-4 border-t">
                        <Button
                          className="w-full gap-2 group cursor-pointer"
                          onClick={() => openServiceDialog(service)}
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Process Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined workflow that ensures quality and efficiency
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary/10 hidden md:block" />

            <div className="grid min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="text-center h-full bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>

                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-3">
                        {step.step}
                      </div>

                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${getColorClasses(selectedService.color).bg} ${getColorClasses(selectedService.color).border} flex items-center justify-center`}>
                    <selectedService.icon className={`w-6 h-6 ${getColorClasses(selectedService.color).text}`} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                    <DialogDescription>
                      {selectedService.price} • {selectedService.turnaround} turnaround
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground">{selectedService.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {selectedService.deliverables.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedService.stats && (
                  <div>
                    <h4 className="font-semibold mb-3">Typical Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(selectedService.stats).map(([key, value], i) => (
                        <div key={i} className="text-center p-3 bg-secondary/50 rounded-lg">
                          <div className="text-xl font-bold text-primary">{String(value)}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService.examples && (
                  <div>
                    <h4 className="font-semibold mb-3">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.examples.map((example: string, i: number) => (
                        <Badge key={i} variant="secondary">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button className="flex-1 gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  Book This Service
                </Button>
                <Button className="cursor-pointer" variant="outline" onClick={() => setDialogOpen(false)}>
                  <X className="w-4 h-4 mr-2" />
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;