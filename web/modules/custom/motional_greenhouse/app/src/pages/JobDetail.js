import React, { useEffect } from 'react'
import useHideBlocks from "../hook/useHideBlocks";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { decode } from 'html-entities'
import { fetchJobById } from '../redux/jobsSlice'

import JobHeader from '../components/JobHeader'
import Button from '../components/Button'

const JobDetail = () => {
  const { hideBlocks } = useHideBlocks();
  const dispatch = useDispatch()
  let { jobId } = useParams()
  const job = useSelector((state) => state.jobs.job)
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
    hideBlocks(true, false);
  }, [hideBlocks]);

  return (
    <div className="job-detail">
      {status === "loading" && <h2>Loading...</h2>}

      {status === "succeeded" && job?.id?.toString() === jobId?.toString() && (
        <>
          <JobHeader job={job} />

          <div className="job-detail__inner">
            {job?.content && parse(decode(job?.content))}

            <div className="job-detail__button">
              <div>
                <Button className="btn--main" to={"apply"} icon={true}>
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default JobDetail
