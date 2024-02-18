import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar,Button } from 'react-bootstrap';
import {FaSignOutAlt} from 'react-icons/fa';


const handleLogout = () => {
  console.log('Déconnexion');
};
function Navigation() {
  return (
    <>
      <Navbar bg="" expand="lg" variant="dark" style={{backgroundColor:'#2a377a'}} >
        <Container>
          <div style={{color:'white', fontWeight:'bold',fontSize:'30px'}} >AutoCar</div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ms-auto"  >
              <Nav.Link as={Link} to="/home">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/ajout_vehicule">Vehicules</Nav.Link>
              {/* <NavDropdown title="Utilisateurs" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/client">Clients</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/agent">Agents</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as={Link} to="/agence">Agences</Nav.Link>
              <Nav.Link as={Link} to="/statistique">Statistiques</Nav.Link>
              <Nav.Link as={Link} to="/compte">Compte</Nav.Link>
              <Button variant="danger" onClick={handleLogout} className="logout-icon">
                <FaSignOutAlt className="logout-icon-in"  />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
