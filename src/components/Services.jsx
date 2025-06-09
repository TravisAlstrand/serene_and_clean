const Services = () => {
  const services = [
    {
      title: "Interior House Cleaning",
      description:
        "Comprehensive cleaning services for your home, including dusting, vacuuming, mopping, and sanitizing all living spaces.",
    },
    {
      title: "Professional Office Cleaning",
      description:
        "Maintain a professional workspace with our thorough office cleaning services, tailored to your business needs.",
    },
    {
      title: "Move Out Deep Cleans",
      description:
        "Ensure your property is spotless for the next occupants with our detailed move-out cleaning service.",
    },
  ];

  return (
    <section
      id="services"
      className="h-[calc(100vh-4rem)] w-full scroll-mt-20 border-b-2 bg-white"
      aria-label="Services Information"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
