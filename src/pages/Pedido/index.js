import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";

import imageMassa from "../../assets/images/massa.png";
import imageTamanho from "../../assets/images/tamanho.png";
import imageRecheio from "../../assets/images/recheio.jpg";
import imageAdicional from "../../assets/images/adicionais.png";
import "./style.css";

function Pedido() {
  const pedido = [
    {"name": "Integral", "image": imageMassa, "suggestion": true},
    {"name": "Média", "image": imageTamanho, "suggestion": true},
    {"name": "Marguerita", "image": imageRecheio, "suggestion": true},
    {"name": "Bacon", "image": imageAdicional, "suggestion": true}
  ]

  return (
    <div className="pageDefault">
      <TopoPagina texto={"Resumo do seu pedido"} />
      <div className="divItens">
        {pedido.map((item, key) => <ItemDefault data={item} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/massa'} title={'Ok'} />
      </div>
    </div>
  );
}

export default Pedido;