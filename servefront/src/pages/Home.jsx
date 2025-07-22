import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Professional Tech Solutions for Your Business
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We specialize in <span className="text-yellow-400 font-semibold">Data Science</span>, 
            <span className="text-yellow-400 font-semibold"> Software Development</span>, and 
            <span className="text-yellow-400 font-semibold"> Zoho/Odoo Implementation</span> to transform your business operations
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Data Science */}
            <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Transform your raw data into actionable insights with advanced analytics, 
                machine learning models, and predictive analytics solutions.
              </p>
              <Link 
                to="/data-science" 
                className="text-black font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Software Development */}
            <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Software Development</h3>
              <p className="text-gray-600 mb-6">
                Custom web applications, mobile apps, and enterprise software solutions 
                built with modern technologies and best practices.
              </p>
              <Link 
                to="/software-development" 
                className="text-black font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Zoho/Odoo */}
            <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Zoho & Odoo Implementation</h3>
              <p className="text-gray-600 mb-6">
                Streamline your business processes with expert Zoho and Odoo 
                implementation, customization, and integration services.
              </p>
              <Link 
                to="/zoho-odoo" 
                className="text-black font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Why Choose TechSolutions Pro?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Results-Driven</h3>
              <p className="text-gray-600">We focus on delivering measurable business outcomes</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💡
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Expert Knowledge</h3>
              <p className="text-gray-600">Deep expertise across multiple technology domains</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Partnership Approach</h3>
              <p className="text-gray-600">We work as your technology partner, not just a vendor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your business goals
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home