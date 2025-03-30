const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
      <div className="absolute inset-0">
        {/* Mobile (xs) */}
        <img
          src="/images/hero/hero-xs.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="block h-full w-full object-cover sm:hidden"
        />
        {/* Small tablets (sm) */}
        <img
          src="/images/hero/hero-sm.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover sm:block md:hidden"
        />
        {/* Tablets (md) */}
        <img
          src="/images/hero/hero-md.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover md:block lg:hidden"
        />
        {/* Laptops (lg) */}
        <img
          src="/images/hero/hero-lg.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover lg:block xl:hidden"
        />
        {/* Large screens (xl) */}
        <img
          src="/images/hero/hero-xl.jpg"
          alt="Serene and Clean - Professional Cleaning Services"
          className="hidden h-full w-full object-cover xl:block"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
        <div className="relative z-10 -mt-32 text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-5xl lg:text-6xl">
            Serene and Clean
          </h1>
          <p className="mt-4 text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-xl lg:text-2xl">
            Professional Cleaning Services
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
