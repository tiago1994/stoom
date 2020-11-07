import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { cleanOrder, readModal } from '../../store/ducks/pedido'
import messages from '../../utils/messages'
import ModalDefault from '../../components/ModalDefault'
import Pedido from '../../pages/Pedido'

const Pedidos = () => {
  const { storePedido } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!storePedido.adicional.id) {
      history.push('/massa')
    }
  }, [])

  const buttonPress = () => {
    dispatch(cleanOrder())
  }

  const checkModal = () => {
    dispatch(readModal())
    history.push('/massa')
  }

  return (
    <>
      {storePedido.promocao&&<ModalDefault title={messages.modal_title_finalizado} description={messages.modal_description_finalizado} confirmModal={() => checkModal()} />}
      <Pedido pedido={storePedido} buttonPress={() => buttonPress()} title_page={messages.title_pedido} />
    </>
  )
}

export default Pedidos