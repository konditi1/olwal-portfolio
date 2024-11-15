import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  color: white;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubHeading = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

function Home() {
  return (
    <HeroWrapper id="home">
      <HeroHeading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I&apos;m Fena Onditi
      </HeroHeading>
      <HeroSubHeading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Aspiring Software Developer with a passion for Python, automation, and
        problem-solving. Let&apos;s build the future together.
      </HeroSubHeading>
    </HeroWrapper>
  );
}

export default Home;
