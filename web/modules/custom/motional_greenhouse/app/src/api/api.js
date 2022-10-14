const API_URL = 'https://boards-api.greenhouse.io/v1/boards/motional'
const API_METADATA_DEPARTMENT_ID = 6037768003
const API_METADATA_WORKTYPE_ID = 4666697003

const checkStatus = (response) => {
  if (response.ok) {
    return response
  }

  throw Error(response.statusText)
}

const parseJSON = (response) => response.json()

export const handleError = (error) => {
  console.error('Request failed: ', error)
}

const fetcher = {
  get: (path, params) =>
    fetch(path, params).then(checkStatus).then(parseJSON).catch(handleError),
}

const getJobs = () => fetcher.get(`${API_URL}/jobs?content=true`)
const getJobById = (jobId) =>
  fetcher.get(`${API_URL}/jobs/${jobId}?questions=true`)
const getOffices = () => fetcher.get(`${API_URL}/offices?render_as=list`)
const getDepartments = () =>
  fetcher.get(`${API_URL}/departments?render_as=list`)
const getSchools = ({ term, page }) =>
  fetcher.get(`${API_URL}/education/schools?term=${term}&page=${page}`)
const getDisciplines = ({ term, page }) =>
  fetcher.get(`${API_URL}/education/disciplines?term=${term}&page=${page}`)
const getDegrees = ({ term, page }) =>
  fetcher.get(`${API_URL}/education/degrees?term=${term}&page=${page}`)

const api = {
  API_METADATA_DEPARTMENT_ID,
  API_METADATA_WORKTYPE_ID,
  getJobs,
  getJobById,
  getOffices,
  getDepartments,
  getSchools,
  getDisciplines,
  getDegrees,
}

export default api
