// src/components/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

// Styled components
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: white;
    text-decoration: underline;

    &:hover {
      color: #ffdfba;
    }
  }

  svg {
    font-size: 1.5rem;
    color: #ffdfba;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;

  input,
  textarea {
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  button {
    background-color: #ffffff;
    color: #3498db;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #ffdfba;
      color: #3498db;
    }
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #ffdfba;
`;

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you! I will get back to you soon.');
  };

  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      
      {/* Contact Details */}
      <ContactInfo>
        <FaEnvelope />
        Email: <a href="mailto:konditi1@gmail.com">konditi1@gmail.com</a>
      </ContactInfo>
      <ContactInfo>
        <FaPhoneAlt />
        Phone: <a href="tel:+254727964678">+254727964678</a>
      </ContactInfo>
      <ContactInfo>
        <FaLinkedin />
        LinkedIn:{' '}
        <a
          href="https://linkedin.com/in/fena-olwal-2b675216a"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fena Onditi
        </a>
      </ContactInfo>
      <ContactInfo>
        <FaGithub />
        GitHub:{' '}
        <a
          href="https://github.com/konditi1"
          target="_blank"
          rel="noopener noreferrer"
        >
          konditi1
        </a>
      </ContactInfo>
      <ContactInfo>Let&apos;s collaborate on something amazing!</ContactInfo>

      {/* Contact Form */}
      <FormWrapper onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </FormWrapper>

      {formStatus && <StatusMessage>{formStatus}</StatusMessage>}
    </ContactWrapper>
  );
};

export default Contact;
