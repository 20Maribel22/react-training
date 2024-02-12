import React from "react";
import './Pagination.css';

function Pagination({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  let pagesCount = Math.ceil(totalCountries / countriesPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination__container">
      <ul className="pagination">
        {currentPage > 1 && (
          <button className="btn btn-primary ml-5" onClick={prevPage}>
            Prev Page
          </button>
        )}
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        {pagesCount > currentPage && (
          <button className="btn btn-primary ml-2" onClick={nextPage}>
            Next Page
          </button>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
