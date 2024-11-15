
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
`;

const SocialLinks = styled.div`
  margin: 1rem 0;

  a {
    margin: 0 1rem;
    color: #61dafb;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
`;

function Footer() {
  return (
    <FooterWrapper>
      <SocialLinks>
        <a href="https://github.com/konditi1" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/fena-olwal-2b675216a" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Fena Onditi. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
}

export default Footer;
