import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    { label: "Phone", value: "+250795037215" },
    { label: "Email", value: "niadeline12@email.com" },
    { label: "Instagram", value: "ade_1_line" },
    { label: "LinkedIn", value: "adeline" },
    { label: "GitHub", value: "github.com/adeline50" },
  ];

  return (
    <section
      id="contact"
      className="
        h-full flex items-center justify-center
        bg-gradient-to-br from-black via-indigo-900 to-purple-900
        text-white px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="
          max-w-md w-full
          bg-white/10 backdrop-blur-lg
          border border-white/20
          rounded-3xl
          shadow-2xl
          p-10
          text-center
          hover:shadow-purple-500/40
          transition duration-500
        "
      >
        <h2 className="text-4xl font-bold mb-6 text-indigo-300">
          Let's Work Together
        </h2>
        <p className="text-white/70 mb-8">
          Ready to bring your ideas to life? Reach out through any of the platforms below.
        </p>

        <div className="space-y-4 text-left">
          {contactInfo.map((item, index) => (
            <div key={item.label} className="flex justify-between items-center">
              <span className="font-semibold text-white/90">{item.label}:</span>
              <span className="text-white/70">{item.value}</span>
            </div>
          ))}
        </div>

        <button className="
          mt-8 px-8 py-3 bg-indigo-500 text-white rounded-full
          hover:bg-indigo-400 hover:scale-105 transition
        ">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}