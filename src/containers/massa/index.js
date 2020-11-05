import React from 'react'
import { useSelector } from 'react-redux'
import Massa from '../../pages/Massa'

const Massas = () => {
  const {storeMassas} = useSelector(state => state)
  
  const addItem = (item) => {
    console.log('item', item)
  }

  return <Massa massas={storeMassas.dados} clickItem={(item) => addItem(item)} />
}

export default Massas