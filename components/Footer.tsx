import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-navy p-1.5 rounded-md">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-brand-navy">Leo's POS</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering cafés and retail businesses with modern, reliable, and beautiful point of sale technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/features" className="hover:text-brand-blue">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-blue">Pricing</Link></li>
              <li><a href="#" className="hover:text-brand-blue">Hardware</a></li>
              <li><a href="#" className="hover:text-brand-blue">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-blue">API Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-brand-blue">About Us</Link></li>
              <li><a href="#" className="hover:text-brand-blue">Careers</a></li>
              <li><a href="#" className="hover:text-brand-blue">Blog</a></li>
              <li><a href="#" className="hover:text-brand-blue">Press</a></li>
              <li><a href="#" className="hover:text-brand-blue">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/support" className="hover:text-brand-blue">Help Center</Link></li>
              <li><a href="#" className="hover:text-brand-blue">System Status</a></li>
              <li><a href="#" className="hover:text-brand-blue">Security</a></li>
              <li><Link to="/terms" className="hover:text-brand-blue">Terms of Use</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-blue">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Leo's Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <Link to="/privacy" className="hover:text-slate-800">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-slate-800">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};