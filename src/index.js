import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import yaml from 'js-yaml'

import './i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarkerAlt,
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
import Projects from './components/Projects'
import frenchData from './data/data.fr.yml'
import englishData from './data/data.en.yml'

import { useDarkMode, useLanguage } from './hooks'

const data = { fr: yaml.load(frenchData), en: yaml.load(englishData) }
library.add(fab, faMapMarkerAlt, faGraduationCap, faBriefcase)

const darkTheme = {
  fg: '#dddddd',
  bg: '#212140',
  bg2: '#444470',
}

const theme = {
  fg: '#212140',
  bg: '#dddddd',
  bg2: 'white',
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
    font-family: sans-serif;
    transition: background-color ease 0.5s;
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
  @media only screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-template-row: 100px 1fr;
  }
`

const StyledMainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 520px;
`
const ScrollArea = styled.div`
  height: 100vh;
  overflow: scroll;
  @media only screen and (max-width: 820px) {
    height: 100%;
    overflow: visible;
  }
`

const MainContent = ({ children }) => (
  <ScrollArea>
    <StyledMainContent>{children}</StyledMainContent>
  </ScrollArea>
)

const App = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const [language, toggleLanguage] = useLanguage()

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <>
        <GlobalStyle />
        <Wrapper>
          <Sidebar data={data[language].about} />
          <MainContent>
            <button onClick={toggleDarkMode}>THEME!</button>
            <button onClick={toggleLanguage}>{language}</button>
            <Skills data={data[language].skills} />
            <Education data={data[language].education} />
            <Work data={data[language].work} />
            <Projects data={data[language].projects} />
            <Education data={data[language].education} />
            <Work data={data[language].work} />
            <Projects data={data[language].projects} />
            <Education data={data[language].education} />
            <Work data={data[language].work} />
            <Projects data={data[language].projects} />
          </MainContent>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
