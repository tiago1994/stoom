import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import imageRecheio from "../../assets/images/recheio.jpg";
import "./style.css";

function Recheio() {
    const recheios = [
        { "name": "Calabresa", "image": imageRecheio, "suggestion": false },
        { "name": "Portuguesa", "image": imageRecheio, "suggestion": false },
        { "name": "Marguerita", "image": imageRecheio, "suggestion": false },
        { "name": "Frango com catupiry", "image": imageRecheio, "suggestion": true },
        { "name": "Muçarela", "image": imageRecheio, "suggestion": false },
        { "name": "Napolitana", "image": imageRecheio, "suggestion": false },
        { "name": "Brigadeiro", "image": imageRecheio, "suggestion": false },
        { "name": "Romeu e Julieta", "image": imageRecheio, "suggestion": false },
        { "name": "Califórnia", "image": imageRecheio, "suggestion": false }
    ]

    return (
        <div className="pageDefault">
            <TopoPagina texto={"Selecione o recheio"} />
            <div className="divItens">
                {recheios.map((recheio, key) => <ItemDefault data={recheio} key={key} />)}
            </div>
            <div className="divButton">
                <BotaoProximo route={'/tamanho'} title={'Voltar Etapa'} />
                <BotaoProximo route={'/adicionais'} title={'Próxima Etapa'} />
            </div>
        </div>
    );
}

export default Recheio;