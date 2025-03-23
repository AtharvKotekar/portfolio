export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-[7.5px] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-8 text-[#1d1d1f] focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

            

    </div>
  );
};
