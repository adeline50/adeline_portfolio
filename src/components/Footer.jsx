export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Adeline. All rights reserved.
        </p>

        <div className="flex gap-6 text-white/70">
          <a href="#" className="hover:text-yellow-400 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}