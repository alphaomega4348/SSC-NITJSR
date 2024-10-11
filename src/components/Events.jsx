import React from 'react';
import Event from './Event';

const events = [
  { 
    id: 1, 
    name: 'Under Water Robot Workshop', 
    image: '/workshop.jpeg',
    page:'/workshop' 
  },
  { 
    id: 2, 
    name: 'Ojass', 
    image: '/ojass.jpeg',
    page:'/ojass' 
  },
  {
    id: 3,
    name: 'Robo Wars',
    image: '/rover.png',
    page:'/robowars' 
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