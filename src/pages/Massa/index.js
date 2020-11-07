import React from 'react'
import ItemDefault from '../../components/ItemPadrao'
import BotaoProximo from '../../components/BotaoProximo'
import TopoPagina from '../../components/TopoPagina'

const Massa = (props) => {
  return (
    <div className="conteudoPagina">
      <TopoPagina texto={props.title_page} />
      <div className="divItens">
        {props.massas.map((massa, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} itemActive={props.itemActive} data={massa} key={key} />)}
      </div>
      <div className="divButton">
        {props.itemActive.id && <BotaoProximo route={'/tamanho'} title={'Próxima Etapa'} />}
      </div>
    </div>
  )
}

export default Massa