import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import "./style.css";

function Tamanho(props) {
  return (
    <div className="pageDefault">
      <TopoPagina texto={"Selecione o tamanho"} />
      <div className="divItens">
        {props.tamanhos.map((tamanho, key) => <ItemDefault clickItem={(item) => props.clickItem(item)} data={tamanho} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/massa'} title={'Voltar Etapa'} />
        <BotaoProximo route={'/recheio'} title={'Próxima Etapa'} />
      </div>
    </div>
  );
}

export default Tamanho;