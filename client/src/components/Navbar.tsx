import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Academics', path: '/academics' },
  { text: 'News & Events', path: '/news-events' },
  { text: 'Admissions', path: '/admissions' },
  { text: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={cn(
      "bg-white sticky top-0 z-50 transition-all duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and School Name */}
          <Link href="/">
            <div className="flex items-center space-x-4 cursor-pointer">
              {/* Replace with actual school logo */}
              <div className="h-14 w-14 bg-[#556B2F] text-white rounded-full flex items-center justify-center">
                <span className="font-bold text-lg">KTBH</span>
              </div>
              <div className="hidden md:block">
                <h1 className="font-serif text-xl font-bold text-[#556B2F]">Kiage Tumaini</h1>
                <p className="text-sm text-gray-600">Boy's High School</p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[#556B2F] font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={cn(
                  "transition-colors duration-200",
                  location === link.path 
                    ? "text-[#800000] font-semibold" 
                    : "hover:text-[#800000]"
                )}
              >
                {link.text}
              </Link>
            ))}
          </div>
          
          {/* Space for future buttons if needed */}
          <div className="hidden md:flex items-center space-x-3">
            {/* No buttons for now */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-[#556B2F] hover:text-[#800000] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col space-y-3 text-[#556B2F]">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={cn(
                    "py-2 border-b border-gray-100",
                    location === link.path 
                      ? "text-[#800000] font-semibold" 
                      : "hover:text-[#800000]"
                  )}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
