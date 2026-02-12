import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 md:p-16">
          <div className="mb-10 text-center">
            <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Privacy & Security
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last Updated: October 26, 2023</p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600">
            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">1. Information We Collect</h3>
            <p className="mb-4">
              We collect information to provide better services to all our users. The types of information we collect include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, business address, and payment information when you register for an account.</li>
              <li><strong>Business Data:</strong> Inventory lists, transaction history, employee records, and customer data entered into the system.</li>
              <li><strong>Usage Data:</strong> Information on how you access and use the Service, including your IP address, browser type, and device information.</li>
            </ul>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">2. How We Use Information</h3>
            <p className="mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our Service.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our Service.</li>
              <li>To detect, prevent and address technical issues.</li>
            </ul>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">3. Data Storage & Security</h3>
            <p className="mb-4">
              The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">4. Sharing of Information</h3>
            <p className="mb-4">
              We do not sell your personal data. We may share your information with third-party service providers who assist us in operating our Service (e.g., payment processors, cloud hosting providers) under strict confidentiality agreements.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">5. Cookies & Tracking</h3>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">6. Your Data Rights (GDPR & CCPA)</h3>
            <p className="mb-4">
              Depending on your location, you may have rights regarding your personal data, including the right to access, correct, delete, or restrict the use of your data. To exercise these rights, please contact us at privacy@leospos.com.
            </p>

            <h3 className="text-slate-900 font-bold text-xl mt-8 mb-4">7. Contact Information</h3>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-2 mb-4 font-medium text-slate-800">
              <li>Email: privacy@leospos.com</li>
              <li>Phone: +1 (800) 555-0199</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};