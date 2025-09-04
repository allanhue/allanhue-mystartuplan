import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiService from '../services/api';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from API
    const fetchServices = async () => {
      try {
        const res = await ApiService.getServices();
        setServices(res.services || []);
      } catch (error) {
        setServices([]);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16 py-16 rounded-lg"
          style={{
            background: "url('/WhatsApp Image 2025-08-05 at 12.21.56_e942a514.jpg') center/cover no-repeat",
            color: "#fff",
            position: "relative",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service.id} className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-center">{service.icon || '💻'}</div>
                <h2 className="text-3xl font-bold mb-6 text-black text-center">{service.name}</h2>
                <ul className="space-y-3 mb-8">
                  {service.features && Array.isArray(service.features)
                    ? service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))
                    : null}
                </ul>
                <Link
                  to={`/payment?service=${encodeURIComponent(service.name)}&amount=${encodeURIComponent(service.price || 99.99)}`}
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Learn More / Purchase
                </Link>
              </div>
            ))
          ) : (
            // Fallback static cards if API fails
            <>
              {/* Data Science */}
              <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-center">📊</div>
                <h2 className="text-3xl font-bold mb-6 text-black text-center">Data Science & Analytics</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Predictive Analytics & Machine Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Data Visualization (Power BI, Tableau)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Statistical Analysis & Reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">AI Model Development & Deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Data Pipeline Architecture</span>
                  </li>
                </ul>
                <Link 
                  to={`/payment?service=${encodeURIComponent('Data Science & Analytics')}&amount=${encodeURIComponent(199.99)}`} 
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>

              {/* Software Development */}
              <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-center">💻</div>
                <h2 className="text-3xl font-bold mb-6 text-black text-center">Software Development</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Custom Web Applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Mobile App Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">RESTful API Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Database Design & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Cloud Solutions & DevOps</span>
                  </li>
                </ul>
                <Link 
                  to={`/payment?service=${encodeURIComponent('Software Development')}&amount=${encodeURIComponent(199.99)}`} 
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>

              {/* Zoho/Odoo */}
              <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-center">⚙️</div>
                <h2 className="text-3xl font-bold mb-6 text-black text-center">Zoho & Odoo Implementation</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">CRM/ERP System Setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Workflow Automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Third-Party Integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Custom Module Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Training & Support</span>
                  </li>
                </ul>
                <Link 
                  to={`/payment?service=${encodeURIComponent('Zoho & Odoo Implementation')}&amount=${encodeURIComponent(199.99)}`} 
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>

              {/* IT Management */}
              <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-center">🌐</div>
                <h2 className="text-3xl font-bold mb-6 text-black text-center">IT Management & Infrastructure</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">DNS Management & Configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">SSL Certificate Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Server Setup & Maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Cloud Infrastructure Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">Security & Monitoring</span>
                  </li>
                </ul>
                <Link 
                  to={`/payment?service=${encodeURIComponent('IT Management & Infrastructure')}&amount=${encodeURIComponent(199.99)}`} 
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Discovery</h3>
              <p className="text-gray-600">We understand your business needs and challenges</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Strategy</h3>
              <p className="text-gray-600">We develop a tailored solution strategy</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Implementation</h3>
              <p className="text-gray-600">We execute the solution with precision</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Support</h3>
              <p className="text-gray-600">We provide ongoing support and optimization</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your business goals
          </p>
          <Link 
            to="/contact" 
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block text-lg"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;