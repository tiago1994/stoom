import React from 'react'

import Adicionais from '../../pages/Adicionais'

const adicionais = () => {
  const addItem = (item) => {
    console.log('item', item)
  }

  return <Adicionais clickItem={(item) => addItem(item)} />
}

export default adicionais