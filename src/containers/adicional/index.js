import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveIngrediente, readModal } from '../../store/ducks/pedido'
import messages from '../../utils/messages'
import ModalDefault from '../../components/ModalDefault'
import Ingredientes from '../../pages/Ingredientes'

const Adicional = () => {
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
      dispatch(saveIngrediente('adicional', item))
    }
  }

  const checkModal = () => {
    dispatch(readModal())
  }

  return (
    <>
      {storePedido.promocao&&<ModalDefault title={messages.modal_title} description={messages.modal_description} confirmModal={() => checkModal()} />}
      <Ingredientes dados={storeAdicionais.dados} itemActive={storePedido.adicional} clickItem={(item) => addItem(item)} title_page={messages.title_adicional} next={'/pedido'} titleNext={'Finalizar'} back={'/recheio'} />
    </>
  )
}

export default Adicional