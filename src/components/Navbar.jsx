import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-[7.5px]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-lg font-bold text-[#1d1d1f]">
            atharv kotekar
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#1d1d1f] hover:text-black transition-colors"
            >
              home
            </a>
            <a
              href="#about"
              className="text-[#1d1d1f] hover:text-black transition-colors"
            >
              about
            </a>
            <a
              href="#projects"
              className="text-[#1d1d1f] hover:text-black transition-colors"
            >
              projects
            </a>
            <a
              href="#contact"
              className="text-[#1d1d1f] hover:text-black transition-colors"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
