import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

export default function Navbar() {
    const authContext = UserAuth() || {};
    const user = authContext.user || null;
    const logOut = authContext.logOut || (() => {});
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
                    Lanstar Solutions
                </Link>
                <button
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to="/" className="hover:text-gray-300 font-medium">Home</Link>
                    <Link to="/services" className="hover:text-gray-300 font-medium">Services</Link>
                    <Link to="/about" className="hover:text-gray-300 font-medium">About</Link>
                    <Link to="/contact" className="hover:text-gray-300 font-medium">Contact</Link>
                    {user ? (
                        <>
                            <Link to="/profile" className="hover:text-gray-300 font-medium">Profile</Link>
                            <button onClick={logOut} className="hover:text-gray-300 font-medium">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-gray-300 font-medium">Login</Link>
                            <Link to="/signup" className="hover:text-gray-300 font-medium">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
            {/* Mobile menu */}
            <div
                className={`md:hidden bg-black px-6 py-4 space-y-2 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}
                aria-expanded={menuOpen}
            >
                <Link to="/" className="block hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/services" className="block hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link to="/about" className="block hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/contact" className="block hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
                {user ? (
                    <>
                        <Link to="/profile" className="block hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Profile</Link>
                        <button onClick={() => { logOut(); setMenuOpen(false); }} className="block hover:text-gray-300 font-medium">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="block hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Login</Link>
                        <Link to="/signup" className="block hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}