import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import API from '../api/api'

const departments = (state) => state?.departments?.results

export const fetchDepartments = createAsyncThunk(
  'departments/fetchDepartments',
  async () => {
    const response = await API.getDepartments()
    return response
  }
)

export const selectTopLevelDepartments = createSelector(
  [departments],
  (departments) =>
    departments?.filter(
      (department) =>
        department?.parent_id === null && department?.child_ids?.length
    )
)

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    status: 'idle',
    results: [],
    error: null,
    departmentId: '',
  },
  reducers: {
    setDepartmentId(state, action) {
      state.departmentId = action.payload
    },
    resetDepartmentsFilters(state) {
      state.departmentId = ''
    },
  },
  extraReducers: {
    [fetchDepartments.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchDepartments.fulfilled]: (state, action) => {
      state.results = action?.payload?.departments
      state.status = 'succeeded'
    },
    [fetchDepartments.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },
  },
})

export const { setDepartmentId, resetDepartmentsFilters } = departmentsSlice.actions

export default departmentsSlice.reducer
