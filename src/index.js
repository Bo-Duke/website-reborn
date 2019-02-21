import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import yaml from 'js-yaml'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarkerAlt,
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import rawData from './data/data.fr.yml'

import './style.css'

const data = yaml.load(rawData)
library.add(fab, faMapMarkerAlt, faGraduationCap, faBriefcase)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`

const MainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const App = () => {
  return (
    <Wrapper>
      <Sidebar data={data.about} />
      <MainContent>
        <Skills data={data.skills} />
      </MainContent>
    </Wrapper>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
