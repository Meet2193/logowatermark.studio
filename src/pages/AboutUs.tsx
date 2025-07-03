import React from 'react';
import { Sparkles, Target, Users, Zap, Shield, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About LogoWatermark Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about making professional image branding accessible to everyone. 
            Our free online tool empowers creators, businesses, and individuals to add logos and 
            watermarks to their images with ease.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To democratize professional image branding by providing a powerful, free, and 
                user-friendly tool that anyone can use to protect and brand their visual content.
              </p>
              <p className="text-gray-600">
                We believe that every creator deserves access to professional-grade tools without 
                the complexity or cost barriers that often come with traditional software.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-600">100%</div>
                  <div className="text-sm text-gray-600">Free Forever</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">0</div>
                  <div className="text-sm text-gray-600">Signup Required</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">∞</div>
                  <div className="text-sm text-gray-600">Images Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">5</div>
                  <div className="text-sm text-gray-600">Output Sizes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Simplicity</h3>
              <p className="text-gray-600">
                We believe powerful tools should be simple to use. Our drag-and-drop interface 
                makes professional image branding accessible to everyone.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy</h3>
              <p className="text-gray-600">
                Your images are processed locally in your browser. We don't store, analyze, 
                or share your content. Your privacy is our priority.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Built by creators, for creators. We understand the challenges of content 
                creation and strive to solve them with thoughtful design.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Tool?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-lg p-2 mr-4 flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Quality</h3>
                  <p className="text-gray-600">
                    High-resolution output with smart scaling ensures your branded images 
                    look professional across all platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg p-2 mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bulk Processing</h3>
                  <p className="text-gray-600">
                    Upload multiple images and apply your logo to all of them at once. 
                    Download as individual files or a convenient ZIP archive.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-lg p-2 mr-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Precise Control</h3>
                  <p className="text-gray-600">
                    Fine-tune logo position, size, opacity, and margins with intuitive 
                    controls for perfect placement every time.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-lg p-2 mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
                  <p className="text-gray-600">
                    Real-time preview shows exactly how your branded images will look. 
                    No waiting, no guesswork.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 rounded-lg p-2 mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser-Based</h3>
                  <p className="text-gray-600">
                    No downloads, no installations. Works directly in your browser 
                    on any device, anywhere.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-lg p-2 mr-4 flex-shrink-0">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Free</h3>
                  <p className="text-gray-600">
                    No hidden costs, no premium features locked away. Everything you 
                    need is available for free, forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              LogoWatermark Studio was born from a simple frustration: why should adding a logo 
              to images be so complicated and expensive? As content creators ourselves, we 
              experienced firsthand the pain of using complex software or paying for simple 
              watermarking tasks.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We set out to build something different - a tool that's powerful enough for 
              professionals but simple enough for anyone to use. After months of development 
              and testing with real users, we launched LogoWatermark Studio as a completely 
              free service.
            </p>
            <p className="text-lg text-gray-600">
              Today, thousands of creators, businesses, and individuals use our tool to protect 
              and brand their visual content. We're proud to be part of their creative journey 
              and committed to keeping our service free and accessible to all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;