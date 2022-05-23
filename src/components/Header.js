import React from "react";
import { Navbar, Container,Nav  } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Header = ()=>{
    const history = useHistory();

    const userLoggedIn = localStorage.getItem('username');

    return <Navbar style={{width: '100%'}} bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">My Pharmacy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{width: '100%'}}>
          <Nav.Link href="/cart">Cart</Nav.Link>
          {userLoggedIn ?  <Nav.Link onClick={()=> {
              localStorage.removeItem('username');
              localStorage.removeItem('password');
                history.push('/');
          }}>Logout</Nav.Link> : <Nav.Link href={'/login'}>Login/Register</Nav.Link>}
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header;