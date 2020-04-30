import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BakeriesApi from '../../../api/baker-service'

const getBakeriesAsync = createAsyncThunk('bakeries/getBakeriesStatus', async (_, { getState }) => {
  return BakeriesApi.handlerGetBakeries()
    .then((list) => {
      return list
    })
    .catch((e) => {
      return `${e} + 'error'`
    })
})
const getCitiesAsync = createAsyncThunk('bakeries/getCitiesStatus', async (_, { getState }) => {
  return BakeriesApi.handlerGetCities()
    .then((list) => {
      return list
    })
    .catch((e) => {
      return `${e} + 'error`
    })
})

const bakersSlice = createSlice({
  name: 'bakeries',
  initialState: {
    cities: {
      citiesList: [],
      error: null,
      isLoading: false,
    },
    bakeries: {
      bakeriesList: [],
      error: null,
      isLoading: false,
    },
  },
  extraReducers: {
    [getCitiesAsync.fulfilled]: (state, action) => {
      state.cities.citiesList = action.payload
      state.cities.isLoading = true
    },

    [getBakeriesAsync.fulfilled]: (state, action) => {
      state.bakeries.bakeriesList = action.payload
      state.bakeries.isLoading = true
    },
  },
})

export { getBakeriesAsync, getCitiesAsync }

export default bakersSlice
