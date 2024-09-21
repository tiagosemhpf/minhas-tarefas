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
  nome,
  id,
  email
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setestaEditando] = useState(false)
  const [numero, setnumero] = useState('')

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setnumero(numeroOriginal)
    }
  }, [numeroOriginal])

  function cancelarEdicao() {
    setestaEditando(false)
    setnumero(numeroOriginal)
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.Nome>
          {estaEditando && <em>Editando contato: </em>}
          {nome}
        </S.Nome>
      </label>
      <S.Tag parametro="tipoContato">{tipoContato}</S.Tag>
      <S.Numero
        disabled={!estaEditando}
        value={numero}
        onChange={(evento) => setnumero(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
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
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setestaEditando(true)}>Editar</Botao>
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
