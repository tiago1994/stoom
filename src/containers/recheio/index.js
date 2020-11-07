import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import messages from '../../utils/messages'
import { saveRecheio, readModal } from '../../store/ducks/pedido'
import ModalDefault from '../../components/ModalDefault'
import Recheio from '../../pages/Recheio'

const Recheios = () => {
  const { storeRecheios, storePedido } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!storePedido.tamanho.id) {
      history.push('/massa')
    }
  }, [])

  const addItem = (item) => {
    if(item.id !== storePedido.tamanho.id){
      dispatch(saveRecheio(item))
    }
  }

  const checkModal = () => {
    dispatch(readModal())
  }

  return (
    <>
      {storePedido.promocao&&<ModalDefault title={messages.modal_title} description={messages.modal_description} confirmModal={() => checkModal()} />}
      <Recheio recheios={storeRecheios.dados} itemActive={storePedido.recheio} clickItem={(item) => addItem(item)} title_page={messages.title_recheio} />
    </>
  )
}

export default Recheios