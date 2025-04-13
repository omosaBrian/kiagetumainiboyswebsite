import { Link } from 'wouter';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { footerContent } from '@/data/schoolData';

export default function Footer() {
  const socialIcons = {
    facebook: FaFacebookF,
    twitter: FaTwitter,
    instagram: FaInstagram,
    youtube: FaYoutube
  };

  return (
    <footer className="bg-[#556B2F] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* School Logo - placeholder for now */}
              <div className="h-12 w-12 bg-white text-[#556B2F] rounded-full flex items-center justify-center mr-3">
                <span className="font-bold text-lg">KT</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">{footerContent.schoolInfo.name}</h3>
                <p className="text-sm text-gray-300">{footerContent.schoolInfo.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {footerContent.schoolInfo.description}
            </p>
            <div className="flex space-x-4">
              {footerContent.socialMedia.map((social, index) => {
                const SocialIcon = socialIcons[social.platform as keyof typeof socialIcons];
                return (
                  <a 
                    key={index} 
                    href={social.link} 
                    className="text-gray-300 hover:text-white transition"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <SocialIcon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className="text-gray-300 hover:text-white transition">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span>{footerContent.contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{footerContent.contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{footerContent.contactInfo.email}</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{footerContent.contactInfo.hours}</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive school updates and news.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-2 rounded bg-[#455B1F] border border-[#394C1F] text-white w-full focus:outline-none focus:ring-2 focus:ring-[#800000]"
                />
              </div>
              <Button 
                type="submit" 
                className="px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#660000] transition w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#405B20] py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
