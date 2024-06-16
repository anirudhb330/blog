import React from "react";
import "../styles/Homepage.css"
const blogs = [
  {
    title: "Blog 1",
    summary: "This is a summary of blog post 1.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Blog 2",
    summary: "This is a summary of blog post 2.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Blog 3",
    summary: "This is a summary of blog post 3.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#"
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Our Blog</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-summary">{blog.summary}</p>
            <a href={blog.link} className="read-more">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
