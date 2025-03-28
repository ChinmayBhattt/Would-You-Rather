import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: <FaGithub className="w-6 h-6" />, username: '@chinmaybhattt', url: 'https://github.com/chinmaybhattt' },
    { icon: <FaInstagram className="w-6 h-6" />, username: '@chinmaybhattt', url: 'https://instagram.com/chinmaybhattt' },
    { icon: <FaLinkedin className="w-6 h-6" />, username: '@chinmaybhattt', url: 'https://linkedin.com/in/chinmaybhattt' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
      >
        {isOpen ? <IoMdClose className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-fade-in">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              {link.icon}
              <span className="text-gray-700">{link.username}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation; 