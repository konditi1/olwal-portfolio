import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPython, FaJs, FaGithub, FaBug } from 'react-icons/fa';

const AboutWrapper = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  text-align: center;
  color: white;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #f1c40f, #e74c3c, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s infinite;

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 140px;
  color: #333333;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    background: #f1f1f1;
  }

  svg {
    font-size: 2.5rem;
    color: #3498db;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
  }

  svg:hover {
    color: #e74c3c;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: #333333;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 120px;

    svg {
      font-size: 2rem;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;

function About() {
  return (
    <AboutWrapper>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </Title>
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I&apos;m Fena Onditi, Software Development Apprentice at Zone01 Kisumu
        with a strong background in automation, debugging, and programming
        languages like Python, JavaScript, and Golang. I&apos;m currently
        pursuing a ProDev BackEnd Software Engineering certificate from ALX and
        eager to apply my skills to new and challenging opportunities.
      </Paragraph>
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I have hands-on experience at Stemscence, where I assisted with software
        development, testing, and debugging. I also enhanced my knowledge by
        completing a series of Coursera certifications, including Google IT
        Automation with Python and Introduction to Git and GitHub.
      </Paragraph>
      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        My technical skills include Python, JavaScript, debugging, and
        automation. I&apos;m a quick learner with a keen eye for detail, and I
        am excited to further my career by tackling real-world IT problems.
      </Paragraph>

      {/* Highlight Skills */}
      <SkillsWrapper>
        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaPython />
          <span>Python</span>
        </SkillCard>
        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaJs />
          <span>JavaScript</span>
        </SkillCard>
        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaGithub />
          <span>Golang</span>
        </SkillCard>
        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaBug />
          <span>Debugging</span>
        </SkillCard>
      </SkillsWrapper>
    </AboutWrapper>
  );
}

export default About;
