import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`pagination-btn ${currentPage === i ? "active" : ""}`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="pagination-nav"
      >
        &lt;
      </button>
      {pages}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="pagination-nav"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
