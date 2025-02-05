import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'gr'>('gr');

  const navItems = {
    gr: [
      { name: 'Αρχική', href: '/' },
      { name: 'Προορισμοί', href: '/destinations' },
      { name: 'Ακτοπλοϊκά', href: '/ferry-tickets' },
      { name: 'Πακέτα', href: '/travel-packages' },
      { name: 'Υπηρεσίες', href: '/services' },
      { name: 'Σχετικά', href: '/about' },
      { name: 'Επικοινωνία', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    en: [
      { name: 'Home', href: '/' },
      { name: 'Destinations', href: '/destinations' },
      { name: 'Ferry Tickets', href: '/ferry-tickets' },
      { name: 'Packages', href: '/travel-packages' },
      { name: 'Services', href: '/services' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/6b0cccc3-7444-4a7d-99dd-9f218152a106.png" 
                alt="Phila Travel" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems[language].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setLanguage(language === 'gr' ? 'en' : 'gr')}
                className="px-3 py-1 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                {language.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems[language].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-primary hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'gr' ? 'en' : 'gr');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-primary hover:text-secondary"
            >
              {language === 'gr' ? 'English' : 'Ελληνικά'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;