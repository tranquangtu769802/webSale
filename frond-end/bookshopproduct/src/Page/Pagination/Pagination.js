import React from 'react';
import { usePagination, DOTS } from './usePagination';
import Pagination from 'react-bootstrap/Pagination';
import './PaginationCSS.css';
const PaginationPage = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className='pagination-container'>
      <Pagination.Prev onClick={onPrevious} className={{disabled: currentPage === 1}}/>
      {
        paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <button className="pagination-item dots">&#8230;</button>;
          }

          return (
            <Pagination.Item
              className='pagination-item' style={{selected: pageNumber === currentPage }}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          );
        })}
      <Pagination.Next onClick={onNext} className={{ disabled: currentPage === lastPage}} />
    </div>
    
  );
};

export default PaginationPage;
