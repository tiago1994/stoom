import React from 'react'
import ItemDefault from '../../components/ItemPadrao'
import BotaoProximo from '../../components/BotaoProximo'
import TopoPagina from '../../components/TopoPagina'

const Tamanho = (props) => {
  return (
    <div className="conteudoPagina">
      <TopoPagina texto={"Selecione o tamanho"} />
      <div className="divItens">
        {props.tamanhos.map((tamanho, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} itemActive={props.itemActive} data={tamanho} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/massa'} title={'Voltar Etapa'} />
        {props.itemActive.id && <BotaoProximo route={'/recheio'} title={'Próxima Etapa'} />}
      </div>
    </div>
  )
}

export default Tamanho