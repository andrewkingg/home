import { Menu, X } from 'lucide-react';
import React, {useState} from 'react'
import { logo } from '../assets/Data';

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    // { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-100 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href={'#home'}> <img className="h-full w-23" src={logo}/></a>
        

          {/* Desktop Menu */}
          <div className="text hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {(
        <div   className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-900 px-4 md:hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 max-h-0"
        }`}>
            <div className="p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}</div>
        </div>
      )}
    </nav>
  );
}

export default NavBar