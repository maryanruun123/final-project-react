import React from "react";

const About = () => {
  return (
    <>
      <div
        className="vh-50 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600")',
          height: "50vh",
          width: "100vw",
          overflow: "hidden",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white p-4 bg-dark bg-opacity-50">
          <h1 className="display-1">About us</h1>
          <p className="lead">Learn more about my journey</p>
        </div>
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="row mt-4 align-items-center">
          <div className="col-md-6">
            <img
              src="https://i.pinimg.com/564x/4a/c6/fe/4ac6febb7fbb95998e892c0bae37c7a2.jpg"
              alt="Maryan Dahir Mahamuud"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-6">
            <p
              className="text-muted"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              I am a student of Jamhuriya University. I am learning computer
              science and am a full-stack developer. I love learning, growing,
              and education.
            </p>
            <p
              className="text-muted"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              I grew up in a small town and always had a fascination with
              technology. My pivotal moment was when I built my first website in
              high school, which sparked my interest in web development. In the
              future, I hope to contribute to impactful tech projects and mentor
              aspiring developers.
            </p>
            <p
              className="text-muted"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              In my free time, I enjoy reading, traveling, and exploring new
              technologies.
            </p>
          </div>
        </div>

        <h2 className="text-center mt-5 mb-4">Meet the Team</h2>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg text-center border-0">
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Ibrahim Mohame Mahamuud"
                  className="rounded-circle mb-3 img-thumbnail"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="card-title mt-3">Ibrahim Mohame</h3>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "1rem", lineHeight: "1.5" }}
                >
                  Ibrahim is a backend developer with a strong background in
                  database management and server-side logic. His contributions
                  to the team ensure our applications are robust and scalable.
                </p>
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg text-center border-0">
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Ifrah Ahmed Cawil"
                  className="rounded-circle mb-3 img-thumbnail"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="card-title mt-3">Ifrah Ahmed</h3>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "1rem", lineHeight: "1.5" }}
                >
                  Ifrah is a front-end developer who specializes in creating
                  engaging and user-friendly interfaces. Her creativity and
                  attention to detail bring our projects to life.
                </p>
              </div>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg text-center border-0">
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Ruun"
                  className="rounded-circle mb-3 img-thumbnail"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="card-title mt-3">Maryan Dahir</h3>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "1rem", lineHeight: "1.5" }}
                >
                  Ruun is a UX/UI designer with a knack for understanding user
                  needs and translating them into intuitive design solutions.
                  Her expertise ensures our products are not only functional but
                  also delightful to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
