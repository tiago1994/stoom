import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import "./style.css";

function Massa(props) {
  return (
    <div className="pageDefault">
      <TopoPagina texto={"Selecione a sua massa"} />
      <div className="divItens">
        {props.massas.map((massa, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} data={massa} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/tamanho'} title={'Próxima Etapa'} />
      </div>
    </div>
  );
}

export default Massa;