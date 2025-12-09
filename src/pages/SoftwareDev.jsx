import { Link } from 'react-router-dom'

const SoftwareDev = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">💻</div>
          <h1 className="text-5xl font-bold mb-6 text-black">Software Development</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Custom software solutions built with modern technologies to streamline your business operations and enhance user experiences
          </p>
        </div>

        {/* Services Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Development Services</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">Web Applications</h3>
                <p className="text-gray-600">
                  Full-stack web applications using React, Node.js, Python, and modern frameworks for scalable, responsive solutions.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">Mobile Applications</h3>
                <p className="text-gray-600">
                  Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and native technologies.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">API Development</h3>
                <p className="text-gray-600">
                  RESTful and GraphQL APIs with proper authentication, documentation, and scalable architecture.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">Database Solutions</h3>
                <p className="text-gray-600">
                  Database design, optimization, and management for SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Technology Stack</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-black">Frontend</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">⚛️</div>
                    <span className="text-sm font-semibold">React</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">🅰️</div>
                    <span className="text-sm font-semibold">Angular</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">💚</div>
                    <span className="text-sm font-semibold">Vue.js</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-black">Backend</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">🟢</div>
                    <span className="text-sm font-semibold">Node.js</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">🐍</div>
                    <span className="text-sm font-semibold">Python</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">☕</div>
                    <span className="text-sm font-semibold">Java</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-black">Cloud & DevOps</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">☁️</div>
                    <span className="text-sm font-semibold">AWS</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">🐳</div>
                    <span className="text-sm font-semibold">Docker</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-xl mb-1">⚙️</div>
                    <span className="text-sm font-semibold">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Types of Projects We Handle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-bold mb-3 text-black text-center">Enterprise Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• CRM and ERP systems</li>
                <li>• Inventory management</li>
                <li>• HR management systems</li>
                <li>• Financial applications</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🛒</div>
              <h3 className="text-xl font-bold mb-3 text-black text-center">E-commerce Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Online marketplaces</li>
                <li>• Payment integration</li>
                <li>• Shopping cart systems</li>
                <li>• Order management</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-bold mb-3 text-black text-center">Custom Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Business automation tools</li>
                <li>• Data management systems</li>
                <li>• Integration platforms</li>
                <li>• Custom dashboards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Development Process</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                1
              </div>
              <h3 className="text-sm font-bold mb-1 text-black">Requirements</h3>
              <p className="text-gray-600 text-xs">Gather and analyze requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                2
              </div>
              <h3 className="text-sm font-bold mb-1 text-black">Design</h3>
              <p className="text-gray-600 text-xs">Create UI/UX and architecture</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                3
              </div>
              <h3 className="text-sm font-bold mb-1 text-black">Development</h3>
              <p className="text-gray-600 text-xs">Code and build the solution</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                4
              </div>
              <h3 className="text-sm font-bold mb-1 text-black">Testing</h3>
              <p className="text-gray-600 text-xs">Quality assurance and testing</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                5
              </div>
              <h3 className="text-sm font-bold mb-1 text-black">Deployment</h3>
              <p className="text-gray-600 text-xs">Launch and go live</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                6
              </div>
              <h3 className="text-sm font-bold mb-1 text-black">Support</h3>
              <p className="text-gray-600 text-xs">Ongoing maintenance</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Build Your Next Application?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your software development needs and create a solution that drives your business forward
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-block text-lg"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors inline-block text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareDev
