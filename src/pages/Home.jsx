import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
    >
      <h1 className="text-5xl font-bold mb-6">Home Page</h1>

      <Link
        to="/about"
        className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold"
      >
        Go to About →
      </Link>
    </motion.div>
  );
}
