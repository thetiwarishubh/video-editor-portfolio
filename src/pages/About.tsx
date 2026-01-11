"use client";
import { SiAdobepremierepro, SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiCanva, } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Button
} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  Award,
  Users,
  Video,
  Sparkles,
  TrendingUp,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        ".hero-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          stagger: 0.1
        }
      );

      // Stats cards - Optimized
      gsap.from(".stat-card", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Timeline progress line
      gsap.fromTo(
        ".timeline-progress",
        { height: "0%" },
        {
          height: "100%",
          duration: 3,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 25%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        }
      );

      // Timeline items
      gsap.utils.toArray(".timeline-item").forEach((item: any, i) => {
        gsap.from(item, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.18,
        });
      });

      // Skills animation
      gsap.from(".skill-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        }
      });

      // Testimonial animation
      gsap.from(".testimonial-card", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 85%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Video, value: "5000+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "500M+", label: "Total Views", color: "from-purple-500 to-pink-500" },
    { icon: Award, value: "20+", label: "Creator Collabs", color: "from-green-500 to-emerald-500" },
    { icon: Sparkles, value: "6+", label: "Years Editing", color: "from-orange-500 to-red-500" },
  ];

  const obsessions = [
    "Cinematic storytelling & emotional pacing",
    "Hook-first structure & scroll-stopping intros",
    "High retention through micro-rhythms",
    "Color grading that matches brand mood",
    "Sound design that hits in the chest",
    "Platform-specific optimization (YT, IG, TikTok)",
  ];

  const timelineItems = [
    { year: "2020", text: "Started editing with a second-hand laptop" },
    { year: "2021", text: "Hobby turned passion — gaming & vlog edits" },
    { year: "2022", text: "First paid client from local creators" },
    { year: "2023", text: "Full-time freelancer with 50+ completed projects" },
    { year: "2024-2025", text: "Collaborated with large creators (100K–500K subs)" },
    { year: "Now", text: "Working with 1M+ subscriber creators, crafting premium storytelling edits" },
  ];


  // Technical Skills
  const skills = [
    {
      name: "Adobe Premiere Pro",
      icon: SiAdobepremierepro,
      color: "text-purple-500",
    },
    {
      name: "After Effects",
      icon: SiAdobeaftereffects,
      color: "text-blue-500",
    },
    {
      name: "Photoshop",
      icon: SiAdobephotoshop,
      color: "text-sky-500",
    },
    {
      name: "Illustrator",
      icon: SiAdobeillustrator,
      color: "text-orange-500",
    },
    {
      name: "Canva",
      icon: SiCanva,
      color: "text-cyan-500",
    },
    {
      name: "Notion",
      icon: RiNotionFill,
      color: "text-cyan-500",
    },
  ];


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background text-foreground pt-8 pb-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20 md:mb-28 lg:mb-36">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Professional Video Editor
          </div>

          <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground mb-6">
            Rahul<span className="text-primary"> Kumar Das</span>
          </h1>

          <p className="hero-text text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light mb-10">
            I turn raw footage into stories people <span className="text-primary font-semibold">can't scroll past</span>.
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-container mb-24 md:mb-32">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card group">
                <Card className="h-full bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group-hover:scale-[1.02] overflow-hidden">
                  <CardContent className="p-4 md:p-6 text-center flex flex-col items-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4 transition-transform group-hover:scale-110" />
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-foreground to-foreground/80">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Content - Story & Obsessions */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 md:mb-32">
          {/* Left - Story */}
          <div>
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                From obsession to profession
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-sm md:text-base">
                  I started cutting videos in 2020 with nothing but passion, cracked software, and endless nights.
                  What began as fan edits and gaming montages turned into a deep obsession with pacing, emotion,
                  and that magical moment when a viewer forgets they're watching an edit.
                </p>
                <p className="text-sm md:text-base">
                  Today I work with creators who care about retention as much as aesthetics — from long-form YouTube deep-dives
                  to addictive 15-second Reels. My goal is simple: make people feel something… and stay until the end.
                </p>

                <div className="pt-6">
                  <blockquote className="border-l-4 border-primary/70 pl-6 italic text-sm sm:text-base text-foreground/90">
                    "Good editing is invisible. Great editing makes you feel like you were there."
                  </blockquote>
                  <p className="text-sm text-muted-foreground mt-2 pl-6">— My editing philosophy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Obsessions + Timeline */}
          <div className="space-y-16 lg:space-y-20">
            {/* What I Obsess Over */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                What I Obsess Over
              </h3>
              <div className="space-y-3">
                {obsessions.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div ref={timelineRef}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Quick Timeline
              </h3>

              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border rounded-full overflow-hidden">
                  <div className="timeline-progress w-full h-0 bg-gradient-to-b from-primary to-primary/60 origin-top" />
                </div>

                {timelineItems.map((item, i) => (
                  <div
                    key={i}
                    className="timeline-item relative mb-8 md:mb-10 last:mb-0"
                  >
                    <div className="absolute left-1 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <Card className="ml-6 bg-card/60 border-border hover:border-primary/40 transition-all">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg md:text-xl text-primary font-bold">
                          {item.year}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/85">
                          {item.text}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Dashboard */}
        <div className="skills-section mb-24 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font- mb-4">
              Tools I Work With
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools I master to bring your vision to life
            </p>
          </div>

          <div className="grid min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div key={skill.name} className="skill-card group">
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardHeader className="flex flex-col items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />

                      </div>

                      <CardTitle className="text-lg">
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}

          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Ready to make your next video <span className="text-primary">unskippable</span>?
          </h2>

          <p className="text-sm md:text-base text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
            Let's create something that doesn't just look good — it performs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/work">
              <Button size="lg" className="min-w-[200px] cursor-pointer text-base gap-2">
                <Video className="w-5 h-5" />
                See My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="cursor-pointer min-w-[200px] text-base gap-2">
                <Mail className="w-5 h-5" />
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="rounded-full w-14 h-14 shadow-lg">
          <Mail className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default About;