import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  MousePointer, 
  Download, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Image as ImageIcon,
  Settings,
  Zap,
  Shield,
  Users,
  Star
} from 'lucide-react';

const HowToAddLogo: React.FC = () => {
  return (
    <>
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Add Logo to Image Online for Free",
          "description": "Step-by-step guide to add logo or watermark to images using LogoWatermark Studio. Learn how to watermark multiple images, control logo size and position.",
          "image": "https://logowatermark.studio/how-to-guide.jpg",
          "totalTime": "PT5M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Images to watermark"
            },
            {
              "@type": "HowToSupply", 
              "name": "Logo or watermark image"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "LogoWatermark Studio"
            }
          ],
          "step": [
            {
              "@type": "HowToStep",
              "name": "Upload Your Images",
              "text": "Drag and drop your images or click to select multiple files",
              "image": "https://logowatermark.studio/step1.jpg"
            },
            {
              "@type": "HowToStep", 
              "name": "Upload Your Logo",
              "text": "Add your logo or watermark image to the tool",
              "image": "https://logowatermark.studio/step2.jpg"
            },
            {
              "@type": "HowToStep",
              "name": "Position and Resize",
              "text": "Drag your logo to the desired position and adjust size and opacity",
              "image": "https://logowatermark.studio/step3.jpg"
            },
            {
              "@type": "HowToStep",
              "name": "Download Results", 
              "text": "Download individual images or get all images in a ZIP file",
              "image": "https://logowatermark.studio/step4.jpg"
            }
          ]
        })}
      </script>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Add Logo to Image Online for Free
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn how to add logos and watermarks to your images in just 4 simple steps. 
              Perfect for photographers, businesses, and content creators who need to brand their images quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✅ 100% Free</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">⚡ 5 Minutes</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🔒 No Registration</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">📱 Works on Any Device</span>
            </div>
          </div>

          {/* Quick Start Button */}
          <div className="text-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
            >
              <Sparkles className="h-6 w-6 mr-2" />
              Start Adding Logos Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          {/* Step-by-Step Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Step-by-Step Guide: Add Logo to Image Online
            </h2>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Upload Your Images</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Start by uploading the images you want to add logos to. You can drag and drop multiple 
                    images at once or click to select them from your device. Our tool supports all major 
                    image formats including JPEG, PNG, WebP, and more.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Supports multiple image formats</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Bulk upload up to 50 images</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Maximum file size: 25MB per image</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
                    <Upload className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-blue-800 font-medium">Drag & Drop Your Images Here</p>
                    <p className="text-blue-600 text-sm mt-2">Or click to browse files</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Upload Your Logo</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Next, upload your logo or watermark image. This could be your company logo, 
                    personal brand mark, or any image you want to use as a watermark. Make sure 
                    your logo has a transparent background (PNG format) for the best results.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />PNG format recommended for transparency</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />High resolution logos work best</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automatically resized to fit</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 text-center">
                    <ImageIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-green-800 font-medium">Upload Your Logo</p>
                    <p className="text-green-600 text-sm mt-2">PNG, JPEG, or WebP format</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Position and Customize</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Now comes the fun part! Position your logo exactly where you want it on your images. 
                    Use our intuitive controls to adjust the size, opacity, and margins. You can choose 
                    from preset positions or drag the logo to any custom location.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />9 preset positions available</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Adjustable size (5% to 50%)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Opacity control (10% to 100%)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom margin settings</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 text-center">
                    <Settings className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <p className="text-purple-800 font-medium">Customize Logo Placement</p>
                    <p className="text-purple-600 text-sm mt-2">Size, position, and opacity controls</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Download Your Results</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Once you're happy with how your logo looks, it's time to download your branded images. 
                    You can download images individually or get all of them in a convenient ZIP file. 
                    Choose from multiple output sizes to fit your needs.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Individual or bulk download</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />5 different output sizes</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />High-quality PNG format</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Instant download</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-8 text-center">
                    <Download className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <p className="text-orange-800 font-medium">Download Your Images</p>
                    <p className="text-orange-600 text-sm mt-2">Individual files or ZIP archive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How can I add a logo to multiple images at once?
                </h3>
                <p className="text-gray-600">
                  Simply upload multiple images in step 1, then add your logo. The same logo will be 
                  applied to all images with the same position and settings. Download all images as 
                  a ZIP file for convenience.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I control logo size and position precisely?
                </h3>
                <p className="text-gray-600">
                  Yes! You can adjust logo size from 5% to 50% of the image width, choose from 9 preset 
                  positions, set custom margins, and control opacity from 10% to 100% for the perfect look.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What image formats are supported?
                </h3>
                <p className="text-gray-600">
                  We support all major image formats including JPEG, PNG, WebP, GIF, and BMP for input. 
                  All output images are saved in high-quality PNG format to preserve transparency and quality.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is my data safe and private?
                </h3>
                <p className="text-gray-600">
                  Absolutely! All image processing happens locally in your browser. We never upload or 
                  store your images on our servers. Your images remain completely private and secure.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do I need to create an account?
                </h3>
                <p className="text-gray-600">
                  No registration required! Our tool is completely free to use without any signup process. 
                  Just visit the website and start adding logos to your images immediately.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's the maximum file size I can upload?
                </h3>
                <p className="text-gray-600">
                  You can upload images up to 25MB each, and logos up to 5MB. For best performance, 
                  we recommend keeping images under 10MB and logos under 2MB.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose LogoWatermark Studio?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">
                  Process images instantly with our browser-based tool. No waiting for uploads or downloads 
                  from slow servers. Everything happens on your device for maximum speed.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Private</h3>
                <p className="text-gray-600">
                  Your images never leave your device. All processing happens locally in your browser, 
                  ensuring complete privacy and security for your valuable content.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">User Friendly</h3>
                <p className="text-gray-600">
                  Intuitive drag-and-drop interface that anyone can use. No technical skills required. 
                  Professional results in just a few clicks.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Add Logos to Your Images?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start watermarking your images now with our free online tool. No signup required!
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
            >
              <Sparkles className="h-6 w-6 mr-2" />
              Start Adding Logos Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToAddLogo;