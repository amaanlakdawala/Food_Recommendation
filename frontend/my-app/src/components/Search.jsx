import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../component_styles/Search.css' 
import RestaurantNavbar from './RestaurantNavbar';
import axios from "axios";
import { Link } from 'react-router-dom';

function Search() {
  const [priceRange, setPriceRange] = useState([1, 40]);
  const [filterCategory, setFilterCategory] = useState('');
  const [menuData, setMenuData] = useState([])

  useEffect(() =>{
    const fetchMenuItems = async ()=>{
      const response = await axios.get('/api/all_dishes')
      console.log(response.data)
      if (response){
        setMenuData(response.data)
      }
      else{
        setError("Error Fetching Menu Items")
      }
    }
    fetchMenuItems()
  },[])
  

  const filteredItems = menuData.filter(
    (item) =>
      item.price >= priceRange[0] &&
      item.price <= priceRange[1] &&
      (!filterCategory || item.meal_type === filterCategory)
  );
  console.log(filteredItems)
  console.log(filterCategory)

  return (
    <>
    <RestaurantNavbar />
        <Container fluid className="menu-container">
      <Row>
        {/* Menu Items */}
        <Col md={9} className="menu-items-column">
          <Row>
            {filteredItems.map((item, index) => (
              <Col md={6} lg={6} key={index} className="mb-4">
                <Card className="menu-item-box">
                <Link to={`/productDetail/${item.id}`}><Card.Img variant="top" src={
                item.images && item.images.length > 0 
                  ? `http://127.0.0.1:8000/${item.images[0].image}` 
                  : 'https://images.pexels.com/photos/5499120/pexels-photo-5499120.jpeg?auto=compress&cs=tinysrgb&w=600' // Fallback image URL
              }  alt={item.name} /></Link>  
                  <Card.Body>
                    <h5 className="menu-title">{item.name}</h5>
                    <p className="menu-price">${item.price}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Filtering Options */}
        <Col md={3} className="menu-filter-column">
          <Card className="filter-box">
            <Card.Body>
              <h5 className="filter-title">Filter by Price</h5>
              <div className="price-slider">
                <Form.Range
                  min={10}
                  max={40}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                />
                <p className="price-range">
                  ${priceRange[0]} — ${priceRange[1]}
                </p>
                <Button
                  variant="link"
                  onClick={() => setPriceRange([10, 40])}
                  className="apply-button"
                >
                  Apply
                </Button>
              </div>
              <h5 className="filter-title mt-4">Categories</h5>
              <ul className="category-list">
                {['Starter', 'Main Course'].map((category, index) => (
                  <li
                    key={index}
                    className={`category-item ${
                      filterCategory === category ? 'active' : ''
                    }`}
                    onClick={() =>
                      setFilterCategory(
                        filterCategory === category ? '' : category
                      )
                    }
                  >
                    {category} (
                    {menuData.filter((item) => item.meal_type === category).length})
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>

  );
}

export default Search