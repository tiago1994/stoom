import React from 'react'

import Recheio from '../../pages/Recheio'
import imageRecheio from "../../assets/images/recheio.jpg";

const recheio = () => {
  const recheios = [
    { "id": 1, "name": "Calabresa", "image": imageRecheio, "suggestion": false },
    { "id": 2, "name": "Portuguesa", "image": imageRecheio, "suggestion": false },
    { "id": 3, "name": "Marguerita", "image": imageRecheio, "suggestion": false },
    { "id": 4, "name": "Frango com catupiry", "image": imageRecheio, "suggestion": true },
    { "id": 5, "name": "Muçarela", "image": imageRecheio, "suggestion": false },
    { "id": 6, "name": "Napolitana", "image": imageRecheio, "suggestion": false },
    { "id": 7, "name": "Brigadeiro", "image": imageRecheio, "suggestion": false },
    { "id": 8, "name": "Romeu e Julieta", "image": imageRecheio, "suggestion": false },
    { "id": 9, "name": "Califórnia", "image": imageRecheio, "suggestion": false }
  ]

  const addItem = (item) => {
    console.log('item', item)
  }

  return <Recheio recheios={recheios} clickItem={(item) => addItem(item)} />
}

export default recheio;