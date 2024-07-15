// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./components/PostDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NewPost from "./components/NewPost";
import { PostsProvider } from "./contexts/PostsContext"; // Import the PostsProvider

function App() {
  return (
    <PostsProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newpost" element={<NewPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PostsProvider>
  );
}

export default App;
