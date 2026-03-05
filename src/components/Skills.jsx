import { motion } from "framer-motion";

export default function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TailwindCSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "UI/UX", level: 88 },
        { name: "Figma", level: 90 },
      ],
    },
  ];

  /* container animation */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  /* card animation */
  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="
        relative min-h-screen flex items-center
        bg-gradient-to-br from-black via-slate-900 to-indigo-900
        text-white px-6 overflow-hidden
      "
    >

      {/* Animated Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px] animate-pulse"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>

        {/* Skill Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={card}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
              className="
                bg-white/5 backdrop-blur-lg
                border border-white/10
                rounded-2xl
                p-8
                shadow-xl
                hover:shadow-indigo-500/30
                transition
              "
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>

                    <div className="flex justify-between mb-2 text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.4,
                          delay: index * 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="
                          h-2
                          bg-gradient-to-r
                          from-indigo-500
                          via-purple-500
                          to-pink-500
                          shadow-lg
                        "
                      />

                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}