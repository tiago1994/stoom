import React from 'react'
import { Link } from 'react-router-dom'

const BotaoProximo = (props) => {
    return props.route ? <Link to={props.route} className="buttonNext">{props.title}</Link> : <button onClick={() => props.buttonPress()} className="buttonNext">{props.title}</button>
}

export default BotaoProximo