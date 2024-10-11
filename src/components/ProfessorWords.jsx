const ProfessorWords = () => {
  return (
    <> 
      <h1 className="mt-[40px] text-4xl font-bold ml-[40px] mb-8">Meet The Team</h1>
      <div 
        className="border border-black w-full max-w-screen-lg mx-auto mt-11 p-4 flex flex-col lg:flex-row items-start bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <img 
          src="/team.jpeg" 
          alt="Professor" 
          className="w-full  h-full lg:h-auto object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4"
        />
        
      </div>
    </>
  );
}

export default ProfessorWords;