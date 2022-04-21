import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
 
import useAuth from '../LogIn/Hooks/useAuth';



const Header = () => {
  const { users, signInUsingGoogle, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="#experts">Experts</Nav.Link>

            {
              users?.email ?
                <Button variant='light' onClick={logOut}>Log out</Button> :
                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            }

            <Navbar.Text>

              {
                users.email && <p> Signed in as:{users?.displayName}</p>
              }

            </Navbar.Text>
          </Navbar.Collapse>


        </Container>
      </Navbar>

    </>
  );
};

export default Header;