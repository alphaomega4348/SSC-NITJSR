import React from 'react';

const SideBySideComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto h-auto">
      <div className="md:w-1/2 w-full p-6">
        <img 
          src="/president.jpeg"  
          alt="Sample" 
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="md:w-1/2 w-full p-6 pl-10 relative">
        <p className="text-xl text- font-serif mb-16">
          As the President of RoboAut, my goal is to drive innovation in robotics and automation at NIT Jamshedpur. Our club is a platform for passionate students to collaborate, experiment, and develop solutions that push the limits of technology. Together, we aim to lead in competitions, build impactful projects, and contribute to advancements in automation. We believe in the power of teamwork and creativity to solve real-world problems and make a significant impact in the field of robotics.
        </p>
        <div className="absolute bottom-0 right-0 mb-4 mr-4 text-right">
          <p className="text-md lg:text-2xl font-bold text-blue-900 self-end lg:mt-auto">Ashish Ranjan</p>
          <p className="text-gray-700 text-base">President</p>
        </div>
      </div>
    </div>
  );
};

export default SideBySideComponent;