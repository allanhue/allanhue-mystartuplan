import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import supabase from '../superbaseClient';
import { 
  FiUser, 
  FiMail, 
  FiCalendar, 
  FiEdit3, 
  FiSave, 
  FiX, 
  FiLogOut, 
  FiShield, 
  FiCheckCircle,
  FiSettings,
  FiBell,
  FiHeart,
  FiStar,
  FiTrendingUp
} from 'react-icons/fi';

const Profile = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User',
    email: user?.email || '',
    phone: user?.user_metadata?.phone || '+254 731 430 273',
    company: user?.user_metadata?.company || 'Lanstar Solutions',
    role: user?.user_metadata?.role || 'IT Professional',
    bio: user?.user_metadata?.bio || 'Passionate about delivering cutting-edge technology solutions to transform businesses.',
    location: user?.user_metadata?.location || 'Nairobi, Kenya',
    joinDate: user?.created_at ? new Date(user.created_at).getFullYear().toString() : '2024'
  });
  const [tempData, setTempData] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const handleEdit = () => {
    setTempData({ ...profileData });
    setIsEditing(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Update user metadata in Supabase
      const { error } = await supabase.auth.updateUser({
        data: {
          full_name: tempData.displayName,
          company: tempData.company,
          role: tempData.role,
          bio: tempData.bio,
          location: tempData.location,
          phone: tempData.phone
        }
      });

      if (error) {
        console.error('Error updating profile:', error);
        throw error;
      }

      setProfileData({ ...tempData });
      setIsEditing(false);
      
      // Show success message
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempData({});
  };

  const handleInputChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const stats = [
    { label: 'Projects Completed', value: '10', icon: FiCheckCircle, color: 'text-green-400' },
    { label: 'Client Satisfaction', value: '98%', icon: FiStar, color: 'text-yellow-400' },
    { label: 'Years Experience', value: '2+', icon: FiTrendingUp, color: 'text-blue-400' },
    { label: 'Technologies', value: '10+', icon: FiHeart, color: 'text-pink-400' }
  ];

  const recentActivities = [
    { action: 'Project Quote Sent', time: '2 hours ago', type: 'quote' },
    { action: 'Client Meeting Scheduled', time: '1 day ago', type: 'meeting' },
    { action: 'Service Inquiry Received', time: '3 days ago', type: 'inquiry' },
    { action: 'Project Milestone Completed', time: '1 week ago', type: 'milestone' }
  ];

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome Back, {profileData.displayName}
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Manage your profile, track your progress, and stay updated with your IT solutions journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass-panel p-6 rounded-2xl">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <FiUser className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{profileData.displayName}</h2>
                <p className="text-neutral-300">{profileData.role}</p>
                <p className="text-sm text-neutral-400">{profileData.company}</p>
              </div>

              {/* Profile Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-neutral-300">
                  <FiMail className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <FiCalendar className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Member since {profileData.joinDate}</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <FiShield className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Verified Account</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FiEdit3 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      <FiSave className="w-4 h-4" />
                      <span>{saving ? 'Saving...' : 'Save Changes'}</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="w-full bg-neutral-600 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <FiX className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
                
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <FiLogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-panel p-4 rounded-xl text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Profile Form */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <FiUser className="w-5 h-5 text-cyan-400" />
                <span>Profile Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    value={isEditing ? tempData.displayName : profileData.displayName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={isEditing ? tempData.phone : profileData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={isEditing ? tempData.company : profileData.company}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={isEditing ? tempData.location : profileData.location}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    rows="3"
                    value={isEditing ? tempData.bio : profileData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <FiBell className="w-5 h-5 text-purple-400" />
                <span>Recent Activities</span>
              </h3>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700"
                  >
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-sm text-neutral-400">{activity.time}</p>
                    </div>
                    <span className="text-xs text-neutral-500 uppercase tracking-wide">{activity.type}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Logout Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel p-6 rounded-2xl max-w-md w-full"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Confirm Sign Out</h3>
              <p className="text-neutral-300 mb-6">
                Are you sure you want to sign out? You'll need to sign in again to access your profile.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleLogout}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Sign Out
                </button>
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 bg-neutral-600 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;