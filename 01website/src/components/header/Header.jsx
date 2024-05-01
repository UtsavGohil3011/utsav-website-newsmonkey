import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Link to="/" className="ms-3 text-decoration-none text-black">
              NewsMonkey
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 mt-2 flex-wrap pe-3">
                  <Link className="ms-3 text-decoration-none text-black" to="/">
                    Home
                  </Link>
                  <Link
                    className="ms-3 text-decoration-none text-black"
                    to="/classBasedComponent"
                  >
                    CBC
                  </Link>
                  <Link
                    className="ms-3 text-decoration-none text-black"
                    to="/cards"
                  >
                    News
                  </Link>
                  <Link
                    className="ms-3 text-decoration-none text-black"
                    to="/sportnews"
                  >
                    Sport-News
                  </Link>
                  <Link
                    className="ms-3 text-decoration-none text-black"
                    to="/businessnews"
                  >
                    Business-News
                  </Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
