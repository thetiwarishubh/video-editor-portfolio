import { useEffect } from "react";
import { fadeUp } from "@/animations/gsap";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const Projects = () => {

    useEffect(() => {
  fadeUp(".project-card");
}, []);


  return (
    <section
      id="work"
      className="py-28 px-6 bg-zinc-950 text-zinc-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected <span className="text-violet-400">Work</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            A small selection of projects that showcase quality,
            storytelling and attention to detail.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="project-card group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
