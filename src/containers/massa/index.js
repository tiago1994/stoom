import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveMassa, readModal } from '../../store/ducks/pedido'
import messages from '../../utils/messages'
import ModalDefault from '../../components/ModalDefault'
import Massa from '../../pages/Massa'

const Massas = (props) => {
  const { storeMassas, storePedido } = useSelector(state => state)
  const dispatch = useDispatch()

  const addItem = (item) => {
    if (item.id !== storePedido.massa.id) {
      dispatch(saveMassa(item))
    }
  }

  const checkModal = () => {
    dispatch(readModal())
  }

  return (
    <>
      {storePedido.promocao && <ModalDefault title={messages.modal_title} description={messages.modal_description} confirmModal={() => checkModal()} />}
      <Massa massas={storeMassas.dados} itemActive={storePedido.massa} clickItem={(item) => addItem(item)} title_page={messages.title_massas} />
    </>
  )
}

export default Massas