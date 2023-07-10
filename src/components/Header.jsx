import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container className="container">
        <div>
          <img
            style={{ width: "100px" }}
            src="https://cdn3d.iconscout.com/3d/premium/thumb/cv-4080647-3379760.png"
          />
        </div>
        <div>
          <Link to={"/"}>
            <Navbar.Brand>Home page</Navbar.Brand>
          </Link>
          <Link to={"/about"}>
            <Navbar.Brand>About me</Navbar.Brand>
          </Link>
          <Link to={"/resume"}>
            <Navbar.Brand>Resume</Navbar.Brand>
          </Link>
          <Link to={"/projects"}>
            <Navbar.Brand>Projects</Navbar.Brand>
          </Link>
          <Link to={"/contacts"}>
            <Navbar.Brand>Contacts</Navbar.Brand>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
