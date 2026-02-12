import React from 'react';
import { ArrowRight, Users, Ticket, Send, Bluetooth, BarChart3, Store } from 'lucide-react';
import { BrowserFrame } from '../components/BrowserFrame';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                <span>New 2.0 Release</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Powerful POS for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Modern Cafés & Retail
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                The all-in-one POS built for speed, reliability, and growth. Manage orders, inventory, and staff in one beautiful interface designed for high-volume businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-yellow hover:bg-brand-yellowHover text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Start Free Trial
                </button>
                <button className="bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                  Schedule Demo
                </button>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-3">
                  <img src="https://picsum.photos/seed/user1/64/64" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://picsum.photos/seed/user2/64/64" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://picsum.photos/seed/user3/64/64" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  Trusted by 500+ local businesses
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50"></div>
              <BrowserFrame className="relative z-10 transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/pos_dashboard/1200/800" 
                  alt="Leo's POS Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Turn walk-ins into regulars</h2>
            <p className="text-lg text-slate-600">Build lasting relationships with a loyalty program that runs itself. No extra cards, no complicated sign-ups.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="h-6 w-6 text-blue-600" />, 
                title: 'Rich Customer Profiles', 
                desc: 'See purchase history, favorite items, and average spend at a glance. Personalize service like never before.'
              },
              { 
                icon: <Ticket className="h-6 w-6 text-amber-500" />, 
                title: 'Flexible Points System', 
                desc: 'Configure points per dollar or per visit. Let customers redeem rewards directly at the register seamlessly.'
              },
              { 
                icon: <Send className="h-6 w-6 text-emerald-500" />, 
                title: 'Automated Marketing', 
                desc: 'Bring them back with "We miss you" offers or birthday treats sent automatically via email or SMS.'
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.desc}</p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center text-sm">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <BrowserFrame>
                 <img src="https://picsum.photos/seed/analytics/1000/700" alt="Analytics Dashboard" className="w-full" />
               </BrowserFrame>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
                Multi-Branch Analytics
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">One dashboard for your entire empire.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Whether you have one location or fifty, see your entire business performance in real-time. Compare branches, identify trends, and spot opportunities without spreadsheets.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Centralized Reporting', desc: 'Aggregate sales data across all locations instantly, accessible from the cloud.' },
                  { title: 'Staff Performance', desc: 'Compare sales per employee across different shifts and locations to optimize scheduling.' },
                  { title: 'Export & Integrate', desc: 'Seamlessly push financial data to QuickBooks, Xero, or Excel for your accountant.' }
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <div className="mr-4 mt-1">
                       <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                         {i + 1}
                       </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* Hardware Section */}
       <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl">
             <div className="grid grid-cols-1 md:grid-cols-2 p-12 lg:p-16 gap-12 items-center">
               <div className="text-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <Bluetooth className="h-6 w-6 text-blue-400" />
                    <span className="text-blue-200 font-medium tracking-wide uppercase text-sm">Hardware Integration</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect wirelessly with Bluetooth Thermal Printing</h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Forget messy cables. Our POS connects instantly to a wide range of Bluetooth thermal printers. Print receipts, kitchen tickets, and order summaries directly from your tablet with zero latency.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <Store className="h-6 w-6 text-brand-yellow mb-3" />
                        <h4 className="font-bold mb-1">Multi-branch</h4>
                        <p className="text-sm text-slate-300">Sync menu items across all stores instantly.</p>
                     </div>
                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <BarChart3 className="h-6 w-6 text-brand-yellow mb-3" />
                        <h4 className="font-bold mb-1">Live Sales</h4>
                        <p className="text-sm text-slate-300">Watch transactions happen in real-time.</p>
                     </div>
                  </div>
               </div>
               <div className="relative h-full min-h-[300px] flex items-center justify-center">
                 <div className="bg-white p-2 rounded-xl shadow-xl transform rotate-3 max-w-sm">
                   <img src="https://picsum.photos/seed/receipt_printer/600/600" alt="Printer" className="rounded-lg" />
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to streamline your operations?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get access to all these features and more. Join thousands of cafés growing with Leo's POS today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-yellow hover:bg-brand-yellowHover text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
              Start Your Free Trial
            </button>
            <button className="bg-transparent border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg">
              Talk to Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-400">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </div>
  );
};