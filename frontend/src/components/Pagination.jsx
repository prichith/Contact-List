import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  fetchContacts,
  setContactsPerPage,
} from "../redux/contactList";

function Pagination() {
  const [pageSpans, setPageSpans] = useState([]);
  const pageRefs = useRef([]);
  const { totalContact, contactLimit, searchText } = useSelector(
    (state) => state.list
  );
  let pages = Math.ceil(totalContact / contactLimit);
  const dispatch = useDispatch();

  useEffect(() => {
    const newPageSpans = [];
    for (let i = 1; i <= pages; i++) {
      newPageSpans.push(
        <span
          key={i}
          ref={(el) => (pageRefs.current[i] = el)}
          className={i === 1 ? "pageActive" : ""}
          onClick={() => changePage(i)}
        >
          {i}
        </span>
      );
    }
    setPageSpans(newPageSpans);
  }, [pages]);

  function changePage(pageNumber) {
    pageBtnActive(pageNumber);
    dispatch(
      fetchContacts({
        page: pageNumber,
        limit: contactLimit,
        search: searchText,
      })
    ).then((result) => {
      const newLimit = result.payload.limit;
      dispatch(setContactsPerPage(newLimit));
    });
  }

  function pageBtnActive(ID) {
    pageRefs.current.forEach((ref) => {
      if (ref) ref.classList.remove("pageActive");
    });

    if (pageRefs.current[ID]) {
      pageRefs.current[ID].classList.add("pageActive");
    }
  }

  return (
    <div className="pagination container">
      <div className="pagination">
        <div className="pagesBox">
          <span id="prevPage">
            <i className="fa-solid fa-angle-left"></i>
          </span>
          <div id="pages" className="pages">
            {pageSpans}
          </div>
          <span id="nextPage">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
