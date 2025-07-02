import React from 'react';
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-yellow-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last updated: January 27, 2025
          </p>
          <p className="text-gray-600 mt-2">
            Please read these terms carefully before using our service.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <Scale className="h-6 w-6 mr-2" />
            Terms Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-blue-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Free service with no warranties
            </div>
            <div className="flex items-center text-blue-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              You retain rights to your content
            </div>
            <div className="flex items-center text-blue-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Use responsibly and legally
            </div>
            <div className="flex items-center text-blue-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              No liability for damages
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Acceptance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2 text-green-600" />
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing and using LogoWatermark Studio ("the Service"), you accept and agree to 
              be bound by the terms and provision of this agreement. If you do not agree to abide 
              by the above, please do not use this service.
            </p>
            <p className="text-gray-600">
              These Terms of Service apply to all users of the website, including without limitation 
              users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-600 mb-4">
              LogoWatermark Studio provides a free, browser-based tool for adding logos and watermarks 
              to images. The service includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Drag and drop logo placement functionality</li>
              <li>Bulk image processing capabilities</li>
              <li>Multiple output size options</li>
              <li>Real-time preview and editing tools</li>
              <li>Download functionality for processed images</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Important:</strong> All image processing occurs locally in your browser. 
                We do not store or have access to your uploaded images.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-blue-600" />
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">By using our service, you agree to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Use the service only for lawful purposes</li>
              <li>Respect intellectual property rights of others</li>
              <li>Not upload content that is illegal, harmful, or offensive</li>
              <li>Not attempt to reverse engineer or compromise the service</li>
              <li>Not use the service to create misleading or fraudulent content</li>
              <li>Ensure you have rights to all images and logos you upload</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Content Ownership</h3>
            <p className="text-gray-600 mb-4">
              You retain full ownership and rights to all images and logos you upload to our service. 
              You are solely responsible for ensuring you have the necessary rights and permissions 
              to use and modify any content you upload.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Prohibited Content</h3>
            <p className="text-gray-600">
              You may not upload or process content that:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Violates any laws or regulations</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains malicious code or viruses</li>
              <li>Is defamatory, obscene, or offensive</li>
              <li>Violates privacy rights of others</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The LogoWatermark Studio website, including its design, code, and functionality, 
              is owned by us and protected by copyright and other intellectual property laws.
            </p>
            <p className="text-gray-600 mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Copy, modify, or distribute our website code</li>
              <li>Use our branding or trademarks without permission</li>
              <li>Create derivative works based on our service</li>
              <li>Reverse engineer our algorithms or processes</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-orange-600" />
              5. Disclaimers and Limitations
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Service Availability</h3>
            <p className="text-gray-600 mb-4">
              We provide the service "as is" without any warranties. We do not guarantee that:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>The service will be available 24/7 without interruption</li>
              <li>All features will work perfectly at all times</li>
              <li>The service will meet your specific requirements</li>
              <li>Any errors or bugs will be corrected immediately</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Limitation of Liability</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 font-medium">
                We shall not be liable for any direct, indirect, incidental, special, or 
                consequential damages resulting from your use of the service.
              </p>
            </div>
            <p className="text-gray-600">
              This includes but is not limited to damages for loss of profits, data, or other 
              intangible losses, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy</h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we handle your 
              information when you use our service. By using our service, you agree to the 
              collection and use of information in accordance with our Privacy Policy.
            </p>
            <p className="text-gray-600">
              Key privacy points:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Your images are processed locally and never uploaded to our servers</li>
              <li>We collect minimal analytics data to improve our service</li>
              <li>We do not sell or share your personal information</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your access to the service immediately, without prior 
              notice or liability, for any reason whatsoever, including without limitation if 
              you breach the Terms.
            </p>
            <p className="text-gray-600">
              Upon termination, your right to use the service will cease immediately. Since we 
              don't store user accounts or data, termination simply means blocking access from 
              your IP address if necessary.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Gavel className="h-6 w-6 mr-2 text-purple-600" />
              8. Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be interpreted and governed by the laws of the jurisdiction 
              where our service is operated, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600">
              Any disputes arising from these terms or your use of the service will be resolved 
              through binding arbitration in accordance with the rules of the jurisdiction's 
              arbitration association.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms 
              at any time. If a revision is material, we will try to provide at least 30 days 
              notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-600">
              What constitutes a material change will be determined at our sole discretion. 
              By continuing to access or use our service after those revisions become effective, 
              you agree to be bound by the revised terms.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Severability</h2>
            <p className="text-gray-600">
              If any provision of these Terms is held to be unenforceable or invalid, such 
              provision will be changed and interpreted to accomplish the objectives of such 
              provision to the greatest extent possible under applicable law and the remaining 
              provisions will continue in full force and effect.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@logowatermark.studio<br />
                <strong>Website:</strong> logowatermark.studio/contact
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-900 mb-3">Acknowledgment</h2>
              <p className="text-green-800">
                By using LogoWatermark Studio, you acknowledge that you have read these Terms & 
                Conditions and agree to be bound by them. If you do not agree to these terms, 
                please do not use our service.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;