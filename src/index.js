import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <h1>Website reborn</h1>
      <h2>I'm remaking my website, woooo</h2>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
