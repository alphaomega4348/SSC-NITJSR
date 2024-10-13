const ProffesorsDesk = () => {
  return (
    <>
      <h1 className="mt-[40px] text-4xl font-bold ml-[40px] mb-8">Professor's Desk</h1>
      <div 
        className="border border-black w-full max-w-screen-lg mx-auto mt-11 p-4 flex flex-col lg:flex-row items-start bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <img 
          src="/dalla.jpeg" 
          alt="Professor" 
          className="w-full lg:w-1/3 h-64 lg:h-auto object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4"
        />
        <div className="flex flex-col gap-4 lg:gap-8 w-full">
          <p className="font-serif text-md lg:text-md">
            "As the Professor in Charge of Team RoboAut, I have had the privilege of witnessing the growth and achievements of this remarkable group of students. The field of robotics and automation is not just about building machines; it's about solving real-world problems with intelligent, innovative solutions. Our club fosters an environment where creativity meets technology, empowering students to push the boundaries of what’s possible.

            The dedication, passion, and teamwork that I see in Team RoboAut is truly inspiring. Each project, each challenge taken on, reflects the drive to not only learn but to excel. This club is not just preparing students for the future of robotics—it’s shaping the future itself. I have no doubt that the work done here will have a lasting impact, both within the institute and beyond, as our students go on to become leaders in technology and innovation.

            Together, we are building the foundations for a smarter, more connected world, and I am excited to be part of this journey."
          </p>
          <div className="self-end text-right">
            <h1 className="text-md lg:text-2xl font-bold text-blue-900 mb-0">
              Dr. Vijay Dalla
            </h1>
            <p className="text-md lg:text-xl font-bold text-gray-700 mt-0">
              Professor in-charge
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-auto my-8 w-full max-w-screen-lg border-t border-gray-300" />
    </>
  );
}

export default ProffesorsDesk;