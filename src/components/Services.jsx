const Services = () => {
  return (
    <section
      id="services"
      className="border-sage-light/20 bg-warm-white w-full scroll-mt-20 border-b"
      aria-label="Services Information"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center md:py-24">
        <h2 className="text-forest mb-16 text-7xl font-bold md:text-8xl">
          Our Services
        </h2>

        <div className="max-w-4xl space-y-8">
          <p className="text-text-primary text-lg leading-relaxed md:text-xl">
            We proudly serve both{" "}
            <span className="text-forest font-semibold">
              residential and commercial clients
            </span>{" "}
            throughout Nevada and Placer counties, offering customized cleaning
            solutions designed around you and your space.
          </p>

          {/* Service Types Grid */}
          <div className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:shadow-natural rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex justify-center">
                <div className="bg-moss/10 group-hover:bg-moss/20 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors duration-300">
                  🏠
                </div>
              </div>
              <h3 className="text-forest mb-2 text-xl font-semibold">
                Routine Maintenance
              </h3>
              <p className="text-text-secondary text-sm">
                Regular cleaning to keep your space consistently fresh and
                inviting
              </p>
            </div>

            <div className="group border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:shadow-natural rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex justify-center">
                <div className="bg-moss/10 group-hover:bg-moss/20 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors duration-300">
                  ✨
                </div>
              </div>
              <h3 className="text-forest mb-2 text-xl font-semibold">
                Deep Cleaning
              </h3>
              <p className="text-text-secondary text-sm">
                Thorough top-to-bottom cleaning for a truly spotless result
              </p>
            </div>

            <div className="group border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:shadow-natural rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex justify-center">
                <div className="bg-moss/10 group-hover:bg-moss/20 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors duration-300">
                  📦
                </div>
              </div>
              <h3 className="text-forest mb-2 text-xl font-semibold">
                Move In/Out
              </h3>
              <p className="text-text-secondary text-sm">
                Complete cleaning for transitions, reaching every corner
              </p>
            </div>

            <div className="group border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:shadow-natural rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex justify-center">
                <div className="bg-moss/10 group-hover:bg-moss/20 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors duration-300">
                  🏢
                </div>
              </div>
              <h3 className="text-forest mb-2 text-xl font-semibold">
                Office Cleaning
              </h3>
              <p className="text-text-secondary text-sm">
                Professional commercial cleaning for productive workspaces
              </p>
            </div>

            <div className="group border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:shadow-natural rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex justify-center">
                <div className="bg-moss/10 group-hover:bg-moss/20 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors duration-300">
                  🔨
                </div>
              </div>
              <h3 className="text-forest mb-2 text-xl font-semibold">
                Post-Construction
              </h3>
              <p className="text-text-secondary text-sm">
                Detailed cleaning after renovations or building projects
              </p>
            </div>

            <div className="group border-moss/20 bg-cream shadow-soft hover:border-moss/40 hover:shadow-natural rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex justify-center">
                <div className="bg-moss/10 group-hover:bg-moss/20 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors duration-300">
                  🌟
                </div>
              </div>
              <h3 className="text-forest mb-2 text-xl font-semibold">
                Specialized Services
              </h3>
              <p className="text-text-secondary text-sm">
                Custom solutions tailored to your unique needs
              </p>
            </div>
          </div>

          <div className="my-8 flex justify-center">
            <div className="bg-moss h-1 w-24 rounded-full"></div>
          </div>

          <p className="text-text-secondary text-base leading-relaxed md:text-lg">
            While we don't shampoo carpets or wash windows, we're happy to
            discuss the full range of services we do offer.
          </p>

          <div className="border-forest/20 bg-cream shadow-soft mt-10 rounded-2xl border-2 p-8 md:p-10">
            <p className="text-text-primary mb-6 text-lg leading-relaxed md:text-xl">
              <span className="text-forest font-semibold">Reach out today</span>{" "}
              to schedule your free in-person estimate—we'd love to learn how we
              can support your cleaning goals.
            </p>
            <a
              href="#contact"
              className="bg-forest text-warm-white shadow-natural hover:bg-forest-light focus:ring-moss inline-block rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(74,124,59,0.3)] focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Request Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
