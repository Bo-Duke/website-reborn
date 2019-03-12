import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from './Section'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
`

const Education = ({ data }) => (
  <Section title="Éducation" subtitle="Les formations que j'ai effectué">
    <Wrapper>salut</Wrapper>
  </Section>
)

export default Education
