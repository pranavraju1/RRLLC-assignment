// import "./Navbar.scss";
// const NavigationBar = () => {
//   return (
//     // <div className="navigation">
//     //   <div>
//     //     <input type="text" />
//     //   </div>
//     //   <div className="tags">Categories</div>
//     //   <div className="tags">Website Builders</div>
//     //   <div className="tags">Today's deals</div>
//     // </div>
//   );
// };

// export default NavigationBar;

import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaEarthAsia } from "react-icons/fa6";
import './Navbar.scss'
const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary-dark navigation"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder=""
            className="me-2 in"
            aria-label="Search"
          />
        </Form>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto links">
            <Nav.Link className="link">
              Categories
            </Nav.Link>
            <Nav.Link className="link">
              Website Builders
            </Nav.Link>
            <Nav.Link className="link">
              Today's deals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
