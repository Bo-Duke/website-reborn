import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import yaml from 'js-yaml'

import Sidebar from './components/Sidebar'
import rawData from './data/data.fr.yml'

import './style.css'

const data = yaml.load(rawData)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`

const App = () => {
  return (
    <Wrapper>
      <Sidebar data={data.about} />
      <div>
        <h1>Website reborn</h1>
        <h2>I'm remaking my website, woooo</h2>
      </div>
    </Wrapper>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
