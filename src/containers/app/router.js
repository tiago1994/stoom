import React from "react"

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Massa from '../massa'
import Tamanho from '../tamanho'
import Recheio from '../recheio'
import Adicionais from '../adicionais'
import Pedido from '../pedido'

const router = () => {
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

export default router;