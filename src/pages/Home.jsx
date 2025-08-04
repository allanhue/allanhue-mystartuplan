import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaChartLine, FaCode, FaCogs, FaLaptopCode, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Businesses with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
                Innovative Tech Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              We specialize in Data Science, Software Development, and Business Automation to drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center"
              >
                Get Free Consultation
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 font-semibold mb-2 inline-block">OUR SERVICES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Solutions That Drive Success</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Data Science */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                <FaChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Transform your raw data into actionable insights with our advanced analytics and machine learning solutions.
              </p>
              <Link
                to="/data-science"
                className="text-indigo-600 font-semibold inline-flex items-center hover:text-indigo-700 group transition-colors"
              >
                Learn more
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Software Development */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                <FaCode className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Development</h3>
              <p className="text-gray-600 mb-6">
                Custom software solutions tailored to your business needs using the latest technologies.
              </p>
              <Link
                to="/software-development"
                className="text-indigo-600 font-semibold inline-flex items-center hover:text-indigo-700 group transition-colors"
              >
                Learn more
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Zoho/Odoo */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                <FaCogs className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zoho/Odoo Implementation</h3>
              <p className="text-gray-600 mb-6">
                Streamline your business processes with our expert Zoho and Odoo implementation services.
              </p>
              <Link
                to="/zoho-odoo"
                className="text-indigo-600 font-semibold inline-flex items-center hover:text-indigo-700 group transition-colors"
              >
                Learn more
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* IT Support */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                <FaLaptopCode className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT support services to keep your business running smoothly 24/7.
              </p>
              <Link
                to="/it-support"
                className="text-indigo-600 font-semibold inline-flex items-center hover:text-indigo-700 group transition-colors"
              >
                Learn more
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 font-semibold mb-2 inline-block">WHY CHOOSE US</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Trusted Technology Partner</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our team of certified professionals brings years of experience and expertise to every project.'
              },
              {
                title: 'Client-Centric Approach',
                description: 'We prioritize your business goals and work closely with you to achieve outstanding results.'
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'We leverage the latest technologies and methodologies to deliver innovative solutions.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;