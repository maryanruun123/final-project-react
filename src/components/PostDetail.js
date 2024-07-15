// src/components/PostDetail.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../contexts/PostsContext"; // Import the context

const PostDetail = () => {
  const { id } = useParams();
  const { posts } = useContext(PostsContext); // Use the context
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600")',
          height: "50vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white p-4 bg-dark bg-opacity-50">
          <h1 className="display-1">Explore Our Articles</h1>
          <p className="lead">Delve deeper into our stories</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-3">
          <div className="col-lg-10 mx-auto">
            {/* Image displayed prominently at the top */}
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid rounded shadow mb-4"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            {/* Title displayed after the image */}
            <h1 className="mt-2 mb-3">{post.title}</h1>
            {/* Content displayed after the title */}
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
