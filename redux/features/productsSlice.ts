import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Product from '@/types/ProducType'

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  return data.products
})

type ProductsState = {
  data: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: ProductsState = {
  data: [],
  status: 'idle',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default productsSlice.reducer
