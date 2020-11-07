import React, { useEffect } from 'react'
import messages from '../../utils/messages'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveTamanho, readModal } from '../../store/ducks/pedido'
import ModalDefault from '../../components/ModalDefault'
import Tamanho from '../../pages/Tamanho'

const Tamanhos = () => {
  const { storeTamanhos, storePedido } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!storePedido.massa.id) {
      history.push('/massa')
    }
  }, [])

  const addItem = (item) => {
    if (item.id !== storePedido.tamanho.id) {
      dispatch(saveTamanho(item))
    }
  }

  const checkModal = () => {
    dispatch(readModal())
  }

  return (
    <>
      {storePedido.promocao && <ModalDefault title={messages.modal_title} description={messages.modal_description} confirmModal={() => checkModal()} />}
      <Tamanho tamanhos={storeTamanhos.dados} itemActive={storePedido.tamanho} clickItem={(item) => addItem(item)} title_page={messages.title_tamanho} />
    </>
  )
}

export default Tamanhos