// src/contexts/PostsContext.js
import React, { createContext, useState } from "react";
import postsData from "../data"; // Adjust the path if necessary

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(postsData);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};
