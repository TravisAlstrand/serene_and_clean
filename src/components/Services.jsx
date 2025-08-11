const Services = () => {
  return (
    <section
      id="services"
      className="w-full scroll-mt-20 border-b-2 bg-white"
      aria-label="Services Information"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center">
        <h2 className="mb-12 text-7xl font-bold text-[#386641]">
          Our Services
        </h2>
        <p className="max-w-5xl text-lg">
          We proudly serve both residential and commercial clients throughout
          Nevada and Placer counties, offering customized cleaning solutions
          designed around you and your space. Whether it's routine maintenance
          for your office or a thorough move-out clean that reaches every corner
          of your home, we're here to help. While we don't shampoo carpets or
          wash windows, we're happy to discuss the full range of services we do
          offer.
        </p>
        <p className="mt-12 max-w-5xl text-lg">
          Reach out today to schedule your free in-person estimate—we'd love to
          learn how we can support your cleaning goals.
        </p>
      </div>
    </section>
  );
};

export default Services;
