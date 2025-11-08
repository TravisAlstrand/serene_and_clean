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
        className="border-sage-light/20 bg-cream/95 shadow-soft sticky top-0 z-[60] h-16 border-b backdrop-blur-sm"
        role="banner"
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          {/* Brand Name - Always visible */}
          <a
            href="#top"
            className="heading-logo text-forest hover:text-forest-light text-4xl font-semibold transition-colors duration-300"
            aria-label="Serene and Clean - Home"
          >
            Serene and Clean
          </a>

          {/* Mobile Menu Icon - Visible only on small and medium screens */}
          <button
            onClick={toggleMenu}
            className="hover:bg-sage-light/10 active:bg-sage-light/20 cursor-pointer rounded-lg p-2 transition-colors lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CloseOutlined
                className="text-forest text-2xl"
                aria-hidden="true"
              />
            ) : (
              <MenuOutlined
                className="text-forest text-2xl"
                aria-hidden="true"
              />
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
              className="text-text-secondary after:bg-moss hover:text-forest relative font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
              aria-current="page"
            >
              About
            </a>
            <a
              href="#services"
              className="text-text-secondary after:bg-moss hover:text-forest relative font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-text-secondary after:bg-moss hover:text-forest relative font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-text-secondary after:bg-moss hover:text-forest relative font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`bg-forest/40 fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } ${prefersReducedMotion ? "transition-none" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`border-sage-light/30 bg-warm-white shadow-soft-lg fixed inset-y-0 right-0 z-50 w-full max-w-sm transform border-l transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${prefersReducedMotion ? "transition-none" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav
          className="flex h-full flex-col items-center justify-center space-y-10"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <a
            href="#about"
            className="text-text-secondary hover:bg-moss/10 hover:text-forest rounded-lg px-6 py-2 text-2xl font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-current="page"
          >
            About
          </a>
          <a
            href="#services"
            className="text-text-secondary hover:bg-moss/10 hover:text-forest rounded-lg px-6 py-2 text-2xl font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-text-secondary hover:bg-moss/10 hover:text-forest rounded-lg px-6 py-2 text-2xl font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-text-secondary hover:bg-moss/10 hover:text-forest rounded-lg px-6 py-2 text-2xl font-medium transition-all duration-300"
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
