import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import '../component_styles/Home.css' 
import Carousel from './CustomCarousel';
import CustomCarousel from './CustomCarousel';
import RestaurantFeatures from './ResaturantFeatures';
import Footer from './Footer';
import RestaurantNavbar from './RestaurantNavbar';

function Home() {
  return (
    <>
  <div className="homepage">
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
  <Row className="image-grid mt-5 text-center no-wrap-row">
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
  </Row>
</Container>
    </div>


    <div className="landing-page">
      <Container fluid>
        {/* Section 1 */}
        <Row className="section">
          <Col md={6} className="image-section">
            <Card className="custom-card">
              <Card.Img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-homes-img-4.jpg" alt="Elegant dining" />
              <Card.Body>
                <Card.Title>Good Times, Great Tastes</Card.Title>
                <Card.Text>
                  Fidalgo is for everyone who collects beautiful moments.
                </Card.Text>
                <Button variant="outline-light">Reserve Your Table</Button>
              </Card.Body>
             
            </Card>
            
            
          </Col>
         
         
          <Col md={6} className="image-section">
            <Card className="custom-card1">
              <Card.Img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-homes-img-3.jpg" alt="Moon Sushi" />
              <Card.Body>
                <Card.Title>Moon Sushi</Card.Title>
                <Card.Text>Explore Sushi Sets, Nigiri, and More</Card.Text>
                <Button variant="outline-light">View Menu</Button>
              </Card.Body>
            </Card>
           
          </Col>
          
        </Row>
       


        {/* Section 2 */}
       
      </Container>


      <Container fluid>
        {/* Section 1 */}
        <Row className="section">
          <Col md={6} className="image-section">
            <Card className="custom-card1">
              <Card.Img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-homes-img-7.jpg" alt="Elegant dining" />
              <Card.Body>
                <Card.Title>Good Times, Great Tastes</Card.Title>
                <Card.Text>
                  Fidalgo is for everyone who collects beautiful moments.
                </Card.Text>
                <Button variant="outline-light">Reserve Your Table</Button>
              </Card.Body>
             
            </Card>
            
            
          </Col>
         
         
          <Col md={6} className="image-section">
            <Card className="custom-card">
              <Card.Img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-homes-img-5.jpg" alt="Moon Sushi" />
              <Card.Body>
                <Card.Title>Moon Sushi</Card.Title>
                <Card.Text>Explore Sushi Sets, Nigiri, and More</Card.Text>
                <Button variant="outline-light">View Menu</Button>
              </Card.Body>
            </Card>
           
          </Col>
          
        </Row>
       


        {/* Section 2 */}
       
      </Container>


      <Container fluid>
        {/* Section 1 */}
        <Row className="section">
          <Col md={6} className="image-section">
            <Card className="custom-card">
              <Card.Img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-homes-img-12.jpg" alt="Elegant dining" />
              <Card.Body>
                <Card.Title>Good Times, Great Tastes</Card.Title>
                <Card.Text>
                  Fidalgo is for everyone who collects beautiful moments.
                </Card.Text>
                <Button variant="outline-light">Reserve Your Table</Button>
              </Card.Body>
             
            </Card>
            
            
          </Col>
         
         
          <Col md={6} className="image-section">
            <Card className="custom-card1">
              <Card.Img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/landing-homes-img-9.jpg" alt="Moon Sushi" />
              <Card.Body>
                <Card.Title>Moon Sushi</Card.Title>
                <Card.Text>Explore Sushi Sets, Nigiri, and More</Card.Text>
                <Button variant="outline-light">View Menu</Button>
              </Card.Body>
            </Card>
           
          </Col>
          
        </Row>
       


        {/* Section 2 */}
       
      </Container>
      <hr class='horizontal_line' />


      <div class="hero-text">
  <p class="main-heading">DEDICATED TO THE ART & SCIENCE</p>
  <p class="sub-heading">OF CONTEMPORARY CUISINE</p>
  <p class="tagline">for modern restaurateurs</p>
</div>


    </div>

<CustomCarousel/>
<RestaurantFeatures />


    </>
  )
}

export default Home