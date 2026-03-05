export default function About() {
  return (
    <section
      id="about"
      className="
        h-full flex items-center
        bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900
        text-white px-6
      "
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Glass Card */}
          <div className="
            bg-white/10 backdrop-blur-lg
            p-8 rounded-2xl
            border border-white/20
            shadow-2xl
            hover:scale-105 transition duration-500
          ">
            <p className="text-lg leading-relaxed text-white/90">
              I'm passionate about creating clean UI and scalable web applications.
              I specialize in React, TailwindCSS, and modern frontend architecture.
              My focus is writing maintainable code while delivering premium user experiences.
            </p>
          </div>

          {/* Mission Card */}
          <div className="
            bg-gradient-to-r from-indigo-600 to-purple-600
            p-8 rounded-2xl
            shadow-2xl
            hover:shadow-purple-500/40
            transition duration-500
          ">
            <h3 className="text-2xl font-semibold mb-4">
              My Mission
            </h3>
            <p className="text-white/90">
              To build digital products that combine beauty, usability,
              and high performance — turning ideas into impactful experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}