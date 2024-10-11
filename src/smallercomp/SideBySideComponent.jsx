import React from 'react';

const SideBySideComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          className="w-full h-full object-cover rounded-lg" 
          src="/president.jpeg" 
          alt="Card image cap" 
        />
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <h5 className="text-2xl lg:text-4xl font-bold text-blue-900 mb-4">Ashish Ranjan</h5>
        <p className="text-lg lg:text-xl text-gray-700 mb-4">President</p>
        <p className="text-lg lg:text-xl text-gray-700">
          As the President of RoboAut, my goal is to drive innovation in robotics and automation at NIT Jamshedpur. Our club is a platform for passionate students to collaborate, experiment, and develop solutions that push the limits of technology. Together, we aim to lead in competitions, build impactful projects, and contribute to advancements in automation. We believe in the power of teamwork and creativity to solve real-world problems and make a significant impact in the field of robotics.
        </p>
      </div>
    </div>
  );
};

export default SideBySideComponent;