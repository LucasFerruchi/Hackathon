import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">IN_Blockchain</Navbar.Brand>
        <Nav className=" ml-5">
          <Nav.Link href="#features">INformacion</Nav.Link>
          <Nav.Link href="#features">INnovacion</Nav.Link>
          <Nav.Link href="#features">INversion</Nav.Link>
          <Nav.Link href="/homePage">INgresar</Nav.Link>
        </Nav>
    </Container>
      </Navbar>
  );
};

export default Header;
