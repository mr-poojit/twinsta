
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-retro-pink py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-retro text-retro-pink mb-4">Twinsta</h3>
            <p className="text-sm text-gray-600 mb-4">
              The retro social media platform combining the best of Instagram and Twitter.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-retro-darkGray">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/press">Press</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-retro-darkGray">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
              <FooterLink href="/guidelines">Guidelines</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-retro-darkGray">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Twinsta. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-retro-pink" /> in Retroland
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a href="#" className="bg-retro-lightPurple p-2 rounded-full text-retro-pink hover:bg-retro-pink hover:text-white transition-colors">
      {icon}
    </a>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <li>
      <Link to={href} className="text-sm text-gray-600 hover:text-retro-pink transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
