import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { FiMenu, FiX, FiUser, FiLogIn, FiLogOut, FiSun, FiMoon } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../theme/ThemeProvider';

export default function Navbar() {
  const authContext = UserAuth() || {};
  const user = authContext.user || null;
  const logOut = authContext.logOut || (() => {});
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Preferences', path: '/preferences' },
  ];

  return (
    <nav 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent tracking-tight">
                Lanstar
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 no-underline ${
                  scrolled
                    ? 'text-neutral-700 hover:text-cyan-500 dark:text-neutral-300 dark:hover:text-cyan-400'
                    : 'text-neutral-200 hover:text-white dark:text-neutral-300 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/profile"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 no-underline ${
                    scrolled
                      ? 'text-neutral-700 hover:text-cyan-500 dark:text-neutral-300 dark:hover:text-cyan-400'
                      : 'text-neutral-200 hover:text-white dark:text-neutral-300 dark:hover:text-white'
                  }`}
                >
                  <FiUser className="w-4 h-4 inline mr-1.5" />
                  Profile
                </Link>
                <button
                  onClick={logOut}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? 'text-neutral-700 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-400'
                      : 'text-neutral-200 hover:text-white dark:text-neutral-300 dark:hover:text-white'
                  }`}
                >
                  <FiLogOut className="w-4 h-4 inline mr-1.5" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-teal-500 dark:hover:bg-teal-600 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 no-underline"
              >
                <FiLogIn className="w-4 h-4 mr-1.5" />
                Sign Up
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 ${
                scrolled
                  ? 'text-neutral-700 hover:text-cyan-500 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
                  : 'text-neutral-200 hover:text-white dark:text-neutral-300 dark:hover:text-white'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
          scrolled ? 'bg-white dark:bg-neutral-900' : 'bg-black/95 dark:bg-neutral-900/95 backdrop-blur-md'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:text-white hover:bg-white/10 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-200 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:text-white hover:bg-white/10 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-200 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  logOut();
                  setMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/20 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors duration-200 no-underline text-center"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}