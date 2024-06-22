import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-6">
      <div className="container mx-auto flex justify-between items-start px-4">
        <div>
          <h3 className="font-mono text-lg mb-2">Social Links</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/soft-skills-club2-nit-jamshedpur?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaLinkedin size={36} />
            </a>
            <a href="https://www.instagram.com/softskillsclub.nitjsr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <FaInstagram size={36} />
            </a>
            <a href="https://www.facebook.com/ssc.nitjamshedpur/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <FaFacebook size={36} />
            </a>
          </div>
        </div>
        <div className="text-right">
          <h3 className="font-mono text-lg mb-2">Address</h3>
          <p>National Institute Of Technology Jamshedpur,</p>
          <p>Q4GV+RJ5, Adityapur, Jamshedpur, </p>
          <p>Jharkhand 831014</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
