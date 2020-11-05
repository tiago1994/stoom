import React from 'react'

import Tamanho from '../../pages/Tamanho'
import imageTamanho from "../../assets/images/tamanho.png";

const tamanho = () => {
  const tamanhos = [
    { "id": 1, "name": "Pequena", "image": imageTamanho, "suggestion": false },
    { "id": 2, "name": "Média", "image": imageTamanho, "suggestion": true },
    { "id": 3, "name": "Grande", "image": imageTamanho, "suggestion": false }
  ]

  const addItem = (item) => {
    console.log('item', item)
  }

  return <Tamanho tamanhos={tamanhos} clickItem={(item) => addItem(item)} />
}

export default tamanho;