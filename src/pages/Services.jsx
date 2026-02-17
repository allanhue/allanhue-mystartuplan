import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineCog6Tooth,
  HiOutlineCloud,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck
} from 'react-icons/hi2';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const serviceCategories = [
  {
    id: 1,
    name: 'Data Science & Machine Learning',
    icon: <HiOutlineChartBar className="w-12 h-12" />,
    description: 'Transform your data into actionable insights with advanced analytics and ML models',
    color: 'cyan',
    features: [
      'Predictive analytics & forecasting',
      'Machine learning model development',
      'Data visualization & business intelligence',
      'Statistical analysis & reporting',
      'Custom Python/R solutions',
      'AI model deployment & optimization',
    ],
    // price: 'Starting from $199/hour',
    // link: '/payment?service=Data%20Science&amount=199',
  },
  {
    id: 2,
    name: 'Full-Stack  Development',
    icon: <HiOutlineCodeBracket className="w-12 h-12" />,
    description: 'Custom  applications built with modern technologies and best practices',
    color: 'teal',
    features: [
      'React, Vue, Angular expertise',
      'Node.js, Python, PHP backends',
      'Database design & optimization',
      'REST API development',
      'Progressive web apps (PWA)',
      'Performance optimization & security',
    ],
    // price: 'Starting from $150/hour',
    // link: '/payment?service=Web%20Development&amount=150',
  },
  // {
  //   id: 3,
  //   name: 'Mobile App Development',
  //   icon: <HiOutlineCodeBracket className="w-12 h-12" />,
  //   description: 'Native and cross-platform mobile applications for iOS and Android',
  //   color: 'blue',
  //   features: [
  //     'React Native development',
  //     'Flutter applications',
  //     'Native iOS/Android development',
  //     'Mobile UI/UX design',
  //     'App store optimization',
  //     'Real-time notifications & sync',
  //   ],
  //   // price: 'Starting from $160/hour',
  //   // link: '/payment?service=Mobile%20App&amount=160',
  // },
  {
    id: 4,
    name: 'Zoho & Odoo Implementation',
    icon: <HiOutlineCog6Tooth className="w-12 h-12" />,
    description: 'Enterprise CRM/ERP solutions with custom automation and integrations',
    color: 'emerald',
    features: [
      'Zoho CRM/One implementation',
      'Odoo ERP setup & configuration / Python  Scripting',
      'Deluge scripting & customization',
      'Workflow automation',
      'Third-party API integrations',
      'Data migration & training',
    ],
    // price: 'Starting from $120/hour',
    // link: '/payment?service=Zoho%20Odoo&amount=120',
  },
  {
    id: 5,
    name: 'Cloud & DevOps Solutions',
    icon: <HiOutlineCloud className="w-12 h-12" />,
    description: 'Scalable cloud infrastructure and DevOps practices for modern applications',
    color: 'sky',
    features: [
      'AWS, Google Cloud, Azure deployment',
      'Docker & Kubernetes containerization',
      'CI/CD pipeline setup',
      'Infrastructure as Code (IaC)',
      'Server monitoring & maintenance',
      'Database migration & backup solutions',
    ],
    // price: 'Starting from $140/hour',
    // link: '/payment?service=Cloud%20DevOps&amount=140',
  },
  {
    id: 6,
    name: 'IT Consulting & Strategy',
    icon: <HiOutlineChartBar className="w-12 h-12" />,
    description: 'Strategic technology planning for digital transformation and growth',
    color: 'indigo',
    features: [
      'Technology roadmap planning',
      'Digital transformation strategy',
      'System architecture design',
      'Tech stack recommendations',
      'Cost optimization analysis',
      'Change management support',
    ],
    // price: 'Starting from $150/hour',
    // link: '/payment?service=IT%20Consulting&amount=150',
  },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black"
        style={{
          backgroundImage: "url('/Screenshot 2025-12-03 202853 space x 2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 font-medium"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
            >
              Comprehensive IT solutions designed to accelerate your business growth and operational efficiency.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Our Services Stand Out
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mt-1">
                  <HiOutlineCheck className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">Certified professionals with years of industry experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mt-1">
                  <HiOutlineCheck className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">Round-the-clock assistance when you need it most</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mt-1">
                  <HiOutlineCheck className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customized Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">Tailored services that fit your specific business needs</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mt-1">
                  <HiOutlineCheck className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600 dark:text-gray-400">Transparent pricing with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Service Portfolio
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Choose from our comprehensive range of IT services designed to meet every aspect of your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCategory(service.id)}
                className="group bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-neutral-700 hover:border-cyan-500 dark:hover:border-cyan-500 cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-cyan-50 dark:bg-neutral-700 text-cyan-600 dark:text-cyan-400 mb-5 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 transition-all group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6 space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheck className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <div className="text-sm text-cyan-500 font-semibold">
                    +{service.features.length - 3} more features
                  </div>
                </div>

                <div className="mb-6 pt-6 border-t border-gray-200 dark:border-neutral-700">
                  <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">{service.price}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 group-hover:shadow-lg"
                  >
                    Get Started
                    <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">
            What's Included in Every Service
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-md hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-cyan-50 dark:bg-neutral-700 text-cyan-600 dark:text-cyan-400 mb-4 group-hover:bg-cyan-100 transition-colors">
                <HiOutlineCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Initial Assessment</h3>
              <p className="text-gray-600 dark:text-gray-400">Free consultation to understand your business needs and current setup</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-md hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-cyan-50 dark:bg-neutral-700 text-cyan-600 dark:text-cyan-400 mb-4 group-hover:bg-cyan-100 transition-colors">
                <HiOutlineTrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Implementation</h3>
              <p className="text-gray-600 dark:text-gray-400">Professional setup and configuration by our experienced team</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-md hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-cyan-50 dark:bg-neutral-700 text-cyan-600 dark:text-cyan-400 mb-4 group-hover:bg-cyan-100 transition-colors">
                <HiOutlineShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ongoing Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Continuous monitoring, updates, and support for optimal performance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-cyan-500 via-teal-500 to-teal-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Elevate Your IT Infrastructure?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 mb-10"
            >
              Let's find the perfect solution for your business. Contact our team today for a free consultation.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
