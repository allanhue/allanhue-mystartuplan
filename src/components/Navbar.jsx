import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Disclosure } from '@headlessui/react';
import { 
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      icon: <HomeIcon className="w-5 h-5 mr-2" />
    },
    { 
      name: 'About', 
      href: '/about',
      icon: <InformationCircleIcon className="w-5 h-5 mr-2" />
    },
    { 
      name: 'Services', 
      href: '/services',
      icon: <BriefcaseIcon className="w-5 h-5 mr-2" />,
      dropdown: [
        { 
          name: 'Web Development', 
          href: '/services/web-development',
          description: 'Custom websites and web applications'
        },
        { 
          name: 'Mobile Apps', 
          href: '/services/mobile-apps',
          description: 'iOS and Android applications'
        },
        { 
          name: 'Cloud Solutions', 
          href: '/services/cloud',
          description: 'Cloud infrastructure and services'
        },
        { 
          name: 'AI & ML', 
          href: '/services/ai-ml',
          description: 'Artificial Intelligence solutions'
        },
        { 
          name: 'Consulting', 
          href: '/services/consulting',
          description: 'Expert technology consulting'
        }
      ]
    },
    { 
      name: 'Projects', 
      href: '/projects',
      icon: <BriefcaseIcon className="w-5 h-5 mr-2" />
    },
    { 
      name: 'Contact', 
      href: '/contact',
      icon: <EnvelopeIcon className="w-5 h-5 mr-2" />
    },
  ];

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.15,
        ease: 'easeIn'
      }
    }
  };

  return (
    <Disclosure as="nav" className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">MS</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MyStartupPlan
                  </span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navigation.map((item) => (
                  <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : null}>
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`flex items-center space-x-1 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                            isServicesOpen 
                              ? 'text-blue-600 bg-blue-50' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          <span className="flex items-center">
                            {item.icon}
                            {item.name}
                          </span>
                          <ChevronDownIcon 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isServicesOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={menuVariants}
                              className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                            >
                              <div className="p-2">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block px-4 py-3 text-sm rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                      {subItem.name}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      {subItem.description}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          location.pathname === item.href
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Right side - Search and Auth */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                
                {user ? (
                  <div className="flex items-center space-x-3">
                    <Link to="/dashboard">
                      <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        Dashboard
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <Link to="/login">
                      <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        Sign In
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                        Get Started
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-sm rounded-md transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                {user ? (
                  <div className="space-y-1">
                    <Link
                      to="/dashboard"
                      className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <Link
                      to="/login"
                      className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 text-base font-medium rounded-md mx-3 text-center transition-all duration-200"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;