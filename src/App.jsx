import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import DataScience from './pages/DataScience'
import SoftwareDev from './pages/SoftwareDev'
import ZohoOdoo from './pages/ZohoOdoo'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar';


const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
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
            {/* ...add login, signup, profile routes if needed... */}
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

export default App;
 