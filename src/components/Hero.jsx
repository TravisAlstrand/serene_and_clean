const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
      <div className="absolute inset-0">
        <img
          src="/images/hero/CounterTop.png"
          alt="Serene and Clean - Professional Cleaning Services"
          className="block h-full w-full object-cover"
        />
        {/* Mobile (xs) */}
        {/* <img
          src="/images/hero/hero-xs.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="block h-full w-full object-cover sm:hidden"
        /> */}
        {/* Small tablets (sm) */}
        {/* <img
          src="/images/hero/hero-sm.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover sm:block md:hidden"
        /> */}
        {/* Tablets (md) */}
        {/* <img
          src="/images/hero/hero-md.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover md:block lg:hidden"
        /> */}
        {/* Laptops (lg) */}
        {/* <img
          src="/images/hero/hero-lg.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover lg:block xl:hidden"
        /> */}
        {/* Large screens (xl) */}
        {/* <img
          src="/images/hero/hero-xl.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover xl:block"
        /> */}
      </div>

      {/* Overlay with subtle gradient */}
      <div className="from-forest/30 via-forest/20 to-forest/40 absolute inset-0 bg-gradient-to-b"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="relative z-10 -mt-32 text-center">
          <h1 className="text-warm-white text-7xl font-bold drop-shadow-[0_4px_12px_rgba(45,80,22,0.8)] lg:text-9xl">
            Serene and Clean
          </h1>
          <p className="text-cream mt-6 text-xl drop-shadow-[0_2px_8px_rgba(45,80,22,0.7)] md:text-2xl lg:text-3xl">
            Professional Cleaning Services
          </p>
          <p className="text-cream mt-2 text-xl drop-shadow-[0_2px_8px_rgba(45,80,22,0.7)] md:text-2xl lg:text-3xl">
            for Nevada and Placer Counties
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#services"
              className="group bg-forest text-warm-white shadow-natural hover:bg-forest-light focus:ring-moss rounded-lg px-8 py-3.5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(74,124,59,0.3)] focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="group border-warm-white bg-warm-white/95 text-forest shadow-natural hover:bg-cream hover:border-cream focus:ring-warm-white rounded-lg border-2 px-8 py-3.5 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(250,248,243,0.4)] focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
