import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="md:w-[49%] lg:w-[32%]">
            <Product src="assets/p1.png" badge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        pageClassName="inline-block py-2 px-3.5 font-regular text-sm border border-solid border-[#f0f0f0]"
        pageLinkClassName="page-link"
        previousClassName="hidden"
        nextClassName="hidden"
        previousLinkClassName="page-link"
        containerClassName="flex flex-wrap gap-x-3.5 gap-y-2 md:gap-y-0 mt-12"
        activeClassName="inline-block py-2 px-3.5 font-regular text-white text-sm border border-solid border-[#f0f0f0] bg-black"
      />
      <p className="mt-2.5 text-sm font-normal text-[#767676] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
        {items.length}
      </p>
    </>
  );
};

export default Pagination;
