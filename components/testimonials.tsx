import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Lead at Stripe",
      text: "Linear has transformed how our team manages projects. The interface is intuitive, and the roadmap feature helps us stay aligned on our goals.",
      rating: 5,
      initial: "S",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-500",
    },
    {
      id: 2,
      name: "Mark Williams",
      role: "Engineering Director at Netflix",
      text: "The efficiency gains we've seen since implementing Linear are remarkable. It's become an essential tool for our engineering workflow.",
      rating: 5,
      initial: "M",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-500",
    },
    // Add more testimonials here if needed
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-500 text-sm font-semibold mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by leading teams
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what teams are saying about their experience with Linear.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center`}
                  >
                    <span
                      className={`text-xl font-semibold ${testimonial.textColor}`}
                    >
                      {testimonial.initial}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
