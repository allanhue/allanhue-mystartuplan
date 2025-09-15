import { useState } from 'react'
import ApiService from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: null, message: '' })
    
    try {
      // Submit form to backend API
      await ApiService.submitContactForm(formData)
      
      // Show success message
      setSubmitStatus({
        success: true,
        message: ' Thank you my team will get back to you shortly.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again or email us directly at centralhype9@gmail.com"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="relative py-16"
      style={{
        background: "url('/WhatsApp Image 2025-08-05 at 12.26.04_1599cfbc.jpg') center/cover no-repeat",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white" style={{
            textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
            WebkitTextStroke: "1px rgba(0,0,0,0.5)"
          }}>Get In Touch</h1>
          <p className="text-xl text-white max-w-3xl mx-auto font-semibold" style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
            WebkitTextStroke: "0.5px rgba(0,0,0,0.4)"
          }}>
            Ready to transform your business with cutting-edge technology solutions? 
            Let's discuss your project and how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border-2 border-black rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-black mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-black mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="devops">DevOps</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us about your project, challenges, and goals..."
                ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-black">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold text-black">Email</h3>
                    <p className="text-gray-600">centralhype9@gmail.com</p>
                    <p className="text-gray-600">centralhype9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📱</div>
                  <div>
                    <h3 className="font-bold text-black">Phone</h3>
                    <p className="text-gray-600">+254 0731430273</p>
                    <p className="text-gray-600">Available Mon-Fri, 9AM-6PM EAT</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🌍</div>
                  <div>
                    <h3 className="font-bold text-black">Location</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                    <p className="text-gray-600">Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Proven track record</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Ongoing support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Results-driven approach</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Response Time</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-black">&lt; 24h</div>
                  <div className="text-sm text-gray-600">Email Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">&lt; 2h</div>
                  <div className="text-sm text-gray-600">Phone Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact