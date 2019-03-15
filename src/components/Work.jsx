import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from './Section'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.fg};
`

const Work = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Section title={t('work')} subtitle={t('work-subtitle')}>
      <Wrapper>salut</Wrapper>
    </Section>
  )
}

export default Work
