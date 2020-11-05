import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Massa from '../../containers/massa'
import Tamanho from '../../containers/tamanho'
import Recheio from '../../containers/recheio'
import Adicionais from '../../containers/adicionais'
import Pedido from '../../containers/pedido'

export default () => {
  return (
    <Switch>
      <Redirect path="/" to="/massa" exact />
      <Route path="/massa"><Massa /></Route>
      <Route path="/tamanho"><Tamanho /></Route>
      <Route path="/recheio"><Recheio /></Route>
      <Route path="/adicionais"><Adicionais /></Route>
      <Route path="/pedido"><Pedido /></Route>
    </Switch>
  )
}