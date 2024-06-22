import React from 'react'
import EventImageCarousel from './EventImageCarousel'
import { eventList } from '../constants/eventData'

const EventImagesSlider = () => {
  return (
    <>
      <h1 className="mt-10 text-4xl font-bold ml-10 mb-8 sm:mt-[40px] sm:ml-[40px]">Glimpses of Past Events</h1>
      <div className="ml-3 h-full sm:ml-[200px]">
        <EventImageCarousel images={eventList}/>
      </div>
    </>
  ) 
}

export default EventImagesSlider