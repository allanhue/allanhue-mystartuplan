import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './theme/ThemeProvider';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './components/Auth';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import WhatsappWidget from './components/whatsapp';
import Payment from './pages/payment';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-700 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  const location = useLocation();
  const { theme } = useTheme();

  console.log('App rendered, theme:', theme); // debug log

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
        <Navbar />
        
        {/* Main Content */}
        <main className="min-h-[calc(100vh-64px)]">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
              
              {/* Protected Profile Route */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              
              {/* 404 Page */}
              <Route path="*" element={
                <div className="container mx-auto px-4 py-16 text-center">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 dark:text-gray-300">The page you're looking for doesn't exist or has been moved.</p>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        {/* WhatsApp Widget */}
        <WhatsappWidget />
        
        {/* Footer */}
        <footer className="bg-neutral-900 dark:bg-black border-t border-neutral-800 py-12 mt-20 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* About Column */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Lanstar Solutions</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                 Efficiency redefined.
                </p>
              </div>

              {/* Quick Links Column */}
              <div>
                <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="text-base font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:centralhype9@gmail.com" className="flex items-center text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                      <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span>centralhype9@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+254731430273" className="flex items-center text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                      <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      <span>+254 731 430 273</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media Column */}
              <div>
                <h4 className="text-base font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://twitter.com/lanstar_solutions" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Lanstar Solutions. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;

