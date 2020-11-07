import React, { useState } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/ducks'
import { ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'
import Routes from './router'
import GlobalStyles from '../../styles/global'
import Switch from 'react-switch'

const App = () => {
  const [themeAtivo, setThemeAtivo] = useState(dark)
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeAtivo}>
        <GlobalStyles />
        <Router>
          <div className="pageDefault">
            <div className="topoPagina">
              <Switch
                onChange={() => setThemeAtivo(themeAtivo === light ? dark : light)}
                checked={themeAtivo === light}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={'#F5F5F5'}
              />
            </div>
            <Routes />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App