import React from "react";

const AboutMePage = () => {
  return (
    <div className="container-about">
      <div>
        <h2>About Me</h2>
        <img src="https://cliply.co/wp-content/uploads/2019/12/371912980_3D_ATOM_400px.gif" />
      </div>
      <div className="about-text">
        <div>
          <h2>Who I Am?</h2>
          <br />
          <p style={{ width: "400px" }}>
            I am Frontend Developer (React JS), and building projects that help
            humanity around the world, and solutions that make businesses and
            organizations operate smoothly.
          </p>
        </div>
        <div>
          <h2>What Can I do?</h2>
          <br />
          <p style={{ width: "400px" }}>
            I can comfortably work on frontend jobs using web development tools.
            In addition to that, I use ReactJS, javaScript Html/Css, Bootstrap
            and to create frontend for backend NodeJs and mongoDB databases to
            Full Stack web applications I have ability to create or work on
            these technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
