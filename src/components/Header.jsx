import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes in user preferences
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-[60] h-16 bg-[#d8f3dc] text-[#081c15] shadow-sm"
        role="banner"
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          {/* Brand Name - Always visible */}
          <a
            href="#top"
            className="text-xl font-semibold"
            aria-label="Serene and Clean - Home"
          >
            Serene and Clean
          </a>

          {/* Mobile Menu Icon - Visible only on small and medium screens */}
          <button
            onClick={toggleMenu}
            className="cursor-pointer lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CloseOutlined className="text-2xl" aria-hidden="true" />
            ) : (
              <MenuOutlined className="text-2xl" aria-hidden="true" />
            )}
          </button>

          {/* Navigation Links - Visible only on large screens and up */}
          <nav
            className="hidden space-x-8 lg:flex"
            role="navigation"
            aria-label="Main navigation"
          >
            <a
              href="#about"
              className="hover:text-gray-600"
              aria-current="page"
            >
              About
            </a>
            <a href="#services" className="hover:text-gray-600">
              Services
            </a>
            <a href="#testimonials" className="hover:text-gray-600">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } ${prefersReducedMotion ? "transition-none" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm transform bg-[#d8f3dc] transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${prefersReducedMotion ? "transition-none" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav
          className="flex h-full flex-col items-center justify-center space-y-8 text-[#081c15]"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <a
            href="#about"
            className="text-xl hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)}
            aria-current="page"
          >
            About
          </a>
          <a
            href="#services"
            className="text-xl hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-xl hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-xl hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
