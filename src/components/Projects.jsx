import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Modern animated personal portfolio built with React & Tailwind." },
    { title: "E-Commerce Platform", desc: "Full-featured shopping app with cart, payments & admin dashboard." },
    { title: "Task Manager App", desc: "Productivity app with drag & drop and real-time updates." },
    { title: "Restaurant Landing Page", desc: "High-converting UI with responsive design & animations." },
    { title: "Dashboard Analytics UI", desc: "Interactive charts and real-time data visualization." },
    { title: "Blog Platform", desc: "Markdown-powered blog with authentication & CMS features." },
  ];

  return (
    <section
      id="projects"
      className="
        h-full flex items-center
        bg-gradient-to-br from-black via-purple-900 to-indigo-900
        text-white px-6
      "
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
                relative group
                bg-white/10 backdrop-blur-lg
                border border-white/20
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-purple-500/40
                transition duration-300
              "
            >
              {/* Smaller Thumbnail */}
              <div className="
                h-32
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                bg-[length:200%_200%] animate-gradient
              "></div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {project.desc}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="
                absolute inset-0
                bg-black/80
                flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition duration-300
              ">
                <button className="
                  px-4 py-2
                  bg-white text-black
                  rounded-full
                  hover:scale-110
                  transition
                ">
                  View Project
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}