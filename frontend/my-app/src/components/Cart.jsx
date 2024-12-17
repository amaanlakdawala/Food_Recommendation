import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import RestaurantNavbar from './RestaurantNavbar';
import '../component_styles/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../redux/store';

function Cart() {
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemQuantity = quantities[item.id] || 1;
      return total + item.price * itemQuantity;
    }, 0).toFixed(2);
  };

  const handleQuantity = (number, id) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] || 1;
      const newQuantity = currentQuantity + number;
      const finalQuantity = newQuantity < 1 ? 1 : newQuantity;

      // Dispatch with the updated quantity
      dispatch(updateCartQuantity({ id, quantity: finalQuantity }));

      // Return updated state with the new quantity
      return { ...prev, [id]: finalQuantity };
    });
  };

  const removeProduct = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <RestaurantNavbar />
      <Container
        className="mt-5"
        style={{
          backgroundColor: '#0d2c26',
          color: '#fff',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <h4 className="mb-4">Home // Cart</h4>
        <Table
          className="custom-table"
          style={{
            backgroundColor: '#0d2c26',
            borderCollapse: 'collapse',
            color: '#fff',
            width: '100%',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '1px solid #b6a97a' }}>
              <th style={{ border: 'none' }}></th>
              <th style={{ border: 'none' }}>Product</th>
              <th style={{ border: 'none' }}>Price</th>
              <th style={{ border: 'none' }}>Quantity</th>
              <th style={{ border: 'none' }}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #b6a97a' }}>
                <td style={{ border: 'none', textAlign: 'center', width: '50px' }}>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeProduct(item)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#fff',
                      fontSize: '30px',
                      fontWeight: 'bold',
                    }}
                  >
                    &times;
                  </Button>
                </td>
                <td style={{ border: 'none' }}>
                  <img
                    src={`http://127.0.0.1:8000/${item.images[0].image}`}
                    alt="Crunch Pralines"
                    style={{
                      marginRight: '10px',
                      width: '70px',
                      height: '50px',
                    }}
                  />
                  {item.name}
                </td>
                <td style={{ border: 'none' }}>${item.price.toFixed(2)}</td>
                <td style={{ border: 'none' }}>
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      border: '1px solid #b6a97a',
                      padding: '5px 10px',
                      backgroundColor: '#0d2c26',
                      color: '#fff',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    <span
                      style={{
                        marginRight: '10px',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        letterSpacing: '1px',
                      }}
                    >
                      QUANTITY
                    </span>
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={() => handleQuantity(-1, item.id)}
                      style={{
                        border: 'none',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: '#fff',
                        backgroundColor: 'transparent',
                        padding: '0 10px',
                      }}
                    >
                      -
                    </Button>
                    <Form.Control
                      type="text"
                      value={quantities[item.id] || 1}
                      readOnly
                      className="mx-2 text-center quantity_button"
                      style={{
                        width: '40px',
                        border: 'none',
                        backgroundColor: '#0d2c26',
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: 'bold',
                      }}
                    />
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={() => handleQuantity(1, item.id)}
                      style={{
                        border: 'none',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: '#fff',
                        backgroundColor: 'transparent',
                        padding: '0 10px',
                      }}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td style={{ border: 'none' }}>
                  ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Form.Control
              type="text"
              placeholder="Coupon code"
              className="d-inline-block me-2"
              style={{ width: '200px' }}
            />
            <Button className="apply-coupon-btn" variant="light">
              Apply Coupon
            </Button>
          </div>
          <Button className="apply-coupon-btn" variant="light">
            Update Cart
          </Button>
        </div>
      </Container>

      <hr className="cart-divider" />

      <div className="cart-totals">
        <h2 className="cart-totals-heading">Cart Totals</h2>
        <div className="cart-totals-row">
          <span className="cart-totals-label">Subtotal</span>
          <span className="cart-totals-value">${calculateTotal()}</span>
        </div>
        <hr className="cart-totals-divider" />
        <div className="cart-totals-row">
          <span className="cart-totals-label">Shipping</span>
          <div className="cart-totals-shipping">
            <p>Enter your address to view shipping options.</p>
            <a href="#" className="calculate-shipping">
              Calculate shipping
            </a>
          </div>
        </div>
        <hr className="cart-totals-divider" />
        <div className="cart-totals-row">
          <span className="cart-totals-label">Total</span>
          <span className="cart-totals-value">${calculateTotal()}</span>
        </div>
        <hr className="cart-totals-divider" />
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </>
  );
}

export default Cart;