import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiCheckCircle } from 'react-icons/fi';

// import ApiService from '../services/api'

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
      className="bg-white py-16"
      style={{
        background: "url('/image.png') center/cover no-repeat",
      }}
    >
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

        

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all">
              <h2 className="text-3xl font-bold mb-6 text-black">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 flex-shrink-0 mt-1">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Email</h3>
                    <p className="text-gray-600">centralhype9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 flex-shrink-0 mt-1">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+254 0731430273</p>
                    <p className="text-gray-600 text-sm">Available Mon-Fri, 9AM-6PM EAT</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 flex-shrink-0 mt-1">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Location</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                    <p className="text-gray-600 text-sm">Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Proven track record</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Ongoing support</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
  )
}

export default Contact