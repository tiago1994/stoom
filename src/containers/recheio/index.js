import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveIngrediente, readModal } from '../../store/ducks/pedido'
import messages from '../../utils/messages'
import ModalDefault from '../../components/ModalDefault'
import Ingredientes from '../../pages/Ingredientes'

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
    if(item.id !== storePedido.recheio.id){
      dispatch(saveIngrediente('recheio', item))
    }
  }

  const checkModal = () => {
    dispatch(readModal())
  }

  return (
    <>
      {storePedido.promocao&&<ModalDefault title={messages.modal_title} description={messages.modal_description} confirmModal={() => checkModal()} />}
      <Ingredientes dados={storeRecheios.dados} itemActive={storePedido.recheio} clickItem={(item) => addItem(item)} title_page={messages.title_recheio} next={'/adicional'} titleNext={'Próxima Etapa'} back={'/tamanho'} />
    </>
  )
}

export default Recheios