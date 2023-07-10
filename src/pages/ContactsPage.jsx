import React from "react";

const ContactsPage = () => {
  return (
    <div className="contact-text">
      <div>
        <h2>Koshokov Altynbek</h2>

        <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
          Frontend Developer specializing in React Js development. Experienced
          with all stages of the development cycle for dynamic web projects.
          Well-versed in numerous programming languages including JavaScript,
          Html, CSS, Bootstrap
        </p>
      </div>
      <div>
        <h2>Contacts</h2>
        <img
          style={{ width: "100%" }}
          src="https://icon-library.com/images/load-icon-gif/load-icon-gif-11.jpg"
        />
        <div>
          <a
            target="__blank"
            href="https://gmail.com/"
            style={{ textDecorationLine: "none", color: "#423f3e" }}
          >
            koshokov996@gmail.com
          </a>
          <br />
          <a
            target="__blank"
            href="https://ru.linkedin.com/"
            style={{ textDecorationLine: "none", color: "#423f3e" }}
          >
            Linkedin
          </a>
          <br />
          <a
            target="__blank"
            href="https://github.com/Farjana1khan"
            style={{ textDecorationLine: "none", color: "#423f3e" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
