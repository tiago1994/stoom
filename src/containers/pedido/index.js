import React from 'react'

import Pedido from '../../pages/Pedido'
import imageMassa from "../../assets/images/massa.png";
import imageTamanho from "../../assets/images/tamanho.png";
import imageRecheio from "../../assets/images/recheio.jpg";
import imageAdicional from "../../assets/images/adicionais.png";

const pedido = () => {
  const pedido = [
    { "id": 1, "name": "Integral", "image": imageMassa, "suggestion": true },
    { "id": 2, "name": "Média", "image": imageTamanho, "suggestion": true },
    { "id": 3, "name": "Marguerita", "image": imageRecheio, "suggestion": true },
    { "id": 4, "name": "Bacon", "image": imageAdicional, "suggestion": true }
  ]

  return <Pedido pedido={pedido} />
}

export default pedido;