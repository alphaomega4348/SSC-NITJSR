import React from 'react';

const Cards = ({ image, name, post, words }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-96 object-cover" src={image} alt="Card image cap" />
      <div className="px-6 py-4">
        <h5 className="text-md lg:text-2xl font-bold text-blue-900 self-end lg:mt-auto">{name}</h5>
        <p className="text-gray-700 text-base">{post}</p>
        <p className="text-gray-700 text-base mt-4">{words}</p>
      </div>
    </div>
  );
};

export default Cards;