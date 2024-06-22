import React from 'react';
import Event from './Event';

const events = [
  { 
    id: 1, 
    name: 'Naivete Fiete', 
    image: '/naivete-fiete.heic',
    page:'/naivete-fiete' 
  },
  { 
    id: 2, 
    name: 'Disputatio', 
    image: '/disputatio.webp',
    page:'/disputatio' 
  },
  {
    id: 3,
    name: 'Colloquium',
    image: '/colloquium.webp',
    page:'/colloquium' 
  }
];

const Events = () => {
    return (
      <div className='bg-gray-200'>
        <h1 className="text-4xl font-bold ml-[40px] mb-8">Events</h1>
        <div className='flex flex-wrap justify-center gap-4 p-4'>
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
        <hr className="mx-auto my-8 w-full max-w-screen-lg border-t border-gray-300" />
      </div>
    );
  };

export default Events;