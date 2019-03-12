import React from 'react'
import styled from 'styled-components'

const SubTitle = styled.h3`
  font-size: 0.8em;
  opacity: 0.8;
  font-weight: normal;
`

const Section = ({ title, subtitle, children }) => (
  <div>
    <h2>{title}</h2>
    <SubTitle>{subtitle}</SubTitle>
    {children}
  </div>
)

export default Section
