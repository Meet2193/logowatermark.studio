import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How to Add Logo', href: '/how-to-add-logo-to-image-online' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LogoWatermark Studio</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Free Online Logo & Watermark Tool</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Enhanced Footer with SEO Links */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">LogoWatermark Studio</h3>
                  <p className="text-sm text-gray-600">Free Online Logo & Watermark Tool</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Professional logo placement and watermarking tool. Add your brand to images instantly with our 
                drag & drop editor. Bulk processing, multiple formats, and instant downloads - completely free.
              </p>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500">© 2025 LogoWatermark Studio. All rights reserved.</span>
              </div>
            </div>

            {/* SEO-Optimized Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Tools & Guides</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-yellow-600 transition-colors">Add Logo to Image</Link></li>
                <li><Link to="/how-to-add-logo-to-image-online" className="text-gray-600 hover:text-yellow-600 transition-colors">How to Add Logo Online</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-yellow-600 transition-colors">Watermark Tutorials</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-yellow-600 transition-colors">Bulk Logo Editor</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-yellow-600 transition-colors">Free Watermark Tool</Link></li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support & Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/about-us" className="text-gray-600 hover:text-yellow-600 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-yellow-600 transition-colors">Contact Support</Link></li>
                <li><Link to="/privacy-policy" className="text-gray-600 hover:text-yellow-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-gray-600 hover:text-yellow-600 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* SEO Footer Links */}
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Popular Searches:</strong> 
                <Link to="/how-to-add-logo-to-image-online" className="text-yellow-600 hover:text-yellow-700 mx-1">Add logo to image online</Link> | 
                <Link to="/blog" className="text-yellow-600 hover:text-yellow-700 mx-1">Watermark photos online</Link> | 
                <Link to="/" className="text-yellow-600 hover:text-yellow-700 mx-1">Bulk image watermarking</Link> | 
                <Link to="/" className="text-yellow-600 hover:text-yellow-700 mx-1">Free logo placement tool</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;