import { useSelector, useDispatch } from 'react-redux'
import { goNext, goPrevious, selectFilteredJobs } from '../redux/jobsSlice'
import Button from './Button'

const Pagination = () => {
  const dispatch = useDispatch()
  const results = useSelector(selectFilteredJobs)
  const shown = useSelector((state) => state?.jobs?.shown)

  return (
    <div className="pagination">
      <p>
        Showing {shown} of {results?.length} results
      </p>
      <Button onClick={() => dispatch(goPrevious())}>Previous</Button>
      <Button onClick={() => dispatch(goNext())}>Next</Button>
    </div>
  )
}

export default Pagination