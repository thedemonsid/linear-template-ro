export default function Navbar() {
  return (
    <section
      id="navbar"
      className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <svg
                className="h-6 w-auto text-white"
                viewBox="0 0 95 24"
                fill="currentColor"
              >
                <path d="M12 0L0 12L12 24L24 12L12 0ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
              </svg>
              <span className="ml-2 text-xl font-semibold text-white">
                Linear
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#issueTracking"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Issue Tracking
            </a>
            <a
              href="#roadmapView"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#integrations"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Integrations
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#issueTracking"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Issue Tracking
            </a>
            <a
              href="#roadmapView"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Roadmap
            </a>
            <a
              href="#integrations"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Integrations
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="#"
                className="text-center text-base font-medium text-gray-300 hover:text-white"
              >
                Sign in
              </a>
              <a
                href="#"
                className="text-center bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
