import React from 'react';
import { Search, Rocket, CreditCard, Box, Printer, UserCircle, BarChart2, MessageCircle, Mail, Phone } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Search */}
      <div className="bg-white border-b border-slate-200 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
           <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How can we help you today?</h1>
           <p className="text-slate-600 mb-8">Search our knowledge base for answers, guides, and troubleshooting tips.</p>
           <div className="relative max-w-xl mx-auto">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
               <Search className="h-5 w-5 text-slate-400" />
             </div>
             <input 
               type="text" 
               className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white shadow-sm"
               placeholder="Search articles, error codes, or topics..." 
             />
           </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-xl font-bold text-slate-900 mb-8">Browse by Topic</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Rocket className="h-6 w-6 text-blue-500" />, title: 'Getting Started', desc: 'Account setup, software installation, and initial configuration.' },
            { icon: <CreditCard className="h-6 w-6 text-blue-500" />, title: 'Sales & Payments', desc: 'Processing transactions, refunds, discounts, and closing shifts.' },
            { icon: <Box className="h-6 w-6 text-blue-500" />, title: 'Inventory', desc: 'Managing stock levels, suppliers, purchase orders, and audits.' },
            { icon: <Printer className="h-6 w-6 text-blue-500" />, title: 'Hardware', desc: 'Printers, card readers, scanners, and troubleshooting devices.' },
            { icon: <UserCircle className="h-6 w-6 text-blue-500" />, title: 'Account & Billing', desc: 'Subscription management, invoices, user roles, and permissions.' },
            { icon: <BarChart2 className="h-6 w-6 text-blue-500" />, title: 'Reports & Analytics', desc: 'Understanding your data, exporting sales reports, and insights.' },
          ].map((topic, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                {topic.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{topic.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-bold text-slate-900 flex items-center">⭐ Popular Articles</h3>
             <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">View all 142 articles →</a>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
             {[
               { title: 'How do I reset my staff PIN?', updated: '2 days ago' },
               { title: 'Connecting your receipt printer via Bluetooth', updated: '1 week ago' },
               { title: 'Troubleshooting card reader connection issues', updated: '3 days ago' },
               { title: 'Exporting monthly sales tax reports', updated: 'Yesterday' },
               { title: 'Adding new inventory items in bulk', updated: '2 weeks ago' },
               { title: 'Understanding payment processing fees', updated: '5 days ago' },
             ].map((article, i) => (
               <a key={i} href="#" className="group block border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                 <h4 className="text-slate-900 font-medium group-hover:text-blue-600 transition-colors mb-1">{article.title}</h4>
                 <p className="text-xs text-slate-400">Updated {article.updated}</p>
               </a>
             ))}
           </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-slate-400 mb-10">Our support team is available 24/7 to help you with any issues you might be facing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
               <MessageCircle className="h-5 w-5 mr-2" /> Chat with Us
             </button>
             <button className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-slate-700">
               <Mail className="h-5 w-5 mr-2" /> Email Support
             </button>
             <button className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-slate-700">
               <Phone className="h-5 w-5 mr-2" /> +1 (800) 555-0199
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};