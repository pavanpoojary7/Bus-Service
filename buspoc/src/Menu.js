import React from 'react';
import{Navbar, Nav,NavDropdown,Container} from 'react-bootstrap';


export const Menu=()=>{
    return(

    <>
   {/* navbar for page */}
   < Navbar collapseOnSelect expand="md" bg="danger" variant="dark">
  <Container>
  <Navbar.Brand href="#">
  <img
     src="../pics/red-bus-logo.png"
     width="70"
     height="70"
     className="d-inline-block align-top"
     alt="Redbus logo"
     />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/buses">BUS AVAILABLE</Nav.Link>
      <Nav.Link href="#">Ryde<sup>New</sup></Nav.Link>
      <Nav.Link href="#">redRail</Nav.Link>
      <Nav.Link href="#">rPool</Nav.Link>
      <NavDropdown title="Manage Booking" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#">TICKET AVAILABLE</NavDropdown.Item>
        <NavDropdown.Item href="#">Price</NavDropdown.Item>
        <NavDropdown.Item href="#">Timings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Offer Code</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#">Help</Nav.Link>
      <Nav.Link  href="#">
        Proflie
      </Nav.Link>
      <Nav.Link  href="/">
        Home
      </Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>      
   
         
    </>
    );
}