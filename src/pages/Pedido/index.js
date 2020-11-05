import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import "./style.css";

function Pedido(props) {
  return (
    <div className="pageDefault">
      <TopoPagina texto={"Resumo do seu pedido"} />
      <div className="divItens">
        {props.pedido.map((item, key) => <ItemDefault clickItem={() => {}} data={item} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/massa'} title={'Ok'} />
      </div>
    </div>
  );
}

export default Pedido;