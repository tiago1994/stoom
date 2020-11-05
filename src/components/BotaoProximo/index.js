import React from "react";
import "./style.css";

function BotaoProximo(props) {
    return (
        <a href={props.route} className="buttonNext">{props.title}</a>
    );
}

export default BotaoProximo;