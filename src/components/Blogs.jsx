import React from 'react';
import Blog from './Blog';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Underwater Object Detection Using Machine Learning Algorithms',
      author: {
        name: 'Shivam Kumar',
        image: '/shivam.jpeg'
      }
    },
    {
      id: 2,
      title: 'Malaria Detection Using OpenCV and Deep Learning',
      author: {
        name: 'Shivam Kumar',
        image: '/shivam.jpeg'
      }
    },
    {
      id: 3,
      title: 'Getting Started with ROS (Robot Operating System)',
      author: {
        name: 'Amit Singh',
        image: '/amit.jpeg'
      }
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;