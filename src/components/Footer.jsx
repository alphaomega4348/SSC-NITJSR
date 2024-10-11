import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-[100px] bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-start px-4">
        <div>
          <h3 className="font-mono text-lg mb-2">Social Links</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/team-roboaut-robotics-and-automation-club-of-nit-jamshedpur/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaLinkedin size={36} />
            </a>
            <a href="https://www.instagram.com/teamroboaut/profilecard/?igsh=MW1obHlyemlyYzVveQ==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <FaInstagram size={36} />
            </a>
           
          </div>
        </div>
        <div className="text-right">
          <h3 className="font-mono text-lg mb-2 font-semibold">Address</h3>
          <p>National Institute Of Technology Jamshedpur,</p>
          <p>Q4GV+RJ5, Adityapur, Jamshedpur, </p>
          <p>Jharkhand 831014</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
