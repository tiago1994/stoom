import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import imageAdicionais from "../../assets/images/adicionais.png";
import "./style.css";

function Adicionais() {
  const massas = [
    {"name": "Bacon", "image": imageAdicionais, "suggestion": false},
    {"name": "Catupiry", "image": imageAdicionais, "suggestion": true},
    {"name": "Cheddar", "image": imageAdicionais, "suggestion": false}
  ]

  return (
    <div className="pageDefault">
      <TopoPagina texto={"Selecione o adicional"} />
      <div className="divItens">
        {massas.map((massa, key) => <ItemDefault data={massa} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/recheio'} title={'Voltar Etapa'} />
        <BotaoProximo route={'/pedido'} title={'Próxima Etapa'} />
      </div>
    </div>
  );
}

export default Adicionais;