import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BakeriesApi from '../../../api/baker-service'

const getBakeriesAsync = createAsyncThunk('bakeries/getBakeriesStatus', async (_, { getState }) => {
  try {
    return await BakeriesApi.handlerGetBakeries()
  } catch (e) {
    console.log(e)
  }
})
const getCitiesAsync = createAsyncThunk('bakeries/getCitiesStatus', async (_, { getState }) => {
  try {
    return await BakeriesApi.handlerGetCities()
  } catch (e) {
    console.log(e)
  }
})

const bakersSlice = createSlice({
  name: 'bakeries',
  initialState: {
    cities: [],
    bakeries: [],
  },
  extraReducers: {
    [getCitiesAsync.fulfilled]: (state, action) => {
      state.cities = action.payload
    },

    [getBakeriesAsync.fulfilled]: (state, action) => {
      state.bakeries = action.payload
    },
  },
})

export { getBakeriesAsync, getCitiesAsync }

export default bakersSlice
