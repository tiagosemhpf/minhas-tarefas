import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Nome } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './style'
import * as enums from '../../utils/enums/TipoContato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [tipoContato, setTipoContato] = useState(enums.TipoContato.AMIGO)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        tipoContato,
        numero,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Nome>Novo contato</Nome>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <Campo
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
          type="text"
          placeholder="Número do contato"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="string"
          placeholder="E-mail do contato"
        />
        <Opcoes>
          <p>Tipo de contato</p>
          {Object.values(enums.TipoContato).map((TipoContato) => (
            <Opcao key={TipoContato}>
              <input
                value={TipoContato}
                name="TipoContato"
                type="radio"
                onChange={(evento) =>
                  setTipoContato(evento.target.value as enums.TipoContato)
                }
                id={TipoContato}
                defaultChecked={TipoContato === enums.TipoContato.AMIGO}
              />{' '}
              <label htmlFor={TipoContato}>{TipoContato}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
