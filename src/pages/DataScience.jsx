import { Link } from 'react-router-dom'

const DataScience = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">📊</div>
          <h1 className="text-5xl font-bold mb-6 text-black">Data Science & Analytics</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform your business data into powerful insights that drive strategic decisions and competitive advantage
          </p>
        </div>

        {/* Services Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">What We Offer</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Forecast trends, customer behavior, and business outcomes using advanced statistical models and machine learning algorithms.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">Machine Learning Solutions</h3>
                <p className="text-gray-600">
                  Custom ML models for classification, regression, clustering, and recommendation systems tailored to your business needs.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">Data Visualization</h3>
                <p className="text-gray-600">
                  Interactive dashboards and reports using Power BI, Tableau, and custom web-based visualization tools.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-black">Statistical Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive statistical analysis, hypothesis testing, and A/B testing to validate business decisions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Technologies We Use</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🐍</div>
                <span className="font-semibold">Python</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <span className="font-semibold">R</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧠</div>
                <span className="font-semibold">TensorFlow</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <span className="font-semibold">PyTorch</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📈</div>
                <span className="font-semibold">Pandas</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔢</div>
                <span className="font-semibold">NumPy</span>
              </div>
            </div>

            <div className="bg-black text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Data Science Services?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Proven track record with measurable ROI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>End-to-end solutions from data collection to deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Scalable solutions that grow with your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Expert team with industry experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Data Science Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Data Collection</h3>
              <p className="text-gray-600 text-sm">Gather and consolidate data from various sources</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Data Cleaning</h3>
              <p className="text-gray-600 text-sm">Process and clean data for analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Analysis</h3>
              <p className="text-gray-600 text-sm">Apply statistical and ML techniques</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Visualization</h3>
              <p className="text-gray-600 text-sm">Create compelling visual representations</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Deployment</h3>
              <p className="text-gray-600 text-sm">Implement solutions in production</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how data science can transform your business operations and decision-making
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block text-lg"
            >
              Get Started
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

export default DataScience
