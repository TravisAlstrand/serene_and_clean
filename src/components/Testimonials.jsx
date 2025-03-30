import { Carousel } from "antd";
import { useState, useEffect } from "react";

const contentStyle = {
  height: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Testimonials = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes in user preferences
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      id="testimonials"
      className="h-[calc(100vh-4rem)] w-full scroll-mt-20 bg-green-500"
      aria-label="Customer Testimonials"
    >
      <h2>Testimonials</h2>
      <div className="mx-auto h-full max-w-5xl">
        <Carousel
          autoplay={!prefersReducedMotion}
          autoplaySpeed={8000}
          className="h-full"
          dots={true}
          effect={prefersReducedMotion ? "fade" : "slide"}
          accessibility={true}
          aria-label="Testimonial carousel"
        >
          <div
            className="h-full"
            role="group"
            aria-roledescription="slide"
            aria-label="Testimonial 1 of 4"
          >
            <div style={contentStyle}>
              <div className="mx-auto max-w-3xl">
                <h3 className="mb-4 text-2xl">Awesome service!</h3>
                <p className="mb-6">
                  I had a great experience with Serene and Clean. The staff was
                  friendly and the service was excellent. I would definitely
                  recommend them to anyone.
                </p>
                <p className="text-lg italic">- Sarah Johnson</p>
              </div>
            </div>
          </div>
          <div
            className="h-full"
            role="group"
            aria-roledescription="slide"
            aria-label="Testimonial 2 of 4"
          >
            <div style={contentStyle}>
              <div className="mx-auto max-w-3xl">
                <h3 className="mb-4 text-2xl">Dedicated and reliable</h3>
                <p className="mb-6">
                  I had a great experience with Serene and Clean. The staff was
                  friendly and the service was excellent. I would definitely
                  recommend them to anyone.
                </p>
                <p className="text-lg italic">- Michael Chen</p>
              </div>
            </div>
          </div>
          <div
            className="h-full"
            role="group"
            aria-roledescription="slide"
            aria-label="Testimonial 3 of 4"
          >
            <div style={contentStyle}>
              <div className="mx-auto max-w-3xl">
                <h3 className="mb-4 text-2xl">Great attention to detail</h3>
                <p className="mb-6">
                  I had a great experience with Serene and Clean. The staff was
                  friendly and the service was excellent. I would definitely
                  recommend them to anyone.
                </p>
                <p className="text-lg italic">- Emily Rodriguez</p>
              </div>
            </div>
          </div>
          <div
            className="h-full"
            role="group"
            aria-roledescription="slide"
            aria-label="Testimonial 4 of 4"
          >
            <div style={contentStyle}>
              <div className="mx-auto max-w-3xl">
                <h3 className="mb-4 text-2xl">Excellent customer service</h3>
                <p className="mb-6">
                  I had a great experience with Serene and Clean. The staff was
                  friendly and the service was excellent. I would definitely
                  recommend them to anyone.
                </p>
                <p className="text-lg italic">- David Thompson</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
