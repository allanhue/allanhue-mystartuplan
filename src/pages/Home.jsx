import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiShield, FiZap, FiDollarSign, FiClock } from 'react-icons/fi';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const features = [
  {
    title: 'Expert Technicians',
    description: 'Our certified technicians have years of experience in handling all types of technical issues.',
    icon: <FiShield className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
  },
  {
    title: 'Fast Response',
    description: 'We offer quick response times to ensure your technical issues are resolved as soon as possible.',
    icon: <FiZap className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
  },
  {
    title: 'Affordable Pricing',
    description: 'High-quality services at competitive prices with no hidden fees.',
    icon: <FiDollarSign className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support to assist you whenever you need help.',
    icon: <FiClock className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
  },
];

const services = [
  {
    name: 'IT Support',
    description: 'Professional IT support services for businesses and individuals.',
    icon: '💻',
    path: '/services/it-support',
  },
  {
    name: 'Network Setup',
    description: 'Complete network infrastructure setup and configuration.',
    icon: '🌐',
    path: '/services/network-setup',
  },
  {
    name: 'Data Recovery',
    description: 'Expert data recovery services for all types of storage devices.',
    icon: '💾',
    path: '/services/data-recovery',
  },
  {
    name: 'Cybersecurity',
    description: 'Protect your systems from threats with our security solutions.',
    icon: '🔒',
    path: '/services/cybersecurity',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-900 dark:to-neutral-800">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMTAxMDEiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMjEuOTk5IDI4YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0ek0xMy4yOTcgMTcuMjE4YzAgMS41NTItMS4yNjEgMi44MTEtMi44MTcgMi44MTFzLTIuODE3LTEuMjU5LTIuODE3LTIuODFjMC0xLjU1MiAxLjI2MS0yLjgxMSAyLjgxNy0yLjgxMXMyLjgxNyAxLjI1OSAyLjgxNyAyLjgxek0yOS42MTcgMTcuMjE4YzAgMS41NTItMS4yNjEgMi44MTEtMi44MTcgMi44MTFzLTIuODE3LTEuMjU5LTIuODE3LTIuODFjMC0xLjU1MiAxLjI2MS0yLjgxMSAyLjgxNy0yLjgxMXMyLjgxNyAxLjI1OSAyLjgxNyAyLjgxWiIvPjwvZz48L2c+PC9zdmc+')]" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight"
            >
              Professional IT Solutions for{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Your Business
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-10 max-w-2xl mx-auto"
            >
              We provide comprehensive IT services and support to help your business thrive in the digital world.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Our Services
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-neutral-700 text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              We offer a wide range of IT services to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 dark:bg-neutral-700 flex items-center justify-center text-2xl mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      {service.description}
                    </p>
                    <Link
                      to={service.path}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Learn more
                      <FiArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white/90 mb-8"
            >
              Get in touch with our team today and let's discuss how we can help your business grow.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-neutral-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white border-2 border-white hover:bg-white/10 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;