import React from 'react'
import ItemDefault from '../../components/ItemPadrao'
import BotaoProximo from '../../components/BotaoProximo'
import TopoPagina from '../../components/TopoPagina'

const Recheio = (props) => {
    return (
        <div className="conteudoPagina">
            <TopoPagina texto={"Selecione o recheio"} />
            <div className="divItens">
                {props.recheios.map((recheio, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} itemActive={props.itemActive} data={recheio} key={key} />)}
            </div>
            <div className="divButton">
                <BotaoProximo route={'/tamanho'} title={'Voltar Etapa'} />
                {props.itemActive.id && <BotaoProximo route={'/adicionais'} title={'Próxima Etapa'} />}
            </div>
        </div>
    )
}

export default Recheio