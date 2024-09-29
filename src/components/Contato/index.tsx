import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contatos'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  numero: numeroOriginal,
  tipoContato,
  nome: nomeOriginal,
  id,
  email: emailOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setestaEditando] = useState(false)

  const [numero, setnumero] = useState('')

  const [nome, setNome] = useState('')

  const [email, setEmail] = useState('')

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setnumero(numeroOriginal)
    }
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [numeroOriginal, nomeOriginal, emailOriginal])

  function cancelarEdicao() {
    setestaEditando(false)
    setnumero(numeroOriginal)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      {}
      <label htmlFor={nome}>
        <S.Nome>
          {estaEditando && <em>Editando contato: </em>}
          {}
          <input
            disabled={!estaEditando}
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Nome do contato"
          />
        </S.Nome>
      </label>
      <S.Tag parametro="tipoContato">{tipoContato}</S.Tag>
      {}
      <S.Numero
        disabled={!estaEditando}
        value={numero}
        onChange={(evento) => setnumero(evento.target.value)}
      />
      {}
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="Email"
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            {}
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    numero,
                    tipoContato,
                    nome,
                    id,
                    email
                  })
                )
                setestaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            {}
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            {}
            <Botao onClick={() => setestaEditando(true)}>Editar</Botao>
            {}
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
