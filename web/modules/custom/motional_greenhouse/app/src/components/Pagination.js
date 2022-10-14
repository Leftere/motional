import ReactPaginate from 'react-paginate'
import SVG from "react-inlinesvg";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage, selectFilteredJobs } from '../redux/jobsSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  const perPage = useSelector((state) => state?.jobs?.perPage)
  const results = useSelector(selectFilteredJobs)
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const handlePageChange = (e) => {
    dispatch(setCurrentPage(e.selected));
    scrollToTop();
  };

  let totalPages = Math.ceil(results?.length / perPage)

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <SVG
            src="/modules/custom/motional_greenhouse/app/build/images/icons/arrow-next.svg"
            title="Next"
          />
        }
        onPageChange={handlePageChange}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        previousLabel={
          <SVG
            src="/modules/custom/motional_greenhouse/app/build/images/icons/arrow-prev.svg"
            title="Previous"
          />
        }
      />
    </div>
  );
}

export default Pagination