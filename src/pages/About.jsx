import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-600 to-orange-500 text-white"
    >
      <h1 className="text-5xl font-bold mb-6">About Page</h1>

      <Link
        to="/"
        className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold"
      >
        ← Back to Home
      </Link>
    </motion.div>
  );
}
