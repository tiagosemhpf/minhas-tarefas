import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'
import * as enums from '../../utils/enums/TipoContato'

type ContatosStade = {
  itens: Contato[]
}

const initialState: ContatosStade = {
  itens: [
    {
      id: 1,
      numero: '(43) 9 9999-9595',
      tipoContato: enums.TipoContato.FAMILIA,
      nome: 'João Cláudio Andaimes',
      email: 'joao_andaimes@cialtda.com.br'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (Contato) => Contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ContatoJaExiste = state.itens.find(
        (Contato) =>
          Contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (ContatoJaExiste) {
        alert('Já existe Contato com esse nome')
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]
        const ContatoNova = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }
        state.itens.push(ContatoNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
