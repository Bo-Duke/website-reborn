import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from './Section'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
`

const Work = ({ data }) => (
  <Section title="Travail" subtitle="Mes expériences professionnelles">
    <Wrapper>salut</Wrapper>
  </Section>
)

export default Work
