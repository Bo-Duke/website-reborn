import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from './Section'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-decoration: none;
  @media only screen and (max-width: 525px) {
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr 1fr;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    justify-items: center;
  }
`

const Skill = styled.a`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
  text-decoration: none;
  margin: 5px;
  width: 120px;
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
`

const SkillText = styled.div`
  padding: 5px;
`

const Skills = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Section title={t('skills')} subtitle={t('skills-subtitle')}>
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
}

export default Skills
