import React from 'react';
import { BrowserFrame } from '../components/BrowserFrame';
import { Check } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Manage Multiple Businesses from One Place",
      desc: "Scale your operations without the headache. Leo's POS allows you to manage inventory, staff, and sales across multiple locations seamlessly. Switch between business profiles instantly and keep your categories synchronized.",
      points: [
        "Centralized Inventory: Update stock levels across all branches in real-time.",
        "Global User Roles: Assign permissions to managers that span multiple locations.",
        "Consolidated Reporting: View aggregated sales data or drill down into individual store performance."
      ],
      image: "https://picsum.photos/seed/multilocation/1000/700",
      tag: "Enterprise Ready"
    },
    {
      title: "Bluetooth Printing Integration",
      desc: "Our POS connects effortlessly to major bluetooth thermal printers. Send orders to the kitchen or print receipts at the counter without any complex wiring or network setup. Just pair and print.",
      points: [
        "Auto-Discovery Mode: Automatically detects nearby supported devices.",
        "Custom Ticket Layouts: Design kitchen tickets that your chefs can actually read.",
        "Fail-over Redundancy: If one printer jams, automatically reroute to backup."
      ],
      image: "https://picsum.photos/seed/printing/1000/700",
      tag: "Hardware",
      reverse: true
    },
    {
      title: "Advanced Sales Analytics",
      desc: "Stop guessing what sells. Our visual analytics engine processes your transaction history to reveal peak hours, top-performing staff, and customer preferences instantly.",
      points: [
        "Peak Hour Tracking: Identify your busiest hours to optimize staffing schedules.",
        "Product Mix Reports: See exactly which items drive the most profit, not just revenue.",
        "Stock Forecasting: AI-powered suggestions tell you exactly when to reorder."
      ],
      image: "https://picsum.photos/seed/analytics2/1000/700",
      tag: "Data Driven"
    },
    {
      title: "Customer Loyalty System",
      desc: "Turn first-time visitors into raving fans. Our built-in loyalty program links rewards directly to customer credit cards or phone numbers, eliminating the need for physical punch cards.",
      points: [
        "Tiered Rewards: Create VIP tiers for your highest spending customers.",
        "Digital Wallet: Customers can pre-load funds for faster checkout.",
        "Feedback Loop: Automatically request feedback via SMS after a purchase."
      ],
      image: "https://picsum.photos/seed/loyalty/1000/700",
      tag: "Growth",
      reverse: true
    },
    {
      title: "Staff Roles & Permissions",
      desc: "Secure your business with granular access controls. Decide exactly what each employee can see and do on the POS, from voiding transactions to viewing reports.",
      points: [
        "PIN Access: Quick switching between user accounts with 4-digit PINs.",
        "Audit Logs: Every void, refund, and discount is tracked to a specific user.",
        "Time Clock: Built-in clock-in/clock-out functionality for payroll export."
      ],
      image: "https://picsum.photos/seed/staff/1000/700",
      tag: "Security"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Everything you need to <br/>run your business
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From the front counter to the back office, Leo's POS gives you the tools to streamline operations and boost profitability.
          </p>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="space-y-24 py-24">
        {features.map((feature, index) => (
          <section key={index} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {feature.tag}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="space-y-4 pt-4">
                  {feature.points.map((point, i) => {
                    const [head, body] = point.split(':');
                    return (
                      <li key={i} className="flex items-start">
                        <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">
                          <strong className="font-semibold text-slate-900">{head}:</strong> {body}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <BrowserFrame className="transform transition-transform hover:scale-[1.02] duration-500">
                  <img src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
                </BrowserFrame>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-blue-600 py-20">
         <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">See these features in action</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Start your free 14-day trial today. No setup fees, no contracts.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Get Started Now
            </button>
         </div>
      </section>
    </div>
  );
};