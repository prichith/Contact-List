function Pagination(){
    return(
        <div className="pagination container">
        <div className="pagination">
              <div className="pagesBox">
                  <span id="prevPage"><i className="fa-solid fa-angle-left"></i></span>
                  <div id="pages" className="pages">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div> 
                  <span id="nextPage"><i className="fa-solid fa-angle-right"></i></span>
              </div>
        </div>
      </div>
    )
}
export default Pagination;