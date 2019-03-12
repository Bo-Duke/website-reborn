import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from './Section'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
`

const Projects = ({ data }) => (
  <Section title="Projets" subtitle="Mes projets personnels">
    <Wrapper>salut</Wrapper>
  </Section>
)

export default Projects
