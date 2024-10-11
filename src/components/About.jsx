import React from 'react'
import SideBySideComponent from '../smallercomp/SideBySideComponent'
import Cards from '../smallercomp/Cards'
import Carousel from '../smallercomp/Carousel'

const About = () => {
  return (
    <>
    <div className='p-10 font-serif text-5xl'>
      <h1>About Team</h1>
      <hr className="border-t-2 border-gray-300 my-4 h-1/2" />
    </div>
    <div className='p-20'>
     <SideBySideComponent /> 
    </div>
    <div className="flex flex-wrap justify-center gap-36 p-4 mt-10">
    <Cards
        image="/prashant.jpeg"
        name="Prashant Sharma"
        post="Vice President"
        words="As the Vice President of RoboAut, my role is to support our members in turning their bold ideas into reality. Together, we are building a future where innovation in robotics and automation thrives, and every challenge becomes an opportunity for growth and collaboration."
      />
    <Cards
        image="/shivam.jpeg"
        name="Shivam Kumar"
        post="Software Lead"
        words="As Software Lead at RoboAut, I strive to fuse innovation with code, breathing life into machines. Together, we craft intelligent solutions that shape the future of robotics and automation."
      />
      
    </div>
    <div className="flex flex-wrap justify-center gap-36 p-4 mt-10">
    <Cards
        image="/ahuja.jpeg"
        name="Amarjeet Kumar"
        post="ML Head"
        words="As the Machine Learning Lead at RoboAut, I am focused on integrating intelligence into our systems, enabling our robots to learn, adapt, and evolve. Together, we are shaping a future where machines don't just follow commands—they think, predict, and innovate."
      />
      <Cards
        image="/amit.jpeg"
        name="Amit Singh"
        post="Web Wing Head"
        words="As the Web Wing Head at RoboAut, my goal is to create seamless and dynamic digital experiences that showcase our innovative work. Through cutting-edge web technologies, we aim to connect, inspire, and elevate the impact of our robotics projects to a global audience.

"
      />
    </div>
    {/* <div>
      <Carousel />
    </div> */}
    </>
  )
}

export default About