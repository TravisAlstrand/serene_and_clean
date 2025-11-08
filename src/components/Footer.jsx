const Footer = () => {
  return (
    <footer className="border-moss/30 bg-cream-dark text-text-primary border-t-2 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:gap-0">
        {/* Copyright */}
        <span className="text-text-secondary text-sm md:text-xs lg:text-sm">
          &copy; 2025 Serene and Clean. All rights reserved.
        </span>

        {/* Back to Top (mobile only) */}
        <a
          href="#top"
          className="bg-forest text-warm-white hover:bg-forest-light mt-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 md:hidden"
          aria-label="Back to Top"
        >
          Back to Top ↑
        </a>

        {/* Footer Navigation (tablet and up) */}
        <nav
          className="hidden space-x-6 md:flex"
          role="navigation"
          aria-label="Footer navigation"
        >
          <a
            href="#about"
            className="text-text-secondary hover:text-forest font-medium transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-text-secondary hover:text-forest font-medium transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-text-secondary hover:text-forest font-medium transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-text-secondary hover:text-forest font-medium transition-colors duration-300"
          >
            Contact
          </a>
          <span className="text-text-muted">|</span>
          <a
            href="#top"
            className="text-text-secondary hover:text-forest font-medium transition-colors duration-300"
            aria-label="Back to Top"
          >
            Top
          </a>
        </nav>
      </div>
      <div className="container mx-auto mt-1 px-4 text-center">
        <a
          className="text-text-secondary hover:text-forest text-sm transition-colors duration-300 md:text-xs lg:text-sm"
          href="https://www.flaticon.com/free-icons/leaf"
          title="leaf icons"
        >
          Leaf favicon created by Roundicons - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
