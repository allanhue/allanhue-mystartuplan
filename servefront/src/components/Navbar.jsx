import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Disclosure } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = [
    { name: 'Popular', href: '/popular' },
    { name: 'Puntaje', href: '/rating' },
    { name: 'Acción', href: '/action' },
    { name: 'Aventura', href: '/adventure' },
    { name: 'Comedia', href: '/comedy' },
    { name: 'Crimen', href: '/crime' },
    { name: 'Familia', href: '/family' },
  ];

  return (
    <Disclosure as="nav" className="bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-red-600 text-2xl font-bold">
              LanPrime
            </Link>
            <div className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white">
              <SearchIcon className="h-6 w-6" />
            </button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile">
                  <button className="text-white hover:text-gray-300">
                    Profile
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <button className="text-white hover:text-gray-300">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;