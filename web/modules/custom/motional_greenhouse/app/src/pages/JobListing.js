import React, { useEffect } from 'react'
import useHideBlocks from "../hook/useHideBlocks";
import { useDispatch, useSelector } from 'react-redux'

import { fetchJobs } from '../redux/jobsSlice'
import { fetchDepartments } from '../redux/departmentsSlice'
import { fetchOffices } from '../redux/officesSlice'

import JobList from '../components/JobList'
import Filters from '../components/Filters'

const JobListing = () => {
  const { hideBlocks } = useHideBlocks();
  const dispatch = useDispatch()
  const jobsStatus = useSelector((state) => state.jobs.status)
  const officesStatus = useSelector((state) => state.offices.status)
  const departmentsStatus = useSelector((state) => state.departments.status)

  useEffect(() => {
    if (jobsStatus === 'idle') {
      dispatch(fetchJobs())
    }
  }, [dispatch, jobsStatus])

  useEffect(() => {
    if (officesStatus === 'idle') {
      dispatch(fetchOffices())
    }
  }, [dispatch, officesStatus])

  useEffect(() => {
    if (departmentsStatus === 'idle') {
      dispatch(fetchDepartments())
    }
  }, [dispatch, departmentsStatus])

  useEffect(() => {
    hideBlocks(false, true);
  }, [hideBlocks]);

  return (
    <div className="job-listing">
      <Filters />
      <JobList />
    </div>
  );
}

export default JobListing
