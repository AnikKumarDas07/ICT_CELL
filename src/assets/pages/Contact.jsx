// src/ContactPage.js
import React, { useState } from 'react';
import '../css/Contact.css';  
import { FaPhone, FaHome } from "react-icons/fa";
const Contact = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  
  const [status, setStatus] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields');
    } else {
      setStatus('Message sent successfully!');
      
      console.log('Form data:', formData);
      setFormData({ name: '', email: '', message: '' }); 
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Anik</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
    
    
  
   
  );


};

export default Contact;
