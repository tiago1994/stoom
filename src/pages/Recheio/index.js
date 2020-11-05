import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import "./style.css";

function Recheio(props) {
    return (
        <div className="pageDefault">
            <TopoPagina texto={"Selecione o recheio"} />
            <div className="divItens">
                {props.recheios.map((recheio, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} data={recheio} key={key} />)}
            </div>
            <div className="divButton">
                <BotaoProximo route={'/tamanho'} title={'Voltar Etapa'} />
                <BotaoProximo route={'/adicionais'} title={'Próxima Etapa'} />
            </div>
        </div>
    );
}

export default Recheio;