
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
  Award,
  Headphones,
  FileVideo,
  Sparkle,
  Rocket,
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

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [, setHoveredService] = useState<number | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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
      stats: { retention: "+35%", views: "+2.5x", subs: "+15%" }
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
      stats: { retention: "85%+", shares: "3x", completion: "92%" }
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
      stats: { engagement: "+40%", recall: "3.5x", leads: "+25%" }
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
      stats: { quality: "+60%", mood: "Premium", consistency: "100%" }
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
      stats: { uniqueness: "100%", engagement: "+45%", recall: "4.2x" }
    },
  ];

  const categories = [
    { id: "all", label: "All Services", count: services.length },
    { id: "youtube", label: "YouTube", count: services.filter(s => s.category === "youtube").length },
    { id: "shorts", label: "Short Form", count: services.filter(s => s.category === "shorts").length },
    { id: "commercial", label: "Commercial", count: services.filter(s => s.category === "commercial").length },
    { id: "post", label: "Post-Production", count: services.filter(s => s.category === "post").length },
    { id: "audio", label: "Audio", count: services.filter(s => s.category === "audio").length },
    { id: "motion", label: "Motion", count: services.filter(s => s.category === "motion").length },
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

  const colorClasses = {
    red: "from-red-500 to-orange-500",
    pink: "from-pink-500 to-rose-500",
    purple: "from-purple-500 to-violet-500",
    amber: "from-amber-500 to-yellow-500",
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500"
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 text-foreground py-16 md:py-12 lg:py-16 overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            Premium Video Editing Services
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Services
            </span>
            <span className="text-primary">.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional video editing services that transform your raw footage into
            <span className="text-primary font-semibold"> scroll-stopping, high-performing content</span>.
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
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeTab === category.id ? "default" : "outline"}
                onClick={() => setActiveTab(category.id)}
                className="relative cursor-pointer"
              >
                {category.label}
                <Badge
                  variant="secondary"
                  className="ml-2 bg-background/50 text-xs"
                >
                  {category.count}
                </Badge>
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            ))}
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
              {filteredServices.map((service, index) => (
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
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} bg-opacity-10 flex items-center justify-center`}>
                          <service.icon className={`w-7 h-7 text-${service.color}-500`} />
                        </div>
                      </div>

                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>

                      <CardDescription className="text-base">
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
                      <Button className="w-full gap-2 group">
                        View Details
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Process Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
    </section>
  );
};

export default Services;