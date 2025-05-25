import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Mail, Instagram, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-dark/80 backdrop-blur-md border-t border-space-accent/10 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <Rocket size={24} className="text-space-accent" />*/}
              <img src="/logo/astc_logo.png" className="w-20" alt="" />
              <span className="font-display font-bold text-xl text-white">
                ASTC
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Aeronautics and Space Technology Club of IIT ISM Dhanbad -
              Exploring the cosmos through innovation, research, and education.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Events",
                "Projects",
                "Members",
                "Join Us",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${
                      item === "Home" ? "" : item.toLowerCase().replace(" ", "")
                    }`}
                    className="text-gray-300 hover:text-space-accent transition-colors text-sm"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>IIT (ISM) Dhanbad</p>
              <p>Dhanbad, Jharkhand - 826004</p>
              <p className="flex items-center gap-2 mt-2">
                <Mail size={16} />
                <a
                  href="mailto:astc@iitism.ac.in"
                  className="hover:text-space-accent transition-colors"
                >
                  aerospace_club@iitism.ac.in
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/arka_iit_ism?igsh=YjU1MHo1OTF5bDRp"
                aria-label="Instagram"
                className="text-gray-300 hover:text-space-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              {/* <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-space-accent transition-colors"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href="https://www.linkedin.com/company/arka-iit-ism-dhanbad/"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-space-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ASTC, IIT ISM Dhanbad. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;