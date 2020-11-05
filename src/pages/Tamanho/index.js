import React from "react";
import ItemDefault from "../../components/ItemPadrao";
import BotaoProximo from "../../components/BotaoProximo";
import TopoPagina from "../../components/TopoPagina";
import imageTamanho from "../../assets/images/tamanho.png";
import "./style.css";

function Tamanho() {
  const massas = [
    {"name": "Pequena", "image": imageTamanho, "suggestion": false},
    {"name": "Média", "image": imageTamanho, "suggestion": true},
    {"name": "Grande", "image": imageTamanho, "suggestion": false}
  ]

  return (
    <div className="pageDefault">
      <TopoPagina texto={"Selecione o tamanho"} />
      <div className="divItens">
        {massas.map((massa, key) => <ItemDefault data={massa} key={key} />)}
      </div>
      <div className="divButton">
        <BotaoProximo route={'/massa'} title={'Voltar Etapa'} />
        <BotaoProximo route={'/recheio'} title={'Próxima Etapa'} />
      </div>
    </div>
  );
}

export default Tamanho;