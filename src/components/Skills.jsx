
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaReact, FaPython, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import PropTypes from 'prop-types';

const SkillsWrapper = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const SkillContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const SkillIcon = styled.div`
  margin-right: 1rem;
  font-size: 2rem;
  color: #3498db;
`;

const SkillDetails = styled.div`
  width: 100%;
`;

const SkillName = styled.h4`
  margin: 0;
  font-size: 1.2rem;
`;

const ProgressBar = styled(motion.div)`
  background-color: #3498db;
  height: 10px;
  border-radius: 5px;
`;

const ProgressBackground = styled.div`
  background-color: #ddd;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

function SkillBar({ skill, level, Icon }) {
  return (
    <SkillContainer>
      <SkillIcon>
        <Icon />
      </SkillIcon>
      <SkillDetails>
        <SkillName>{skill}</SkillName>
        <ProgressBackground>
          <ProgressBar
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1.5 }}
          />
        </ProgressBackground>
      </SkillDetails>
    </SkillContainer>
  );
}

function Skills() {
  return (
    <SkillsWrapper id="skills">
      <h2>Skills</h2>
      <SkillBar skill="JavaScript" level={90} Icon={FaJsSquare} />
      <SkillBar skill="React" level={80} Icon={FaReact} />
      <SkillBar skill="Python" level={80} Icon={FaPython} />
      <SkillBar skill="Golang" level={90} Icon={FaGithub} />
      <SkillBar skill="C" level={40} Icon={SiC} />
    </SkillsWrapper>
  );
}

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default Skills;
