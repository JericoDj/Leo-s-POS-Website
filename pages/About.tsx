import React from 'react';
import { BrowserFrame } from '../components/BrowserFrame';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
             Building the Future of Retail
           </h1>
           <p className="text-xl text-slate-400">
             We're on a mission to empower independent business owners with the technology they need to compete with the giants.
           </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <img 
               src="https://picsum.photos/seed/founder/800/1000" 
               alt="Founder" 
               className="rounded-2xl shadow-2xl"
             />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">It started with a coffee shop.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In 2018, our founder Leo sat in his family's struggling café, watching them wrestle with a clunky, legacy POS system that crashed during the morning rush. He realized that small businesses were being held back by outdated technology.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              He gathered a small team of engineers and designers to build something different: a POS that was fast, intuitive, and ran on the cloud. What started as a solution for one shop has grown into a platform powering thousands of businesses worldwide.
            </p>
            <p className="text-lg text-slate-600 font-medium">
              "We believe that great software shouldn't just be for the big chains. It should be accessible to everyone."
            </p>
            <div className="mt-4 text-slate-900 font-bold">— Leo Mitchell, Founder & CEO</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-white rounded-2xl shadow-sm">
                 <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">10,000+</div>
                 <div className="text-slate-600 font-medium">Active Locations</div>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm">
                 <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">$2B+</div>
                 <div className="text-slate-600 font-medium">Processed Annually</div>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm">
                 <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">99.99%</div>
                 <div className="text-slate-600 font-medium">Uptime Record</div>
              </div>
           </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Meet the Team</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            A diverse group of former baristas, retail managers, and world-class engineers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { name: 'Leo Mitchell', role: 'CEO & Founder', img: 'leader1' },
             { name: 'Sarah Chen', role: 'CTO', img: 'leader2' },
             { name: 'Marcus Johnson', role: 'Head of Design', img: 'leader3' },
             { name: 'Emily Davis', role: 'VP of Customer Success', img: 'leader4' },
           ].map((leader, i) => (
             <div key={i} className="group text-center">
               <div className="relative mb-6 overflow-hidden rounded-2xl mx-auto aspect-[3/4]">
                 <img 
                   src={`https://picsum.photos/seed/${leader.img}/400/500`} 
                   alt={leader.name} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
               <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
               <p className="text-blue-600">{leader.role}</p>
             </div>
           ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Join our mission</h2>
            <p className="text-slate-400 mb-8">
              We're always looking for talented individuals to help us redefine the point of sale industry.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              View Open Positions
            </button>
         </div>
      </section>
    </div>
  );
};