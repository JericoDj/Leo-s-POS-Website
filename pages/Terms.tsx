import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 md:p-16">
          <div className="mb-10 text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Legal Documentation
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Terms of Use</h1>
            <p className="text-slate-500">Effective Date: October 26, 2023</p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600">
            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">1. Introduction</h3>
            <p className="mb-4">
              Welcome to Leo's POS ("Service", "we", "us", "our"). By accessing or using our point-of-sale software, website, and related services, you ("User", "you") agree to be bound by these Terms of Use ("Terms"). Please read them carefully.
            </p>
            <p className="mb-4">
              If you do not agree to these Terms, you must not access or use our Service. We may update these Terms from time to time. The "Effective Date" at the top of this page indicates when the latest changes were made.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">2. Account Registration & Security</h3>
            <p className="mb-4">
              To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>You are responsible for safeguarding your password.</li>
              <li>You agree not to disclose your password to any third party.</li>
              <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
            </ul>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">3. Subscription Fees & Payments</h3>
            <p className="mb-4">
              <strong>Subscription Model:</strong> The Service is billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
            </p>
            <p className="mb-4 bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm">
              <strong>Note:</strong> Your Subscription will automatically renew under the exact same conditions unless you cancel it or we cancel it.
            </p>
            <p className="mb-4">
              <strong>Price Changes:</strong> Leo's POS, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">4. License Grant & Restrictions</h3>
            <p className="mb-4">
              Subject to your compliance with these Terms, Leo's POS grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for your internal business operations.
            </p>
            <p className="mb-2">You shall not:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>License, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Service.</li>
              <li>Modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the Service.</li>
              <li>Access the Service in order to build a similar or competitive website, product, or service.</li>
            </ul>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">5. Data Privacy & Ownership</h3>
            <p className="mb-4">
              You retain all rights, title, and interest in and to all data you input into the Service ("User Data"). You grant Leo's POS a worldwide, non-exclusive, royalty-free license to use, reproduce, electronically distribute, transmit, have transmitted, perform, display, store, archive, and make derivative works of your User Data solely in order to provide the Service to you.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">6. Termination</h3>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">7. Contact Information</h3>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none space-y-2 mb-4 font-medium text-slate-800">
              <li>Email: legal@leospos.com</li>
              <li>Address: 123 Market Street, Suite 400, San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};