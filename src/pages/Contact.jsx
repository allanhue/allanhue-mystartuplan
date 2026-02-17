import { useState } from 'react'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineCheckCircle } from 'react-icons/hi2';
import { useTheme } from '../theme/ThemeProvider';

// import ApiService from '../services/api'

const Contact = () => {
  const { isDarkMode } = useTheme();
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
      className={`${isDarkMode ? 'bg-neutral-900' : 'bg-white'} py-16`}
      style={{
        background: "url('/image.png') center/cover no-repeat",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
    
        </div>

        

          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`${isDarkMode ? 'bg-neutral-800' : 'bg-gray-50'} p-8 rounded-lg hover:shadow-lg transition-all`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'} flex-shrink-0 mt-1`}>
                    <HiOutlineEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>centralhype9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'} flex-shrink-0 mt-1`}>
                    <HiOutlinePhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Phone</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+254 0731430273</p>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Available Mon-Fri, 9AM-6PM EAT</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'} flex-shrink-0 mt-1`}>
                    <HiOutlineMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Location</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Nairobi, Kenya</p>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-neutral-800 text-white' : 'bg-black text-white'} p-8 rounded-lg hover:shadow-lg transition-all`}>
              <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Proven track record</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Ongoing support</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Results-driven approach</span>
                </li>
              </ul>
            </div>

            <div className={`${isDarkMode ? 'bg-neutral-800 border-neutral-600' : 'bg-white border-black'} border-2 rounded-lg p-8`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Response Time</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>&lt; 24h</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email Response</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>&lt; 2h</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
