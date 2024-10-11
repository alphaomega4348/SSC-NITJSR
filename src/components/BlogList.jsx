import React from 'react';
import Blog from './Blog';

const BlogList = ({ blogs }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;