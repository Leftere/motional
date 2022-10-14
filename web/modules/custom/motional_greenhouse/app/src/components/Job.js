import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { reduceByInternalId } from '../redux/jobsSlice'
import SVG from 'react-inlinesvg'

const Job = ({ job }) => {
  const jobs = useSelector((state) => state.jobs.results)
  const internalJobIdsMatch = reduceByInternalId(jobs, job?.internal_job_id)

  return (
    <li className="job">
      <p className="job__label">{job?.departments[0]?.name}</p>
      <h2 className="job__title">
        <Link to={`/${internalJobIdsMatch[0]?.id}`}>{job?.title}</Link>
      </h2>
      {job?.offices && (
        <div className="job__offices">
          <SVG
            src="/modules/custom/motional_greenhouse/app/build/images/icons/marker.svg"
            title="Office locations"
          />
          <p>
            {Array.from(job?.offices?.map((office) => office?.name)).join(", ")}
          </p>
        </div>
      )}
    </li>
  );
}

export default Job
