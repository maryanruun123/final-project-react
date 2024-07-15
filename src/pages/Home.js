import React from "react";
import { Link } from "react-router-dom"; // Ensure this is imported
import posts from "../data"; // Adjust the path as necessary

const Home = () => {
  return (
    <div>
      {/* Hero Section with adjusted height */}
      <div
        className="vh-50 d-flex justify-content-center align-items-center" // Changed from vh-100 to vh-50
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600")',
          height: "50vh", // Reduced height from 100vh to 50vh
          width: "100vw", // Full viewport width
          overflow: "hidden", // Prevents scrolling
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white">
          <h1 className="display-1">Welcome to My Blog</h1>
          <p className="lead">The journey through my personal insights</p>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Recent Posts</h2>
        <div className="row">
          {posts.slice(0, 6).map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <Link
                to={`/posts/${post.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">
                      {post.content.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
