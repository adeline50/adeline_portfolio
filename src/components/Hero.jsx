import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Profile from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section
      className="
      relative h-screen flex items-center justify-center
      overflow-hidden
      bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
      bg-[length:300%_300%] animate-gradient
      text-white px-6"
    >
      {/* Background Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-400/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-yellow-300">NIYO Adeline</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-light">
            <Typewriter
              words={[
                "Software Development Student",
                "Frontend Developer",
                "Future Full Stack Developer",
                "Tech Enthusiast"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg text-white/80 max-w-xl">
            I am passionate about building modern web applications and learning
            new technologies. My goal is to create clean, efficient, and
            user-friendly digital solutions while growing as a professional
            software developer.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="
              px-8 py-3 rounded-full
              bg-white text-indigo-700 font-semibold
              shadow-lg hover:shadow-2xl
              hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              px-8 py-3 rounded-full
              border border-white
              hover:bg-white hover:text-indigo-700
              transition duration-300"
            >
              Contact Me
            </a>

            <a
              href="mailto:niadeline12@gmail.com"
              className="
              px-8 py-3 rounded-full
              bg-yellow-400 text-black font-semibold
              shadow-lg hover:bg-yellow-300
              hover:scale-105 transition duration-300"
            >
              Hire Me
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div
            className="
            relative w-80 h-80
            rounded-3xl
            bg-white/10 backdrop-blur-lg
            border border-white/20
            shadow-2xl
            flex items-center justify-center"
          >
            <motion.img
              src={Profile}
              alt="NIYO Adeline"
              animate={{ y: [0, -20, 0], rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="
              w-64 h-64 rounded-full
              object-cover
              border-4 border-white
              shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}