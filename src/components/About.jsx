const About = () => {
  return (
    <section
      id="about"
      className="h-[calc(100vh-4rem)] w-full scroll-mt-20 border-b-2 bg-white"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="max-w-3xl text-lg text-gray-600">
          For over 5 years, we've been proudly serving Nevada County with
          exceptional cleaning services. Our commitment to quality and attention
          to detail has made us the trusted choice for both residential and
          commercial cleaning needs. As we expand our services to Placer County,
          we continue to uphold our high standards of cleanliness and customer
          satisfaction. Whether it's your home or office, our professional team
          ensures a spotless environment that exceeds expectations.
        </p>
      </div>
    </section>
  );
};

export default About;
