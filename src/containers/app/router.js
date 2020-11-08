import React, { lazy, Suspense } from "react"
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Loading from '../../components/Loading'

const Massa = lazy(() => import('../massa'))
const Tamanho = lazy(() => import('../tamanho'))
const Recheio = lazy(() => import('../recheio'))
const Adicional = lazy(() => import('../adicional'))
const Pedido = lazy(() => import('../pedido'))

const router = () => {
  return (
    <Switch>
      <Redirect path="/" to='/massa' exact />
      <Suspense fallback={<Loading/>}>
        <Route path='/massa'><Massa /></Route>
        <Route path="/tamanho"><Tamanho /></Route>
        <Route path="/recheio"><Recheio /></Route>
        <Route path="/adicional"><Adicional /></Route>
        <Route path="/pedido"><Pedido /></Route>
      </Suspense>
    </Switch>
  )
}

export default router