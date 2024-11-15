import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { useState } from 'react';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333333;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 1rem;
    color: #61dafb;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

    a {
      margin: 0.5rem 0;
      font-size: 1.2rem;
      width: 100%;
      text-align: left;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #61dafb;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavWrapper>
      <Logo>
        <FaReact size={30} color="#61dafb" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Links isOpen={isOpen}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </Links>
    </NavWrapper>
  );
}

export default Navbar;
