import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredCapsules } from "../../store/capsulesSlice";

const CapsuleTable = ({ onEditClick }) => {
  const capsules = useSelector(selectFilteredCapsules); // Get data from Redux store
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 5; // Set items per page

  // Calculate indices for items to show on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = capsules.slice(startIndex, endIndex); // Get current items

  // Calculate the total number of pages
  const totalPages = Math.ceil(capsules.length / itemsPerPage);

  // Handler to navigate pages
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="">Status</th>
            <th>Launch Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((capsule) => (
            <tr key={capsule.id}>
              <td>{capsule.id}</td>
              <td>{capsule.status}</td>
              <td>{capsule.original_launch}</td>
              <td>{capsule.type}</td>
              <td>
                <button onClick={() => onEditClick(capsule)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination  */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CapsuleTable;
