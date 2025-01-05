export default function RoadmapView() {
  return (
    <section id="roadmapView" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-500 text-sm font-semibold mb-2">ROADMAP</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Visualize your project timeline
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plan, track, and communicate project progress with our intuitive roadmap visualization tools.
          </p>
        </div>

        {/* Interactive Roadmap Demo */}
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-black p-8">
          {/* Timeline Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors">Q1 2024</button>
              <button className="px-4 py-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors">Q2 2024</button>
              <button className="px-4 py-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors">Q3 2024</button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="space-y-6">
            {/* Project Track 1 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <h3 className="text-white font-medium">Core Features</h3>
              </div>
              <div className="h-20 bg-white/5 rounded-lg relative">
                <div className="absolute left-[10%] top-2 bottom-2 w-[30%] bg-purple-500/20 rounded border border-purple-500/30 backdrop-blur-sm">
                  <div className="p-2">
                    <div className="text-sm text-white">Authentication System</div>
                    <div className="text-xs text-purple-400">In Progress</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Track 2 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <h3 className="text-white font-medium">User Interface</h3>
              </div>
              <div className="h-20 bg-white/5 rounded-lg relative">
                <div className="absolute left-[45%] top-2 bottom-2 w-[25%] bg-blue-500/20 rounded border border-blue-500/30 backdrop-blur-sm">
                  <div className="p-2">
                    <div className="text-sm text-white">Dashboard Redesign</div>
                    <div className="text-xs text-blue-400">Planning</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Track 3 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <h3 className="text-white font-medium">Infrastructure</h3>
              </div>
              <div className="h-20 bg-white/5 rounded-lg relative">
                <div className="absolute left-[20%] top-2 bottom-2 w-[40%] bg-green-500/20 rounded border border-green-500/30 backdrop-blur-sm">
                  <div className="p-2">
                    <div className="text-sm text-white">Cloud Migration</div>
                    <div className="text-xs text-green-400">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Footer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm text-gray-400">In Progress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-400">Planning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-400">Completed</span>
                </div>
              </div>
              <button className="px-4 py-2 text-sm text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                Export Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}