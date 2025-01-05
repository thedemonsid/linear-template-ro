export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          {/* Glowing Badge */}
          <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm text-gray-300">
              Introducing Linear 2.0
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Project management,
            <br />
            reimagined for speed
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto mb-12 text-xl text-gray-400">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. It's the project management tool you'll enjoy using.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Demo
            </a>
          </div>

          {/* Interactive Preview */}
          <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 backdrop-blur">
              {/* Mock Interface Elements */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                  <div className="h-4 w-32 rounded bg-white/10"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-4 w-4 rounded bg-white/10"></div>
                  <div className="h-4 w-4 rounded bg-white/10"></div>
                  <div className="h-4 w-4 rounded bg-white/10"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-12 rounded bg-white/5"></div>
                <div className="h-12 rounded bg-white/5"></div>
                <div className="h-12 rounded bg-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
