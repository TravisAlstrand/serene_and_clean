const About = () => {
  return (
    <section
      id="about"
      className="border-sage-light/20 bg-cream w-full scroll-mt-20 border-b"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-20 md:py-24">
        <h2 className="text-forest mb-16 text-7xl font-bold md:text-8xl">
          About Us
        </h2>

        <div className="max-w-4xl space-y-8 text-center">
          <p className="text-text-primary text-lg leading-relaxed md:text-xl">
            At Serene and Clean, we believe a peaceful and serene life begins
            with a clean environment. With busy schedules and demanding
            lifestyles, finding the time to maintain your space can be a
            challenge.{" "}
            <span className="text-forest font-semibold">
              Let us help you get there!
            </span>
          </p>

          <div className="my-8 flex justify-center">
            <div className="bg-moss h-1 w-24 rounded-full"></div>
          </div>

          <p className="text-text-secondary text-lg leading-relaxed md:text-xl">
            What does clean mean? At Serene and Clean we understand that clean
            is defined differently for every person and every space. With years
            of experience making things shine we have perfected our craft to
            deliver beautiful results tailored to your specific needs. Our team
            of dedicated cleaners are committed to providing reliable,
            efficient, and thorough cleaning services that exceed your
            expectations.
          </p>

          <p className="text-text-secondary text-lg leading-relaxed md:text-xl">
            We take pride in our attention to detail and use{" "}
            <span className="text-moss font-semibold">
              natural products whenever possible
            </span>
            . We are happy to provide a list of all products we may use and omit
            any that you are not comfortable with.
          </p>

          <p className="text-text-secondary text-lg leading-relaxed md:text-xl">
            Whether you require regular maintenance cleaning, deep cleaning,
            move in or out cleaning, post construction cleaning or specialized
            services, we have the expertise to tackle almost any job with care.
          </p>

          <div className="border-moss/20 bg-warm-white shadow-soft my-10 rounded-2xl border-2 p-8 md:p-10">
            <p className="text-text-primary text-lg leading-relaxed md:text-xl">
              <span className="text-forest font-semibold">
                Customer satisfaction is our top priority
              </span>
              , and we strive to build long-lasting relationships with each and
              every client. Trust Serene and Clean to transform your space into
              a sanctuary of cleanliness and serenity.
            </p>
            <a
              href="#contact"
              className="bg-forest text-warm-white shadow-natural hover:bg-forest-light focus:ring-moss mt-6 inline-block rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(74,124,59,0.3)] focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Schedule a Free Estimate
            </a>
          </div>

          <p className="text-text-muted text-base leading-relaxed md:text-lg">
            Thank you for taking the time to consider us for your cleaning
            needs. We look forward to serving you and helping you achieve a
            cleaner, healthier, and more peaceful space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
