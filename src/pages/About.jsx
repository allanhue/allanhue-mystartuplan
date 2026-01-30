import { Link } from 'react-router-dom'
import { FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { useTheme } from '../theme/ThemeProvider';

const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode ? 'bg-neutral-900' : 'bg-white'} py-16`}>
      {/* Header */}
      <div
      >
     
      </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`${isDarkMode ? 'bg-neutral-800' : 'bg-gray-50'} p-8 rounded-lg hover:shadow-lg transition-all group`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <FiTarget className="w-6 h-6" />
              </div>
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Mission</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
              To empower businesses to achieve operational excellence and 
              sustainable growth through innovative technology solutions, 
              data-driven insights and seamless automation of processes.
            </p>
          </div>
          <div className={`${isDarkMode ? 'bg-neutral-800 text-white' : 'bg-black text-white'} p-8 rounded-lg hover:shadow-lg transition-all group`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-cyan-600' : 'bg-cyan-500'} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-300'} text-lg leading-relaxed`}>
              To be a global leader in technology consulting, recognized for 
              transforming businesses with cutting-edge solutions that drive 
              efficiency, innovation and long-term success.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}> The Founder</h2>
          <div className="max-w-4xl mx-auto">
            <div className={`${isDarkMode ? 'bg-neutral-800 border-neutral-600' : 'bg-white border-black'} border-2 rounded-lg p-8`}>
              <div className={`w-32 h-32 ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-200'} rounded-full mx-auto mb-6 flex items-center justify-center text-4xl`}>
                👨‍💻
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Allan Mwangi</h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Software Engineer & Business Automation Specialist
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                With extensive experience in data science, software development and business process automation, 
                Allan founded Lanstar Solutions to help businesses leverage technology for growth and efficiency. 
                His expertise spans across multiple domains including machine learning, applications/Saas development, 
                and enterprise system implementation.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className={`${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'} p-4 rounded-lg`}>
                  <div className="text-2xl mb-2">📊</div>
                  <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Data Science Expert</div>
                </div>
                <div className={`${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'} p-4 rounded-lg`}>
                  <div className="text-2xl mb-2">💻</div>
                  <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Full-Stack Developer</div>
                </div>
                <div className={`${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'} p-4 rounded-lg`}>
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Automation Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-black'} group-hover:text-cyan-600 transition-colors`}>Partnership Mindset</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                We work as your technology partner not just a vendor. Your sucess is the key.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <FiTarget className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-black'} group-hover:text-cyan-600 transition-colors`}>Results-Focused</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Every solution we deliver is designed to provide measurable business value and ROI.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <FiTrendingUp className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-black'} group-hover:text-cyan-600 transition-colors`}>Innovation-Driven</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                We stay at the forefront of technology to bring you the most effective solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className={`${isDarkMode ? 'bg-neutral-800' : 'bg-gray-50'} rounded-lg p-12 mb-16`}>
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Why Choose Lanstar Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Expertise Across Domains</h3>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>Deep knowledge in data science and machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>Full-stack development capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>Certified Zoho and Odoo implementation expertise</span>
                </li>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>Cloud and DevOps experience</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Proven Track Record</h3>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>Successful projects across multiple industries</span>
                </li>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>High client satisfaction and retention rates</span>
                </li>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>Measurable ROI for all implementations</span>
                </li>
                <li className="flex items-start">
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>✓</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Ready to Work Together?</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
            Let's discuss how we can help transform your business with the right technology solutions
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-block text-lg"
            >
              Get In Touch
            </Link>
            {/* <Link 
              to="/services" 
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors inline-block text-lg"
            >
              View Our Services
            </Link> */}
          </div>
        </div>
      </div>
  )
}

export default About