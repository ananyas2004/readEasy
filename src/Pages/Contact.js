import React from "react";
import "./ContactForm.css";
import { Outlet } from "react-router-dom";

const Contact = ({ onSubmit }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formData, setFormData] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name, email, message });
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <div className="info">
          <p>If you have Questions or just want to get in touch, use the form. We look forward to hearing from you!!!!😊</p>
        </div>
      <div className="image-container">
        <img src="https://ideogram.ai/api/images/direct/uv0-VRTiRWiE8hRf7HCunA.jpg" alt="Contact Us" />
        
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type="submit">Send</button>
          </form>
        </div>
        <Outlet/>
      </div></>
  );
};

export default Contact;

