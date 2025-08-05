import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import ApiService from '../services/api';

const Profile = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Example: Fetch additional profile data from API if needed
    const fetchProfile = async () => {
      setProfileData({ email: user?.email });
    };
    fetchProfile();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <h1 className="text-4xl font-bold text-black cursor-pointer">
              Lanstar Solutions
            </h1>
          </Link>
          {user?.email ? (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <button className="text-black hover:text-primary-600 transition">
                  My Profile
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg cursor-pointer transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <button className="text-black hover:text-primary-600 transition">
                  Sign In
                </button>
              </Link>
              <Link to="/auth">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg cursor-pointer transition">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
        {/* Profile Content */}
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Welcome, {profileData?.email || 'Guest'}
          </h2>
          <p className="text-gray-600 mb-4">
            This is your profile page. You can manage your account here.
          </p>
          {/* Example: Display more profile info from API */}
          {/* {profileData && (
            <div className="mt-4">
              <div className="font-semibold">Name: {profileData.name}</div>
              <div className="font-semibold">Company: {profileData.company}</div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;