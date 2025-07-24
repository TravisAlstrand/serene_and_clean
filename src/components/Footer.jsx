const Footer = () => {
  return (
    <footer className="border-t-2 bg-[#f2e8cf] py-8 text-[#081c15]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
        {/* Copyright */}
        <span className="text-sm">
          &copy; 2025 Serene and Clean. All rights reserved.
        </span>

        {/* Back to Top (mobile only) */}
        <a
          href="#top"
          className="mt-2 text-sm font-medium text-[#386641] underline hover:text-[#6a994e] md:hidden"
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
          <a href="#about" className="text-[#386641] hover:text-[#6a994e]">
            About
          </a>
          <a href="#services" className="text-[#386641] hover:text-[#6a994e]">
            Services
          </a>
          <a
            href="#testimonials"
            className="text-[#386641] hover:text-[#6a994e]"
          >
            Testimonials
          </a>
          <a href="#contact" className="text-[#386641] hover:text-[#6a994e]">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
