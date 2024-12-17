import React from 'react'
import RestaurantNavbar from './RestaurantNavbar'
import Footer from './Footer'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../component_styles/Aboutus.css' 

function Aboutus() {
  return (
    <>

    

    <div className="homepage2">
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
</Container>
    </div>



    <Container fluid style={{ backgroundColor: '#002b20', color: '#fff', padding: '50px' }}>
      <Row>
        {/* Left Section */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div
            style={{
              backgroundColor: '#002b20',
              borderRadius: '30px',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '500px',
            }}
          >
            <Image
              src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/11/p1-img1.jpg" // Replace with your image URL
              alt="Staff at the bar"
              fluid
              style={{ display: 'block', width: '100%' }}
            />
          </div>
        </Col>

        {/* Right Section */}
        <Col md={6}>
          <h2 style={{ fontWeight: '600', fontSize: '2.5rem', letterSpacing: '1px' }}>OUR GOALS & HISTORY</h2>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#d3d3d3',
              margin: '20px 0',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="align-items-center mt-5">
  {/* Text Section */}
  <Col md={6} style={{ paddingLeft: '240px' }}> {/* Adjust padding here */}
    <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '10px' }}>OPENING HOURS</h4>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#d3d3d3', marginBottom: '0' }}>
      <strong>Mon – Thu:</strong> 10 am – 01 am <br />
      <strong>Fri – Sun:</strong> 10 am – 02 am
    </p>
  </Col>

  {/* Image Section */}
  <Col md={6} className="d-flex align-items-center justify-content-center" style={{ paddingLeft: '20px' }}> {/* Adjust padding here */}
    <div
      style={{
        borderRadius: '20px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '300px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      className="image-hover-effect"
    >
      <Image
        src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/11/p1-img2.jpg" // Replace with your image URL
        alt="Table setup"
        fluid
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    </div>
  </Col>
</Row>

    </Container>




    <Container fluid style={{ backgroundColor: "#0D3E34", padding: "4rem 2rem" }}>
      {/* Header Section */}
      <Row className="text-center mb-5">
        <Col>
          <h2 style={{ fontWeight: "bold", color: "#FFFFFF", fontSize: "2.5rem", marginBottom: "1rem" }}>
            BOOK YOUR EVENT
          </h2>
          <p style={{ color: "#D3D3D3", fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud
          </p>
        </Col>
      </Row>

      {/* Image Section */}
      <Row className="text-center">
        {/* Left Image */}
        <Col md={4}>
          <Image
            src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/11/p1-img4.jpg" // Replace with event image URL
            alt="Event Setup"
            fluid
            style={{
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            }}
          />
        </Col>

        {/* Middle Image with Rounded Top */}
        <Col md={4} className="d-flex justify-content-center">
          <div
            style={{
              width: "350px",
              height: "490px",
              overflow: "hidden",
              borderRadius: "150px 150px 0 0",
              boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/11/p1-img5.jpg" // Replace with wedding image URL
              alt="Wedding Event"
              fluid
              style={{ width: "100%", height: "490px", // Set the desired height
                objectFit: "cover" }}
            />
          </div>
        </Col>

        {/* Right Image */}
        <Col md={4}>
          <Image
            src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/11/p1-img6.jpg" // Replace with staff image URL
            alt="Event Host"
            fluid
            style={{
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            }}
          />
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default Aboutus