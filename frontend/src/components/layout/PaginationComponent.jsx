import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ handlePageChange, totalPages }) => {
  let pages = [];
  for (let number = 1; number <= totalPages; number++) {
    pages.push(
      <Pagination.Item key={number} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination className="justify-content-center">{pages}</Pagination>;
};

export default PaginationComponent;
