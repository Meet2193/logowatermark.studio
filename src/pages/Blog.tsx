import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      slug: 'top-5-free-tools-add-logo-images-online',
      title: 'Top 5 Free Tools to Add Logo to Images Online',
      excerpt: 'Discover the best free online tools for adding logos and watermarks to your images. Compare features, ease of use, and output quality.',
      date: '2025-01-25',
      readTime: '8 min read',
      category: 'Tools Review',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'how-to-watermark-product-photos-bulk',
      title: 'How to Watermark Product Photos in Bulk',
      excerpt: 'Learn the most efficient methods to add watermarks to hundreds of product photos at once. Perfect for e-commerce businesses and photographers.',
      date: '2025-01-22',
      readTime: '6 min read',
      category: 'Tutorial',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'why-add-logo-instagram-posts',
      title: 'Why You Should Always Add a Logo to Your Instagram Posts',
      excerpt: 'Protect your content and build brand recognition on Instagram. Learn why watermarking your posts is essential for content creators.',
      date: '2025-01-20',
      readTime: '5 min read',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'best-logo-placement-positions-images',
      title: 'Best Logo Placement Positions for Different Types of Images',
      excerpt: 'Discover the optimal logo placement strategies for portraits, landscapes, product photos, and social media content.',
      date: '2025-01-18',
      readTime: '7 min read',
      category: 'Design Tips',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'protect-images-copyright-watermarks',
      title: 'How to Protect Your Images from Copyright Theft with Watermarks',
      excerpt: 'Essential guide to protecting your photography and artwork online. Learn about different watermarking techniques and legal considerations.',
      date: '2025-01-15',
      readTime: '9 min read',
      category: 'Copyright',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'create-professional-watermark-logo',
      title: 'How to Create a Professional Watermark Logo',
      excerpt: 'Step-by-step guide to designing effective watermark logos that protect your content without ruining the visual appeal.',
      date: '2025-01-12',
      readTime: '10 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <>
      {/* Schema Markup for Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "LogoWatermark Studio Blog",
          "description": "Tutorials, tips, and guides for adding logos and watermarks to images online",
          "url": "https://logowatermark.studio/blog",
          "publisher": {
            "@type": "Organization",
            "name": "LogoWatermark Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://logowatermark.studio/logo.png"
            }
          }
        })}
      </script>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-12 w-12 text-yellow-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Watermarking Blog
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert tutorials, tips, and guides for adding logos and watermarks to your images. 
              Learn from professionals and protect your content effectively.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">📚 Tutorials</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">💡 Tips & Tricks</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🛡️ Copyright Protection</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">🎨 Design Guides</span>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm ml-3">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
                <div>
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Tutorials', 'Design Tips', 'Tools Review', 'Copyright', 'Social Media', 'Business'].map((category) => (
                <div key={category} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 cursor-pointer">
                  <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm">
                    {Math.floor(Math.random() * 10) + 3} articles
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;