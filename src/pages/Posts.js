// src/pages/Posts.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../contexts/PostsContext"; // Import the context

const Posts = () => {
  const { posts } = useContext(PostsContext); // Use the context
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tech", "Security", "Startups", "AI"];

  const getFilteredPosts = () => {
    if (activeCategory === "All") {
      return posts;
    } else {
      return posts.filter(
        (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div>
      <div
        className="vh-50 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600")', // Replace with your actual image URL
          height: "50vh",
          width: "100vw",
          overflow: "hidden",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white p-4 bg-dark bg-opacity-50 rounded">
          <h1 className="display-1">Blog Posts</h1>
          <p className="lead">Explore all my articles</p>
        </div>
      </div>

      <div className="container mt-4">
        <h1 className="text-center mb-4">Filtered Blog Posts</h1>
        <div className="d-flex justify-content-center mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                console.log(`Category selected: ${category}`);
                setActiveCategory(category);
              }}
              className={`btn mx-1 ${
                activeCategory === category
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Link to="/newpost" className="btn btn-success btn-lg">
            Create New Post
          </Link>
        </div>
        <div className="row">
          {filteredPosts.length === 0 ? (
            <p className="text-center">No posts found in this category.</p>
          ) : (
            filteredPosts.map((post) => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text flex-grow-1">
                      {post.content.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/posts/${post.id}`}
                      className="btn btn-primary mt-2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
