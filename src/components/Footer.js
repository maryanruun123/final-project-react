import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1D3557", color: "#F1FAEE" }}
      className="mt-4"
    >
      <Container fluid className="py-4">
        <Row>
          <Col md={3}>
            <h5 style={{ color: "#F1FAEE" }}>About This Blog</h5>
            <p style={{ color: "#F1FAEE" }}>
              This blog shares the latest insights and trends in technology and
              fintech, crafted for enthusiasts and professionals alike.
            </p>
          </Col>
          <Col md={3}>
            <h5 style={{ color: "#F1FAEE" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" style={{ color: "#F1FAEE" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "#F1FAEE" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/posts" style={{ color: "#F1FAEE" }}>
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "#F1FAEE" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}></Col>
          <Col md={3}>
            <h5 style={{ color: "#F1FAEE" }}>Follow Us</h5>
            <a href="https://facebook.com" className="text-white me-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-white me-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            &copy; 2024 My Personal Blog | Designed by Me
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
