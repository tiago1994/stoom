import React, { useEffect } from 'react'
import messages from '../../utils/messages'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveIngrediente, readModal } from '../../store/ducks/pedido'
import { buscaTamanhos } from '../../store/ducks/tamanhos'
import ModalDefault from '../../components/ModalDefault'
import Ingredientes from '../../pages/Ingredientes'

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
      dispatch(saveIngrediente('tamanho', item))
    }
  }

  const checkModal = () => {
    dispatch(readModal())
  }

  useEffect(() => {
    dispatch(buscaTamanhos())
  }, [])

  return (
    <>
      {storePedido.promocao && <ModalDefault title={messages.modal_title} description={messages.modal_description} confirmModal={() => checkModal()} />}
      <Ingredientes dados={storeTamanhos.dados} itemActive={storePedido.tamanho} clickItem={(item) => addItem(item)} title_page={messages.title_tamanho} next={'/recheio'} titleNext={'Próxima Etapa'} back={'/massa'} />
    </>
  )
}

export default Tamanhos