import { Container, Navbar, Nav } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">IN_Blockchain</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/homepage">INgresa</Nav.Link>
      <Nav.Link href="#features">INformate</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
   
  );
};

export default Header;
