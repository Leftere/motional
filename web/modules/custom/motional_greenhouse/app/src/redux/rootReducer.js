import { combineReducers } from '@reduxjs/toolkit'
import jobs from './jobsSlice'
import departments from './departmentsSlice'
import offices from './officesSlice'
import metadata from './metadataSlice'

const rootReducer = combineReducers({
  jobs,
  departments,
  offices,
  metadata
})

export default rootReducer
