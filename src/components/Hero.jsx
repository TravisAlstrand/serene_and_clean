const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
      <div className="absolute inset-0">
        <img
          src="/images/hero/chatgptBucketImage.png"
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
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
        <div className="relative z-10 -mt-32 text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-5xl lg:text-6xl">
            Serene and Clean
          </h1>
          <p className="mt-4 text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-xl lg:text-2xl">
            Professional Cleaning Services
          </p>
          <p className="mt-1 text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-xl lg:text-2xl">
            for Nevada and Placer Counties
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#services"
              className="rounded-md bg-[#52b788] px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#40916c] focus:ring-2 focus:ring-[#40916c] focus:ring-offset-2 focus:outline-none"
            >
              Services
            </a>
            <a
              href="#contact"
              className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-[#081c15] shadow-md transition-colors duration-200 hover:bg-[#d8f3dc] focus:ring-2 focus:ring-[#40916c] focus:ring-offset-2 focus:outline-none"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
