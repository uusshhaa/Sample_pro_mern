import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Awareness from './pages/Awareness';
import Dashboard from './pages/Dashboard';
import FileComplaint from './pages/FileComplaint';
import LegalRights from './pages/LegalRights';
import CaseStudies from './pages/CaseStudies';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div 
          className="min-h-screen text-white flex flex-col relative transition-colors duration-500"
          style={{ background: 'linear-gradient(135deg, #4B1D6B, #6A2C8F, #8E44AD)' }}
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/awareness" element={<Awareness />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/file-complaint" element={<FileComplaint />} />
              <Route path="/legal-rights" element={<LegalRights />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
