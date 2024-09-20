import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/TipoContato'
import FiltroCard from '../../components/FiltroCard'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.TipoContato.AMIGO}
                criterio="tipoContato"
                legenda="amigo"
              />
              <FiltroCard
                valor={enums.TipoContato.FAMILIA}
                criterio="tipoContato"
                legenda="familia"
              />
              <FiltroCard
                valor={enums.TipoContato.TRABALHO}
                criterio="tipoContato"
                legenda="trabalho"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a tela de contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
