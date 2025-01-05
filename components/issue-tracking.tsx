export default function IssueTracking() {
  return (
    <section id="issueTracking" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block text-purple-500 text-sm font-semibold mb-2">ISSUE TRACKING</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Track issues with crystal clarity
              </h2>
              <p className="text-gray-400 text-lg">
                Linear's streamlined issue tracking gives you the perfect balance of power and simplicity. Create, organize, and track issues with unprecedented efficiency.
              </p>
            </div>

            {/* Issue States */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-yellow-500"></div>
                <div>
                  <h4 className="text-white font-medium">In Progress</h4>
                  <p className="text-gray-400 text-sm">Actively being worked on by the team</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-purple-500"></div>
                <div>
                  <h4 className="text-white font-medium">In Review</h4>
                  <p className="text-gray-400 text-sm">Ready for team review and feedback</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-500"></div>
                <div>
                  <h4 className="text-white font-medium">Done</h4>
                  <p className="text-gray-400 text-sm">Completed and ready for deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black backdrop-blur">
              {/* Mock Issue Tracker Interface */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <span className="text-white font-medium">Active Issues</span>
                  </div>
                  <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                    View All
                  </button>
                </div>

                {/* Issue List */}
                <div className="space-y-3">
                  <div className="p-4 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Authentication flow optimization</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-500">High Priority</span>
                    </div>
                    <p className="text-sm text-gray-400">Improve login and signup flow for better conversion</p>
                  </div>

                  <div className="p-4 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Dashboard performance</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-500">Medium Priority</span>
                    </div>
                    <p className="text-sm text-gray-400">Optimize dashboard loading times and response</p>
                  </div>

                  <div className="p-4 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">API documentation update</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-500">Low Priority</span>
                    </div>
                    <p className="text-sm text-gray-400">Update API docs with new endpoints</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}