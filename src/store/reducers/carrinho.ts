import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itensNoCarrinho: Game[]
}
const initialState: CarrinhoState = {
  itensNoCarrinho: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itensNoCarrinho.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itensNoCarrinho.push(jogo)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
