import React from 'react'
import ItemDefault from '../../components/ItemPadrao'
import BotaoProximo from '../../components/BotaoProximo'
import TopoPagina from '../../components/TopoPagina'

const Pedido = (props) => {
  return (
    <div className="conteudoPagina">
      <TopoPagina texto={"Resumo do seu pedido"} />
      <div className="divItens">
        <ItemDefault clickItem={() => { }} data={props.pedido.massa} itemActive={props.pedido.massa} />
        <ItemDefault clickItem={() => { }} data={props.pedido.tamanho} itemActive={props.pedido.tamanho} />
        <ItemDefault clickItem={() => { }} data={props.pedido.recheio} itemActive={props.pedido.recheio} />
        <ItemDefault clickItem={() => { }} data={props.pedido.adicional} itemActive={props.pedido.adicional} />
      </div>
      <div className="divButton">
        <BotaoProximo route={''} title={'Ok'} buttonPress={() => props.buttonPress()} />
      </div>
    </div>
  )
}

export default Pedido