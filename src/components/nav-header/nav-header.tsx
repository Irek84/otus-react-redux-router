import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectPageName } from "../page-name-edit/page-name-slice";

const NavHeader = () => {
  const pageName = useAppSelector(selectPageName);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            {pageName}
          </Link>
          <Link to="login" className="nav-link">
            Войти
          </Link>
          <Link to="register" className="nav-link">
            Зарегистрироваться
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
