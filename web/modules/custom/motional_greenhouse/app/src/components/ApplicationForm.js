/* global Grnhse */
import { useEffect } from 'react'

const ApplicationForm = ({ jobId }) => {

  useEffect(() => {
    Grnhse.Iframe.load(jobId);
  }, [jobId])

  return (
    <div id="grnhse_app"></div>)
}

export default ApplicationForm
