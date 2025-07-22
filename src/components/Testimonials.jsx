import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";

const contentStyle = {
  height: "100%",
  color: "#081c15",
  textAlign: "center",
  background: "#FFF",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.5rem",
  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
  border: "1px solid #FFF",
  margin: "0 1rem",
};

const arrowButtonClass =
  "absolute top-1/2 -translate-y-1/2 z-10 border border-gray-300 rounded-full shadow-lg p-2 text-2xl text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 cursor-pointer";

const Testimonials = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const carouselRef = useRef();

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
      className="w-full scroll-mt-20 border-b-2"
      aria-label="Customer Testimonials"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          Don't just take our word for it. Here's what our satisfied customers
          have to say about their experience with Serene and Clean.
        </p>
        <div className="relative mx-auto max-w-5xl">
          {/* Custom Arrows */}
          <button
            className={`${arrowButtonClass} left-0`}
            aria-label="Previous testimonial"
            onClick={() => carouselRef.current.prev()}
            type="button"
          >
            <LeftOutlined />
          </button>
          <button
            className={`${arrowButtonClass} right-0`}
            aria-label="Next testimonial"
            onClick={() => carouselRef.current.next()}
            type="button"
          >
            <RightOutlined />
          </button>
          <Carousel
            ref={carouselRef}
            autoplay={!prefersReducedMotion}
            autoplaySpeed={8000}
            className="h-full"
            dots={{
              className: "custom-carousel-dots",
            }}
            dotPosition="bottom"
            effect={prefersReducedMotion ? "fade" : "scrollx"}
            accessibility={true}
            aria-label="Testimonial carousel"
            pauseOnHover={true}
            swipeToSlide={true}
            draggable={true}
          >
            <div
              className="h-full"
              role="group"
              aria-roledescription="slide"
              aria-label="Testimonial 1 of 4"
            >
              <div style={contentStyle}>
                <div className="mx-auto max-w-3xl">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Awesome service!
                  </h3>
                  <p className="mb-6">
                    I had a great experience with Serene and Clean. The staff
                    was friendly and the service was excellent. I would
                    definitely recommend them to anyone.
                  </p>
                  <p className="text-lg font-medium">- Sarah Johnson</p>
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
                  <h3 className="mb-4 text-2xl font-semibold">
                    Dedicated and reliable
                  </h3>
                  <p className="mb-6">
                    I had a great experience with Serene and Clean. The staff
                    was friendly and the service was excellent. I would
                    definitely recommend them to anyone.
                  </p>
                  <p className="text-lg font-medium">- Michael Chen</p>
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
                  <h3 className="mb-4 text-2xl font-semibold">
                    Great attention to detail
                  </h3>
                  <p className="mb-6">
                    I had a great experience with Serene and Clean. The staff
                    was friendly and the service was excellent. I would
                    definitely recommend them to anyone.
                  </p>
                  <p className="text-lg font-medium">- Emily Rodriguez</p>
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
                  <h3 className="mb-4 text-2xl font-semibold">
                    Excellent customer service
                  </h3>
                  <p className="mb-6">
                    I had a great experience with Serene and Clean. The staff
                    was friendly and the service was excellent. I would
                    definitely recommend them to anyone.
                  </p>
                  <p className="text-lg font-medium">- David Thompson</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
