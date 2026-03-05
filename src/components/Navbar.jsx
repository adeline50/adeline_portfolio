{/*import React from "react";

export default function Navbar({ darkMode, toggleDark }) {
  return (
    <nav className="flex justify-between items-center p-6 bg-primary text-white shadow-md">
      <h1 className="text-4xl font-bold">Web Tech</h1>
      <div className="flex gap-4 items-center">
        <button
          onClick={toggleDark}
          className="px-4 py-2 rounded bg-secondary text-white hover:bg-green-600 focus:bg-red-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button className="px-4 py-2 rounded bg-secondary text-white hover:bg-green-600 focus:bg-red-600 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
}*/}

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">Adeline</h1>

        <div className="flex space-x-6">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize hover:text-blue-600 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

