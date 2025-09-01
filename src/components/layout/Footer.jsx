// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/AVP logo.png'; // Make sure this path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="JLY Logo" className="h-16 mr-2" />
              <span className="font-montserrat font-extrabold text-lg leading-tight">
                JLY INTERNATIONAL
              </span>
            </div>
            <p className="text-white/60">
              Connecting ambition with opportunity to ensure your success in an ever-evolving marketplace.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
              <li><Link to="/membership" className="hover:text-orange-400">Membership</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-orange-400"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white/60 hover:text-orange-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-white/60 hover:text-orange-400"><FaInstagram size={24} /></a>
              <a href="#" className="text-white/60 hover:text-orange-400"><FaTwitter size={24} /></a>
            </div>
            <p className="mt-4 text-white/60">
              info@jly.international
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center text-sm text-white/40">
          &copy; {currentYear} JLY International. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;