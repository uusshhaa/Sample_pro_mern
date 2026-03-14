import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 text-gray-100 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-indigo-500" />
              <span className="font-bold text-2xl text-white">Justice Connect</span>
            </div>
            <p className="text-gray-300 font-medium text-sm leading-relaxed drop-shadow-sm">
              Empowering victims of abuse through secure reporting, immediate emergency assistance, and comprehensive legal awareness based on the Protection of Women from Domestic Violence Act (PWDVA), 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 font-medium hover:text-white transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link to="/awareness" className="text-gray-300 font-medium hover:text-white transition-colors duration-300 text-sm">Legal Awareness</Link></li>
              <li><Link to="/legal-rights" className="text-gray-300 font-medium hover:text-white transition-colors duration-300 text-sm">Know Your Rights</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 font-medium hover:text-white transition-colors duration-300 text-sm">Landmark Judgments</Link></li>
              <li><Link to="/file-complaint" className="text-indigo-300 font-bold hover:text-white transition-colors duration-300 text-sm drop-shadow-sm">File a Report</Link></li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Emergency Support</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">Police (Emergency)</p>
                  <p className="text-red-400 font-bold text-lg">100</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">Women's Helpline</p>
                  <p className="text-red-400 font-bold text-lg">1091</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">Domestic Abuse Helpline</p>
                  <p className="text-red-400 font-bold text-lg">181</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-gray-500" />
                <a href="mailto:support@justiceconnect.org" className="hover:text-white transition-colors">support@justiceconnect.org</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>New Delhi, India (Headquarters)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 font-medium text-sm text-center md:text-left drop-shadow-sm">
            &copy; {new Date().getFullYear()} Justice Connect. All rights reserved. Your privacy and safety are our priority.
          </p>
          <div className="flex gap-4 text-sm font-medium text-gray-300 drop-shadow-sm">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Safety Exit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
