import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from './Section'

const Wrapper = styled.div`
  display: flex;
  text-decoration: none;
`

const Skill = styled.a`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
  text-decoration: none;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  }
`

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;
  background-color: ${({ bg }) => bg};
  height: 120px;
  width: 120px;
`

const SkillText = styled.div`
  padding: 5px;
`

const Skills = ({ data }) => (
  <Section
    title="Compétences"
    subtitle="Les compétences que j'ai acquéri au fil du temps"
  >
    <Wrapper>
      {data.map(skill => (
        <Skill href={skill.link} bg={skill.bg}>
          <SkillIcon bg={skill.bg}>
            <FontAwesomeIcon
              size="6x"
              color={skill.fg}
              icon={['fab', skill['fa-name']]}
            />
          </SkillIcon>
          <SkillText>{skill.name}</SkillText>
        </Skill>
      ))}
    </Wrapper>
  </Section>
)

export default Skills
