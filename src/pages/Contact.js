import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user modifies content
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Prevent submission if validation fails
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 2000);
  };

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
          <h1 className="display-1">Contact Us</h1>
          <p className="lead">Get in touch to learn more</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-stretch">
          <div className="col-md-6 d-flex">
            <img
              src="https://i.pinimg.com/236x/7e/c7/0d/7ec70d2eeb224de2f13815b018b213de.jpg"
              alt="Contact Us"
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <form className="w-100" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ fontSize: "1.25rem" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ fontSize: "1.25rem" }}
                />
                {errors.name && (
                  <div className="alert alert-danger">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontSize: "1.25rem" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ fontSize: "1.25rem" }}
                />
                {errors.email && (
                  <div className="alert alert-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="form-label"
                  style={{ fontSize: "1.25rem" }}
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ fontSize: "1.25rem" }}
                ></textarea>
                {errors.message && (
                  <div className="alert alert-danger">{errors.message}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ fontSize: "1.25rem" }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
