import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/TipoContato'
import { Botao } from '../../styles'

type TagProps = {
  tipo?: enums.TipoContato
  parametro: 'tipoContato'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.tipo === enums.TipoContato.AMIGO) {
    return variaveis.azulEscuro
  }
  if (props.tipo === enums.TipoContato.FAMILIA) {
    return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;

  input {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    border: 1px solid ${variaveis.cinzaClaro};
    border-radius: 8px;
    padding: 4px 8px;
    width: 100%;
    background-color: #fff;
  }

  input:disabled {
    background-color: transparent;
    border: none;
  }
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Numero = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Email = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${variaveis.cinzaClaro};
  border-radius: 8px;

  &:disabled {
    background-color: transparent;
    border: none;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba (0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
