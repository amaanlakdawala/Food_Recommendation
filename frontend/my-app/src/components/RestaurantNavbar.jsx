import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../component_styles/Navbar.css'
import { Link } from 'react-router-dom';

function RestaurantNavbar() {
  return (
    <Navbar expand="lg" className="navbar-dark custom-navbar">
    <Navbar.Brand className="brand-logo">
      <span className="brand-text">Fidalgo</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="navbar-nav">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/menu" className="nav-link">MENU</Link>
        <Link to="/aboutus" className="nav-link">PAGES</Link>
        <Link to="/search" className="nav-link">SEARCH</Link>
        <Link to="/cart" className="nav-link">CART</Link>
      </Nav>
     <Button variant="outline-light" className="book-table-btn"><Link className='book_table_button_link' to='/bookTable'>
        BOOK A TABLE
      </Link></Button>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default RestaurantNavbar