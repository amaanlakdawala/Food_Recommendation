import React from 'react';
import { Container, Row, Col, Button, Form, Carousel  } from "react-bootstrap";
import '../component_styles/ProductDetail.css';
import RestaurantNavbar from './RestaurantNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/store';

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [productData, setProductData] = useState(null); // Initialize as null for a proper check
  
  

  const addProduct = ()=>{
   dispatch(addToCart(productData))
   console.log("product added")
   console.log(productData)
  }
  

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/get_dish/${id}`);
        if (response && response.data) {
          console.log("Fetched Successfully");
          setProductData(response.data);
        } else {
          console.log("No data received");
        }
      } catch (error) {
        console.error("Unable to fetch", error);
      }
    };

    getProductDetail();
  }, [id]);

  if (!productData) {
    // Render a loading state until data is fetched
    return <p>Loading...</p>;
  }

  return (
    <>
      <RestaurantNavbar />
     
      <Container className="product-page">
        <Row>
        <Col md={7} className="image-gallery">
            {productData && productData.images.length > 0 ? (
              <Carousel interval={2000} fade>
                {productData.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={`http://127.0.0.1:8000/${image.image}`}
                      alt={`Thumbnail ${index + 1}`}
                      style={{ height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <p>Loading images...</p>
            )}
          </Col>
          <Col md={5} className="product-details">
            <h1>{productData.name}</h1>
            {productData.price ? (
              <p className="price">${productData.price}</p>
              )
              :
              (
              <p className="price">Not Updated</p>
              )}
            
            <div className="rating">
              <span>★★★★★</span> <span>(1 customer review)</span>
            </div>
            <p className="description">
              {productData.description}
            </p>
            
            <Button className="add-to-cart-btn" onClick={addProduct}>Add to Cart</Button>
            <div className="additional-info">
              
              <p>
                <strong>Category:</strong> {productData.meal_type}
              </p>
              <p>
                <strong>Tags:</strong> {productData.ingredients}
              </p>
            </div>
            <div className="nutritional-info">
              <h5>Nutritional Value (Per Serving)</h5>
              <ul>
                <li>
                  <strong>Calories:</strong> {productData.calories} kcal
                </li>
                <li>
                  <strong>Protein:</strong> {productData.protein} g
                </li>
                <li>
                  <strong>Fats:</strong> {productData.fats} g
                </li>
                <li>
                  <strong>Carbs:</strong> {productData.carbs} g
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
