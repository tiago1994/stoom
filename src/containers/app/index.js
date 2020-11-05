import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from '../../store/ducks'

import Routes from './router'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}