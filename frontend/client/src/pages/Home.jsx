import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            TRUTH UNVEILED
          </h1>
          <p className="hero-subtitle">
            We are an independent investigative blog dedicated to exposing hidden realities, uncovering corruption, and amplifying the voices that often go unheard. We believe that truth is not always what’s presented on the surface.
        </p>
        <h2 className="sub-title">
            Mission statement
          </h2>
          <p className="subtitle">
            Our mission is to dig deeper, challenge narratives, and inspire accountability through fearless, fact-driven journalism.
          </p>
          <br></br>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link to="/posts" className="btn btn-primary">
              📚 Browse Posts
            </Link>
            <Link to="/posts/create" className="btn btn-secondary">
              ✏️ Write a Post
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="features-grid">
          <div className="feature-card slide-in">
            <div className="feature-icon">
              📝
            </div>
            <h3 className="feature-title">Create Posts</h3>
            <p className="feature-description">
              Write and publish your blog posts with rich content, categories, 
              and beautiful formatting. Express your thoughts with ease.
            </p>
          </div>
          
          <div className="feature-card slide-in" style={{animationDelay: '0.2s'}}>
            <div className="feature-icon">
              🗂️
            </div>
            <h3 className="feature-title">Manage Categories</h3>
            <p className="feature-description">
              Organize your posts with custom categories for better navigation 
              and discoverability. Keep your content structured and accessible.
            </p>
          </div>
          
          <div className="feature-card slide-in" style={{animationDelay: '0.4s'}}>
            <div className="feature-icon">
              📱
            </div>
            <h3 className="feature-title">Responsive Design</h3>
            <p className="feature-description">
              Enjoy a seamless experience on all your devices. Our modern design 
              adapts perfectly to desktops, tablets, and mobile phones.
            </p>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Truth Unveiled
              </h3>
              <p className="text-gray-300 mb-4">
                A modern MERN stack blog application built with cutting-edge technologies 
                to provide the best blogging experience for creators and readers alike.
              </p>
              <div className="flex gap-4">
                <SocialIcon href="https://twitter.com" icon="🐦" label="Twitter" />
                <SocialIcon href="https://github.com" icon="💻" label="GitHub" />
                <SocialIcon href="https://linkedin.com" icon="💼" label="LinkedIn" />
                <SocialIcon href="https://facebook.com" icon="👥" label="Facebook" />
                <SocialIcon href="https://instagram.com" icon="📸" label="Instagram" />
              </div>
            </div>
            <br></br>
            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><FooterLink href="/docs" text="Documentation" /></li>
                <li><FooterLink href="/api" text="API Reference" /></li>
                <li><FooterLink href="/support" text="Support" /></li>
                <li><FooterLink href="/privacy" text="Privacy Policy" /></li>
                <li><FooterLink href="/terms" text="Terms of Service" /></li>
              </ul>
            </div>
          </div>

        {/* Contact Section */}
      <section className="container mt-16">
        <div className="card p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you. 
            Reach out to us through any of these channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                📧
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">truthunveiled@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                📞
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-gray-600 text-sm">+(254)790000000</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                📍
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
              <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                🕒
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Support</h3>
              <p className="text-gray-600 text-sm">24/7 Available</p>
            </div>
          </div>
        </div>
      </section>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 
            </p>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
            All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

// Social Media Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 transform hover:scale-110"
    aria-label={label}
  >
    <span className="text-lg">{icon}</span>
  </a>
);

// Footer Link Component
const FooterLink = ({ href, text }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
  >
    {text}
  </a>
);

export default Home;