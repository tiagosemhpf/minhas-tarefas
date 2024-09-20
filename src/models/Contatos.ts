import * as enums from '../utils/enums/TipoContato'

class Contato {
  nome: string
  tipoContato: enums.TipoContato
  numero: string
  id: number
  email: string

  constructor(
    nome: string,
    tipoContato: enums.TipoContato,
    numero: string,
    id: number,
    email: string
  ) {
    this.nome = nome
    this.tipoContato = tipoContato
    this.numero = numero
    this.id = id
    this.email = email
  }
}

export default Contato
