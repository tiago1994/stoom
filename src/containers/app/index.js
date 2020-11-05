import React from "react"

import {BrowserRouter as Router} from "react-router-dom"

import Content from './content'

export default function App() {
  return (
    <Router>
      <Content />
    </Router>
  )
}