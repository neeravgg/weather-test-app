import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navigationbar = () => {
  const history = useHistory();
  return (
    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
      <Navbar.Toggle
        aria-controls='navbarScroll'
        data-bs-toggle='collapse'
        data-bs-target='#navbarScroll'
      />
      <Navbar.Collapse id='navbarScroll'>
        <Nav className='d-flex flex-lg-row justify-content-lg-between w-100 px-3'>
          <NavLink
            eventKey='1'
            as={Link}
            to='/home'
            onClick={() => window.location.reload(false)}
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => {
              if (window.confirm("You want to LOGOUT?")) {
                sessionStorage.removeItem("token");
                history.push("/login");
              }
            }}
          >
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
