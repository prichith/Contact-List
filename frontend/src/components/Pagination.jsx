import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchContacts } from "../redux/contactList";

function Pagination() {
  const [pageSpans, setPageSpans] = useState([]);
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
          id={`page${i}`}
          className={i === 1 ? "pageActive" : ""}
          onClick={() => changePage(i)}
        >
          {i}
        </span>
      );
    }
    setPageSpans(newPageSpans);
  }, [changePage,pages]);

  function changePage(pageNumber) {
    pageBtnActive(pageNumber);
    dispatch(
      fetchContacts({
        page: pageNumber,
        limit: contactLimit,
        search: searchText,
      })
    );
  }

  function pageBtnActive(ID) {
    let activePage = document.getElementById(`page${ID}`);
    for (let i = 1; i <= pages; i++) {
      if (
        document.getElementById("page" + i).classList.contains("pageActive")
      ) {
        document.getElementById("page" + i).classList.remove("pageActive");
      }
    }
    activePage.classList.add("pageActive");
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
