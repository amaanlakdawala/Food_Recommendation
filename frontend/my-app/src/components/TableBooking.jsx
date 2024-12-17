import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import '../component_styles/TableBooking.css' 
import RestaurantNavbar from './RestaurantNavbar';
import axios from 'axios';

const TableBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [responseStatus,setResponseStatus] = useState(null);
  const [bookingError, setBookingError] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Submit the form data (you can add API calls here)
  //   const response = await  axios.post('/api/book_table/',formData)
  //   if (response) setResponseStatus(response.status)
    
  //   console.log('Booking Details:', formData);
  //   setBookingSuccess(true);
  //   setFormData({
  //     name: '',
  //     email: '',
  //     date: '',
  //     time: '',
  //     guests: 1,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/book_table/', formData);
      console.log(response.status);
      setBookingSuccess(true);
      setResponseStatus(200); // Update responseStatus state
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
      });
    } catch (error) {
      if (error.response) {
        setBookingError(true)
        console.error('Error response:', error.response.data);
        setResponseStatus(error.response.status); // Update responseStatus state
      } else {
        console.error('Error:', error.message);
      }
      setBookingSuccess(false);
      
    }
  };
  

  return (
    <>
    <RestaurantNavbar />
     <Container className="booking-container">
      <h2 className="text-center mb-4">Book a Table</h2>
      {responseStatus === 200 && bookingSuccess && (
  <Alert variant="success" onClose={() => setBookingSuccess(false)} dismissible>
    Table booked successfully! We look forward to seeing you.
  </Alert>
)}
{bookingError && (
  <Alert variant="success" onClose={() => setBookingError(false)} dismissible>
   Table is already booked at that date and time
  </Alert>
)}



      <Form onSubmit={handleSubmit} className="booking-form">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="20"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 book_table_button">
          Book Table
        </Button>
      </Form>
    </Container>
    </>
   
  );
};

export default TableBooking;
