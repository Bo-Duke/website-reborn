import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import Section from './Section'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
`

const Education = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Section title={t('school')} subtitle={t('school-subtitle')}>
      <Wrapper>salut</Wrapper>
    </Section>
  )
}

export default Education
