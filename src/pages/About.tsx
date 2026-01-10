"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award, Clock, Users, Video, Sparkles } from "lucide-react";

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
        { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
      );

      // Stats cards - GSAP only (no more disappearing)
      gsap.utils.toArray(".stat-card").forEach((card: any, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse", // optional: reverse on scroll up
          },
          delay: i * 0.12,
        });
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Video, value: "180+", label: "Projects Delivered" },
    { icon: Users, value: "2.4M+", label: "Total Views" },
    { icon: Clock, value: "~68%", label: "Avg. Retention" },
    { icon: Award, value: "14", label: "Creator Collabs" },
    { icon: Sparkles, value: "4+", label: "Years Editing" },
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
    { year: "2021", text: "Started editing as hobby — gaming & vlogs" },
    { year: "2022", text: "First paid client — local creators" },
    { year: "2023", text: "Full-time freelance, 50+ projects" },
    { year: "2024–2025", text: "Working with 10–50k+ subscriber creators" },
    { year: "Now", text: "Focused on premium, high-retention storytelling" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background text-foreground py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Hero */}
        <div className="text-center mb-20 md:mb-32 lg:mb-40">
          <h1
            className="hero-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-foreground"
          >
            Rahul.
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light">
            I turn raw footage into stories people can't scroll past.
          </p>
        </div>

        {/* Stats - Reliable GSAP animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-24 md:mb-32">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card group"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 group-hover:scale-[1.02]">
                <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 md:mb-5 transition-transform group-hover:scale-110" />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-sm md:text-base text-muted-foreground mt-2 md:mt-3 font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
              From obsession to profession
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                I started cutting videos in 2021 with nothing but passion, cracked software, and endless nights. 
                What began as fan edits and gaming montages turned into a deep obsession with pacing, emotion, 
                and that magical moment when a viewer forgets they're watching an edit.
              </p>
              <p>
                Today I work with creators who care about retention as much as aesthetics — from long-form YouTube deep-dives 
                to addictive 15-second Reels. My goal is simple: make people feel something… and stay until the end.
              </p>

              <blockquote className="border-l-4 border-primary/70 pl-6 italic text-xl text-foreground/90 mt-8">
                "Good editing is invisible. Great editing makes you feel like you were there."
              </blockquote>
            </div>
          </div>

          {/* Right - Obsessions + Timeline */}
          <div className="space-y-16 lg:space-y-20">
            {/* What I Obsess Over */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">What I Obsess Over</h3>
              <div className="space-y-4">
                {obsessions.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div ref={timelineRef}>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Quick Timeline</h3>

              <div className="relative pl-10 md:pl-12">
                {/* Progress line */}
                <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-border rounded-full overflow-hidden">
                  <div className="timeline-progress w-full h-0 bg-gradient-to-b from-primary to-primary/60 origin-top" />
                </div>

                {timelineItems.map((item, i) => (
                  <div
                    key={i}
                    className="timeline-item relative mb-10 md:mb-14 last:mb-0"
                  >
                    <div className="absolute left-[-2px] top-2 w-5 h-5 rounded-full bg-primary/20 border-4 border-background" />
                    <Card className="ml-8 bg-card/60 border-border hover:border-primary/40 transition-all backdrop-blur-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl md:text-3xl text-primary font-extrabold">
                          {item.year}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base md:text-lg text-foreground/85">
                          {item.text}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 md:mt-32 lg:mt-40 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to make your next video unskippable?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
            Let's create something that doesn't just look good — it performs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="min-w-[200px] text-lg">
              See My Work
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] text-lg">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;