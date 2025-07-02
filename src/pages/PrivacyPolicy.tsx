import React from 'react';
import { Shield, Eye, Lock, Database, Globe, UserCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-yellow-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last updated: January 27, 2025
          </p>
          <p className="text-gray-600 mt-2">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <UserCheck className="h-6 w-6 mr-2" />
            Privacy at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-green-800">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              No image storage on our servers
            </div>
            <div className="flex items-center text-green-800">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              No personal data collection
            </div>
            <div className="flex items-center text-green-800">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              No account registration required
            </div>
            <div className="flex items-center text-green-800">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Browser-based processing only
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-blue-600" />
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              LogoWatermark Studio ("we," "our," or "us") operates the website logowatermark.studio 
              (the "Service"). This Privacy Policy informs you of our policies regarding the collection, 
              use, and disclosure of personal data when you use our Service.
            </p>
            <p className="text-gray-600">
              We are committed to protecting your privacy and ensuring transparency about our data practices. 
              This policy complies with the General Data Protection Regulation (GDPR) and other applicable 
              privacy laws.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2 text-purple-600" />
              2. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Images and Files</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 font-medium">
                ✅ Your images are processed entirely in your browser and are NEVER uploaded to our servers.
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              When you upload images or logos to our tool, they remain on your device and are processed 
              locally using your browser's capabilities. We do not have access to, store, or transmit 
              your images to our servers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Analytics Data</h3>
            <p className="text-gray-600 mb-4">
              We may collect anonymous usage statistics through Google Analytics, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Pages visited and time spent on our website</li>
              <li>Browser type and version</li>
              <li>Device type and screen resolution</li>
              <li>General geographic location (country/region level)</li>
              <li>Referral sources</li>
            </ul>
            <p className="text-gray-600">
              This data is aggregated and anonymized, and cannot be used to identify individual users.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Contact Information</h3>
            <p className="text-gray-600">
              If you contact us through our contact form or email, we collect only the information 
              you voluntarily provide, such as your name, email address, and message content.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-green-600" />
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">We use the limited information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Improve our website and user experience</li>
              <li>Understand how our service is being used</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Detect and prevent technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Important:</strong> We never use your images for any purpose. They remain 
                private and are processed only on your device.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2 text-red-600" />
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your information to third parties, except:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li><strong>Service Providers:</strong> Google Analytics for website analytics (anonymized data only)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfer:</strong> In the event of a merger or acquisition (with notice)</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                Your images are never shared because they never leave your device.
              </p>
            </div>
          </section>

          {/* GDPR Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights Under GDPR</h2>
            <p className="text-gray-600 mb-4">
              If you are in the European Union, you have the following rights:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Access</h4>
                <p className="text-sm text-gray-600">Request information about data we hold about you</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Rectification</h4>
                <p className="text-sm text-gray-600">Request correction of inaccurate data</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Erasure</h4>
                <p className="text-sm text-gray-600">Request deletion of your data</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Object</h4>
                <p className="text-sm text-gray-600">Object to processing of your data</p>
              </div>
            </div>
            <p className="text-gray-600">
              To exercise these rights, contact us at privacy@logowatermark.studio
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use minimal cookies and tracking technologies:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">Type</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">Purpose</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-gray-600">Essential</td>
                    <td className="px-4 py-2 text-gray-600">Website functionality</td>
                    <td className="px-4 py-2 text-gray-600">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-600">Analytics</td>
                    <td className="px-4 py-2 text-gray-600">Usage statistics (Google Analytics)</td>
                    <td className="px-4 py-2 text-gray-600">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-4">
              You can disable cookies in your browser settings, though this may affect website functionality.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>HTTPS encryption for all data transmission</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to any collected data</li>
              <li>Secure hosting infrastructure</li>
            </ul>
            <p className="text-gray-600">
              Since your images are processed locally, they benefit from your device's security measures.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600">
              Our Service is not intended for children under 13. We do not knowingly collect 
              personal information from children under 13. If you become aware that a child 
              has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600">
              Continued use of our Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong> meet972344@gmail.com<br />
                <strong>Website:</strong> logowatermark.netlify.app/contact
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;