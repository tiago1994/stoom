import React from 'react'
import ItemDefault from '../../components/ItemPadrao'
import BotaoProximo from '../../components/BotaoProximo'
import TopoPagina from '../../components/TopoPagina'

const Adicional = (props) => {
  return (
    <div className="conteudoPagina">
      <TopoPagina texto={"Selecione o adicional"} />
      <div className="divItens">
        {props.adicionais.map((massa, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} itemActive={props.itemActive} data={massa} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/recheio'} title={'Voltar Etapa'} />
        {props.itemActive.id && <BotaoProximo route={'/pedido'} title={'Próxima Etapa'} />}
      </div>
    </div>
  )
}

export default Adicional