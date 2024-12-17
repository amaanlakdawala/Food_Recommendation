import React from 'react'
import { Carousel } from 'react-bootstrap';

import '../component_styles/Carousel.css' 

function CustomCarousel() {
  return (
    <>
    
    <Carousel interval={3000} fade>
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="carousel-slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6554667/pexels-photo-6554667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
          <div className="carousel-caption">
            <h1>COCKTAILS</h1>
            <p>Our Specials</p>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="carousel-slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5254926/pexels-photo-5254926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
          <div className="carousel-caption">
            <h1>CUISINE</h1>
            <p>Delightful Meals</p>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="carousel-slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/28992230/pexels-photo-28992230/free-photo-of-delicious-salmon-sushi-hand-roll-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
          <div className="carousel-caption">
            <h1>SPIRITS</h1>
            <p>Premium Selection</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CustomCarousel