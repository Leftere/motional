import { createSlice, createSelector } from '@reduxjs/toolkit'
import api from '../api/api'

const jobs = (state) => state?.jobs?.results

export const selectDepartments = createSelector(
  [jobs], (jobs) => {
    let metadata = jobs.map(job => job?.metadata.filter(data => data.id === api.API_METADATA_DEPARTMENT_ID)[0])

    return metadata.filter((value, index, array) => array.findIndex(t => t.value === value.value && value.value !== null) === index)
  }
)

export const selectWorkTypes = createSelector(
  [jobs], (jobs) => {
    let metadata = jobs.map(job => job?.metadata.filter(data => data.id === api.API_METADATA_WORKTYPE_ID)[0])

    return metadata.filter((value, index, array) => array.findIndex(t => t.value === value.value && value.value !== null) === index)
  }
)

const metadataSlice = createSlice({
  name: 'metadata',
  initialState: {
    workType: '',
    departmentForWebsite: ''
  },
  reducers: {
    setWorkType(state, action) {
      state.workType = action.payload
    },
    setDepartmentForWebsite(state, action) {
      state.departmentForWebsite = action.payload
    }
  }
})

export const { setWorkType, setDepartmentForWebsite } = metadataSlice.actions

export default metadataSlice.reducer
