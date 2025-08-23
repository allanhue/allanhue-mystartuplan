import { Link } from 'react-router-dom'
import { useState } from 'react';
import ApiService from '../services/api';

const About = () => {
  return (
    <div className="bg-white py-16">

        {/* Header */}
        <div
          className="text-center mb-16 py-16 rounded-lg"
          style={{
            background: "url('/WhatsApp Image 2025-08-05 at 12.26.03_9cf4b4fc.jpg') center/cover no-repeat",
            color: "#fff",
            position: "relative",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6">About Lanstar</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are a technology consulting firm specializing in data science, software development, 
              and business process automation to help companies thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation. We believe that every company, regardless of size, 
              deserves access to enterprise-level technology solutions.
            </p>
          </div>
          <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the trusted technology partner that transforms businesses through 
              intelligent automation, data-driven insights, and innovative software solutions 
              that create lasting competitive advantages.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-12 text-black">Meet the Founder</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-black rounded-lg p-8">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Allan Mwangi</h3>
              <p className="text-lg text-gray-600 mb-6">
                Full-Stack Developer & Business Automation Specialist
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extensive experience in data science, software development, and business process automation, 
                Allan founded Lanstar Solutions to help businesses leverage technology for growth and efficiency. 
                His expertise spans across multiple domains including machine learning, web development, 
                and enterprise system implementation.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold text-black">Data Science Expert</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="font-semibold text-black">Full-Stack Developer</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="font-semibold text-black">Automation Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Partnership Mindset</h3>
              <p className="text-gray-600">
                We work as your technology partner, not just a vendor. Your success is our success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Results-Focused</h3>
              <p className="text-gray-600">
                Every solution we deliver is designed to provide measurable business value and ROI.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Innovation-Driven</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology to bring you the most effective solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Why Choose Lanstar Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Expertise Across Domains</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Deep knowledge in data science and machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Full-stack development capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Certified Zoho and Odoo implementation expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Cloud and DevOps experience</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Proven Track Record</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Successful projects across multiple industries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>High client satisfaction and retention rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Measurable ROI for all implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with the right technology solutions
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block text-lg"
            >
              Get In Touch
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors inline-block text-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
  )
}

export default About