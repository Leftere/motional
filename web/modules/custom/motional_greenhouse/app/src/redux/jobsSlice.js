import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Fuse from 'fuse.js'
import API from '../api/api'

const jobs = (state) => state?.jobs?.results
const officeId = (state) => state?.offices?.officeId
const departmentForWebsite = (state) => state?.metadata?.departmentForWebsite
const searchTerm = (state) => state?.jobs?.searchTerm
const workType = (state) => state?.metadata?.workType

export const reduceBySearchTerm = (filteredJobs, searchTerm) => {
  if (!searchTerm || searchTerm === '') {
    return filteredJobs
  }

  const options = {
    threshold: 0.4,
    keys: [
      {
        name: 'title',
        weight: 0.8,
      },
      {
        name: 'content',
        weight: 0.2,
      },
    ],
  }

  const fuse = new Fuse(filteredJobs, options)
  return fuse.search(searchTerm).map((result) => result.item)
}

export const reduceByOffice = (filteredJobs, officeId) => {
  if (!officeId) {
    return filteredJobs
  }

  return filteredJobs?.filter((job) =>
    job?.offices?.some(
      (office) =>
        office?.id.toString() === officeId.toString() && office.location === job.location.name
    )
  )
}

export const reduceByDepartment = (filteredJobs, departmentForWebsite) => {
  if (!departmentForWebsite || departmentForWebsite === '') {
    return filteredJobs
  }

  return filteredJobs?.filter((job) =>
    job?.metadata[1]?.value === departmentForWebsite
  )
}

// export const reduceByDepartment = (filteredJobs, departments, departmentId) => {
//   if (!departmentId) {
//     return filteredJobs
//   }

//   const activeDeparment = departments.filter(
//     (department) => department.id === departmentId
//   )[0]
//   const child_ids = activeDeparment?.child_ids

//   return filteredJobs?.filter((job) =>
//     job?.departments?.some((department) => child_ids?.includes(department?.id))
//   )
// }

export const reduceByInternal = (filteredJobs) => {
  const uniqueIds = new Set()
  const unique = filteredJobs.filter((job) => {
    const isDuplicate = uniqueIds.has(job.internal_job_id)
    uniqueIds.add(job.internal_job_id)
    if (!isDuplicate) {
      return true
    }
    return false
  })
  return unique
}

export const reduceByWorkType = (filteredJobs, workType) => {
  if (!workType || workType === '') {
    return filteredJobs
  }

  return filteredJobs?.filter((job) =>
    job?.metadata[0]?.value === workType
  )
}

export const reduceByInternalId = (filteredJobs, internalId) => {
  if (!internalId) {
    return filteredJobs
  }

  return filteredJobs?.filter((job) => job?.internal_job_id === internalId)
}

export const selectFilteredJobs = createSelector(
  [searchTerm, officeId, departmentForWebsite, jobs, workType],
  (searchTerm, officeId, departmentForWebsite, jobs, workType) => {
    let filtered = jobs

    filtered = reduceBySearchTerm(filtered, searchTerm)
    filtered = reduceByOffice(filtered, officeId)
    filtered = reduceByDepartment(filtered, departmentForWebsite)
    filtered = reduceByWorkType(filtered, workType)
    filtered = reduceByInternal(filtered)

    return filtered
  }
)

export const selectDepartmentForWebsite = createSelector(
  [jobs], (jobs) => {
    let metadata = jobs.map(job => job?.metadata.filter(data => data.id === 6037768003)[0])

    return metadata.filter((value, index, array) => array.findIndex(t => t.value === value.value && value.value !== null) === index)
  }
)

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await API.getJobs()
  return response
})

export const fetchJobById = createAsyncThunk(
  'jobs/fetchJobById',
  async (jobId) => {
    const response = await API.getJobById(jobId)
    return response
  }
)

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    status: 'idle',
    results: [],
    currentPage: 0,
    perPage: 10,
    searchTerm: '',
    jobId: '',
    job: '',
    jobStatus: 'idle',
    error: null,
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    resetJobsFilters(state) {
      state.searchTerm = ''
      state.currentPage = 0
    },
  },
  extraReducers: {
    [fetchJobs.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchJobs.fulfilled]: (state, action) => {
      state.results = action?.payload?.jobs
      state.status = 'succeeded'
    },
    [fetchJobs.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },
    [fetchJobById.pending]: (state) => {
      state.jobStatus = 'loading'
    },
    [fetchJobById.fulfilled]: (state, action) => {
      state.job = action?.payload
      state.jobStatus = 'succeeded'
    },
    [fetchJobById.rejected]: (state, action) => {
      state.error = action.payload
      state.jobStatus = 'failed'
    },
  },
})

export const { goPrevious, goNext, setCurrentPage, setSearchTerm, setJobId, resetJobsFilters } =
  jobsSlice.actions

export default jobsSlice.reducer
