import React from 'react'
import RestaurantNavbar from './RestaurantNavbar'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../component_styles/Menu.css' 
import MenuItems from './MenuItems';



function Menu() {
  

  return (
    <>
    <div className="homepage1">
      {/* Header Section */}
     
      <RestaurantNavbar/>

    {/* Hero Section */}
<Container className="hero-section">
  <Row className="text-center justify-content-center">
    <Col md={8}>
      <h1 className="title">Fidalgo</h1>
      <p className="subtitle">Restaurant WordPress Theme</p>
    </Col>
  </Row>

  {/* Dish Image Grid */}
  {/* <Row className="image-grid mt-5 text-center no-wrap-row">
    <Col>
      <div
        className="custom-image"
        style={{
          backgroundImage:
            "url('https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-img-3-.png')",
        }}
      ></div>
    </Col>
    <Col>
      <div
        className="custom-image1"
        style={{
          backgroundImage:
            "url('https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-img-4-.png')",
        }}
      ></div>
    </Col>
    <Col>
      <div
        className="custom-image1"
        style={{
          backgroundImage:
            "url('https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-img-5-.png')",
        }}
      ></div>
    </Col>
    <Col>
      <div
        className="custom-image"
        style={{
          backgroundImage:
            "url('https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-img-6-.png')",
        }}
      ></div>
    </Col>
  </Row> */}
</Container>
    </div>

    <MenuItems /> 
    
    </>
  )
}

export default Menu