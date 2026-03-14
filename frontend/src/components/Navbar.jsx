import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Shield, AlertTriangle, LogOut, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const triggerSOS = () => {
    // Simplified SOS logic for now
    alert('SOS Triggered! In a real emergency, dialing 100 or 1091... Location could be sent.');
  };

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-indigo-300" />
              <span className="font-extrabold text-2xl text-white tracking-wide">Justice Connect</span>
            </Link>
          </div>

          {/* Nav Links Section */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link to="/" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md font-semibold transition-all duration-300">Home</Link>
            <Link to="/awareness" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md font-semibold transition-all duration-300">Awareness</Link>
            <Link to="/legal-rights" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md font-semibold transition-all duration-300">Legal Rights</Link>
            <Link to="/case-studies" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md font-semibold transition-all duration-300">Case Studies</Link>
            <Link to="/file-complaint" className="text-red-400 hover:text-red-300 px-3 py-2 rounded-md font-bold transition-all duration-300">File Complaint</Link>

            {user ? (
              <>
                {user.role === 'admin' && (
                   <Link to="/admin" className="text-yellow-300 hover:text-yellow-100 px-3 py-2 rounded-md font-bold transition-all duration-300">Admin Panel</Link>
                )}
                <Link to="/dashboard" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md font-semibold transition-all duration-300">Dashboard</Link>
                <div className="flex items-center gap-2 ml-4 relative group cursor-pointer">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <UserIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">{user.name}</span>
                  {/* Dropdown would go here, simplified to logout btn */}
                  <button onClick={handleLogout} className="ml-2 flex items-center gap-1 text-sm text-red-400 hover:text-red-300">
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2 ml-4">
                <Link to="/login" className="text-white hover:bg-white/20 px-4 py-2 rounded-md font-semibold transition-all duration-300">Login</Link>
                <Link to="/register" className="bg-white text-purple-900 hover:bg-gray-100 px-4 py-2 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Sign Up</Link>
              </div>
            )}
            
            {/* SOS Button */}
            <button 
              onClick={triggerSOS}
              className="ml-4 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:bg-red-700 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <AlertTriangle className="h-5 w-5" />
              SOS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
