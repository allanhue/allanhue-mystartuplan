import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import DataScience from './pages/DataScience'
import SoftwareDev from './pages/SoftwareDev'
import ZohoOdoo from './pages/ZohoOdoo'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        {/* Professional Navigation Header */}
        <header className="bg-black text-white shadow-lg">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Lanstar Solutions
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-gray-300 transition-colors font-medium">
                  Home
                </Link>
                <Link to="/services" className="hover:text-gray-300 transition-colors font-medium">
                  Services
                </Link>
                <Link to="/about" className="hover:text-gray-300 transition-colors font-medium">
                  About
                </Link>
                <Link to="/contact" className="hover:text-gray-300 transition-colors font-medium">
                  Contact
                </Link>
              </div>
              <div className="md:hidden">
                <button className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/software-development" element={<SoftwareDev />} />
            <Route path="/zoho-odoo" element={<ZohoOdoo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-8 mt-16">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Lanstar Solutions. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Empowering businesses with cutting-edge technology solutions</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}

export default App
