import React from 'react'
import ItemDefault from '../../components/ItemPadrao'
import BotaoProximo from '../../components/BotaoProximo'
import TopoPagina from '../../components/TopoPagina'

const Ingredientes = (props) => {
  return (
    <div className="conteudoPagina">
      <TopoPagina texto={props.title_page} />
      <div className="divItens">
        {props.dados.map((massa, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} itemActive={props.itemActive} data={massa} key={key} />)}
      </div>
      <div className="divButton">
        {props.back && <BotaoProximo route={props.back} title={'Voltar Etapa'} />}
        {((props.itemActive && props.itemActive.id) || props.finalizar) && <BotaoProximo route={props.next} title={props.titleNext} buttonPress={() => props.buttonPress()} />}
      </div>
    </div>
  )
}

export default Ingredientes