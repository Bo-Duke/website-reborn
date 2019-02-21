import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
`

const Skill = styled.div`
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  color: black;
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

const SubTitle = styled.h3`
  font-size: 0.8em;
  opacity: 0.8;
  font-weight: normal;
`

const Skills = ({ data }) => (
  <div>
    <h2>Compétences</h2>
    <SubTitle>Les compétences que j'ai acquéri au fil du temps</SubTitle>
    <Wrapper>
      {data.map(skill => (
        <Skill bg={skill.bg}>
          <SkillIcon bg={skill.bg}>
            <FontAwesomeIcon
              size="6x"
              fixedWidth
              color={skill.fg}
              icon={['fab', skill['fa-name']]}
            />
          </SkillIcon>
          <SkillText>{skill.name}</SkillText>
        </Skill>
      ))}
    </Wrapper>
  </div>
)

export default Skills
