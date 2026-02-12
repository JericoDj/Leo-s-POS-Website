import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="pt-24 pb-12 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Pricing Plans for Every Business
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Transparent pricing that scales with your growth. Start your 14-day free trial today.
        </p>
        
        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm font-semibold ${!annual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)}
            className="relative w-16 h-8 bg-blue-600 rounded-full transition-colors focus:outline-none"
          >
            <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform ${annual ? 'translate-x-8' : ''}`}></div>
          </button>
          <span className={`text-sm font-semibold ${annual ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">Starter</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">${annual ? '29' : '39'}</span>
              <span className="text-slate-500">/month</span>
            </div>
            <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
              Essential tools for small shops and new boutiques.
            </p>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Start 14-Day Free Trial
            </button>
            <ul className="mt-8 space-y-4 text-sm text-slate-600">
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> 1 Business Location</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> 1 Register Device</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Basic Inventory Management</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Standard Sales Reporting</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Email Support</li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-500 relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full shadow-sm">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Professional</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">${annual ? '79' : '99'}</span>
              <span className="text-slate-500">/month</span>
            </div>
            <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
              Advanced management for growing retail chains and busy restaurants.
            </p>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
              Start 14-Day Free Trial
            </button>
            <ul className="mt-8 space-y-4 text-sm text-slate-600">
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Up to 5 Registers</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Multi-store Management</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Advanced Visual Analytics</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Customer Loyalty System</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Staff Roles & Permissions</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> 24/7 Priority Support</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Inventory Alerts & Automation</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">Enterprise</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">Custom</span>
            </div>
            <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
              Full-scale solutions for large volume enterprises and franchises.
            </p>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            <ul className="mt-8 space-y-4 text-sm text-slate-600">
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Unlimited Locations & Registers</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Custom API Integrations</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> Dedicated Account Manager</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> On-site Training & Setup</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> SSO & Advanced Security</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-blue-500 mr-2" /> White-label Options</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <h4 className="text-lg font-bold text-slate-900 mb-2">Need a deep dive?</h4>
          <p className="text-slate-600 mb-4">Compare all 150+ features in our comprehensive plan breakdown.</p>
          <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center">
             View detailed comparison table <span className="ml-1">→</span>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: 'Is there a long-term contract?', a: 'No. Leo\'s POS is strictly month-to-month. You can cancel at any time without penalty.' },
              { q: 'Does the hardware cost extra?', a: 'Yes, hardware is sold separately. You can buy our compatible hardware kits or use your own supported iPads and printers.' },
              { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade your plan instantly from your dashboard.' },
              { q: 'What happens after my free trial?', a: 'If you love Leo\'s POS, just enter your payment details to continue. If not, your account will simply expire—no charges applied.' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                 <h4 className="font-bold text-slate-900 flex items-start">
                   <HelpCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                   {item.q}
                 </h4>
                 <p className="text-slate-600 text-sm leading-relaxed pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};