import React, { useEffect } from 'react'
import useHideBlocks from "../hook/useHideBlocks";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchJobById } from '../redux/jobsSlice'

import JobHeader from '../components/JobHeader'
import ApplicationForm from '../components/ApplicationForm'

const JobApplication = () => {
  const { hideBlocks } = useHideBlocks();
  const dispatch = useDispatch()
  let { jobId } = useParams()
  const job = useSelector((state) => state?.jobs?.job)
  const status = useSelector((state) => state?.jobs?.jobStatus)

  useEffect(() => {
    if (job?.id?.toString() !== jobId?.toString()) {
      dispatch(fetchJobById(jobId))
    }
  }, [dispatch, job, jobId])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    hideBlocks(true, true);
  }, [hideBlocks]);

  return (
    <div className="job-application">
      {status === "succeeded" && job?.id?.toString() === jobId?.toString() && (
        <>
          <JobHeader job={job} />
          <div class="wrapper">
            <ApplicationForm jobId={jobId} />
          </div>
        </>
      )}
    </div>
  );
}

export default JobApplication
