import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Mail,
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* 🎬 Cinematic GSAP Intro */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        letterSpacing: "0.3em",
        duration: 1,
        ease: "power4.out",
      })
        .from(
          contentRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pb-24 px-6 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Let’s work <span className="text-violet-400">together</span>
          </h1>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">

            Have a project in mind or need a reliable video editor?
            Tell me about your idea and I’ll get back to you with
            clarity and next steps.
          </p>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold">What I can help with</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• YouTube long-form & documentaries</li>
                <li>• Instagram / Shorts editing</li>
                <li>• Personal brand & business videos</li>
                <li>• Motion graphics & sound design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Response time</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Usually within 24 hours (often faster).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2 text-sm text-zinc-400">
                <div className="flex">
                  {[
                    { icon: Mail, href: "mailto:Rahulkumardas400m@gmail.com", label: "Email" }
                  ].map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-muted-foreground hover:text-primary transition-colors pr-1 rounded-full hover:bg-primary/10"
                      aria-label={item.label}
                    >
                      <item.icon size={22} />
                    </motion.a>
                  ))}
                  rahulkumardas400m@gmail.com
                </div>

              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, ease: "easeOut" }}
            className="relative rounded-2xl p-8 space-y-6 border border-white/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.08)] dark:shadow-[0_0_60px_rgba(139,92,246,0.15)]">

            <div>
              <label className="text-sm text-zinc-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg bg-white/80 dark:bg-zinc-950/60 backdrop-blur-md border border-zinc-300/50 dark:border-white/10 px-4 py-3 text-sm outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-violet-500 dark:focus:border-violet-400"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg bg-white/80 dark:bg-zinc-950/60 backdrop-blur-md border border-zinc-300/50 dark:border-white/10 px-4 py-3 text-sm outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-violet-500 dark:focus:border-violet-400"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-300">Project details</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-lg bg-white/80 dark:bg-zinc-950/60 backdrop-blur-md border border-zinc-300/50 dark:border-white/10 px-4 py-3 text-sm outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-violet-500 dark:focus:border-violet-400"
              />
            </div>

            <Button size="lg" className="w-full rounded-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
