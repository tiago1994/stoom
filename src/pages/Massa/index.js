import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import imageMassa from "../../assets/images/massa.png";
import "./style.css";

function Massa() {
  const massas = [
    {"name": "Tradicional", "image": imageMassa, "suggestion": true},
    {"name": "Integral", "image": imageMassa, "suggestion": false},
    {"name": "Grãos", "image": imageMassa, "suggestion": false},
  ]

  return (
    <div className="pageDefault">
      <TopoPagina texto={"Selecione a sua massa"} />
      <div className="divItens">
        {massas.map((massa, key) => <ItemDefault data={massa} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/tamanho'} title={'Próxima Etapa'} />
      </div>
    </div>
  );
}

export default Massa;