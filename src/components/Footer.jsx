const Footer = () => {
  return (
    <footer className="border-t-2 bg-white py-8 text-[#081c15]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
        {/* Copyright */}
        <span className="text-sm">
          &copy; 2025 Serene and Clean. All rights reserved.
        </span>

        {/* Back to Top (mobile only) */}
        <a
          href="#top"
          className="mt-2 text-sm font-medium text-[#40916c] underline md:hidden"
          aria-label="Back to Top"
        >
          Back to Top
        </a>

        {/* Footer Navigation (tablet and up) */}
        <nav
          className="hidden space-x-8 md:flex"
          role="navigation"
          aria-label="Footer navigation"
        >
          <a href="#about" className="hover:text-gray-600">
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
    </footer>
  );
};

export default Footer;
