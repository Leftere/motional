import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../api/api'

export const fetchOffices = createAsyncThunk(
  'offices/fetchOffices',
  async () => {
    const response = await API.getOffices()
    return response
  }
)

const officesSlice = createSlice({
  name: 'offices',
  initialState: {
    status: 'idle',
    results: [],
    error: null,
    officeId: '',
  },
  reducers: {
    setOfficeId(state, action) {
      state.officeId = action.payload.toString()
    },
    resetOfficesFilters(state) {
      state.officeId = ''
    }
  },
  extraReducers: {
    [fetchOffices.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchOffices.fulfilled]: (state, action) => {
      state.results = action?.payload?.offices
      state.status = 'succeeded'
    },
    [fetchOffices.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },
  },
})

export const { setOfficeId, resetOfficesFilters } = officesSlice.actions

export default officesSlice.reducer
