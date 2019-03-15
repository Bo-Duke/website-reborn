import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import Section from './Section'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
`

const Projects = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Section title={t('projects')} subtitle={t('projects-subtitle')}>
      <Wrapper>salut</Wrapper>
    </Section>
  )
}

export default Projects
