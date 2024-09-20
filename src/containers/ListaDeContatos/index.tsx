import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Nome } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltradas = itens
    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'tipoContato') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.tipoContato === valor
        )
      }
      return contatosFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltregem = (quantiade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantiade} contato(s) encontrado(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantiade} contato(s) encontrado(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }
    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltregem(contatos.length)

  return (
    <MainContainer>
      <Nome as="p">{mensagem}</Nome>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              numero={t.numero}
              nome={t.nome}
              tipoContato={t.tipoContato}
              email={t.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
