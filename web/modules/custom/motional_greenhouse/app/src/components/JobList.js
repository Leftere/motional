import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredJobs } from '../redux/jobsSlice'

import Job from './Job'
import Pagination from './Pagination'

const JobList = () => {
  const status = useSelector((state) => state?.jobs?.status)
  const perPage = useSelector((state) => state?.jobs?.perPage)
  const currentPage = useSelector((state) => state?.jobs?.currentPage)
  const results = useSelector(selectFilteredJobs)
  return (
    <section className="job-list">
      {status === 'loading' && (
        <div className="job-list__loading">
          <h2>Loading...</h2>
        </div>
      )}

      {status === 'succeeded' && results.length === 0 && (
        <div className="job-list__results">
          <h2>No Results.</h2>
        </div>
      )}

      {status === 'succeeded' && results.length > 0 && (
        <div className="job-list__results">
          <p>
            Showing <strong>{(currentPage * perPage) + 1} to {perPage > results.length ? results.length : (currentPage * perPage) + perPage}</strong> of <strong>{results?.length}</strong> matching positions
          </p>
          <ul>
            {results.slice((currentPage * perPage), (currentPage * perPage) + perPage)?.map((job, i) => (
              <Job key={job?.id} job={job} index={i} />
            ))}
          </ul>
          { results.length > perPage && <Pagination /> }
        </div>
      )}
    </section>
  )
}

export default JobList
