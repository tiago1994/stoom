import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveAdicional, readModal } from '../../store/ducks/pedido'
import messages from '../../utils/messages'
import ModalDefault from '../../components/ModalDefault'
import Adicional from '../../pages/Adicional'

const Adicionais = () => {
  const { storeAdicionais, storePedido } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!storePedido.recheio.id) {
      history.push('/massa')
    }
  }, [])

  const addItem = (item) => {
    if(item.id !== storePedido.adicional.id){
      dispatch(saveAdicional(item))
    }
  }

  const checkModal = () => {
    dispatch(readModal())
  }

  return (
    <>
      {storePedido.promocao&&<ModalDefault title={messages.modal_title} description={messages.modal_description} confirmModal={() => checkModal()} />}
      <Adicional adicionais={storeAdicionais.dados} itemActive={storePedido.adicional} clickItem={(item) => addItem(item)} title_page={messages.title_adicional} />
    </>
  )
}

export default Adicionais