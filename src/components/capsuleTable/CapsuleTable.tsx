import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectFilteredCapsules } from "../../store/capsulesSlice";

interface Capsule {
  id: string;
  capsule_id: string;
  original_launch: string;
  status: string;
  type: string;
}

interface CapsuleTableProps {
  capsules: Capsule[];
  onEditClick: (capsule: Capsule) => void;
}

const CapsuleTable: React.FC<CapsuleTableProps> = ({
  capsules,
  onEditClick,
}) => {
  // const capsules = useSelector(selectFilteredCapsules);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 5; // Set items per page

  // Calculate indices for items to show on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = capsules.slice(startIndex, endIndex); // Get current items

  // Calculate the total number of pages
  const totalPages = Math.ceil(capsules.length / itemsPerPage);

  // Handler to navigate pages
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="flex flex-col text-center gap-3 py-3 lg:px-4">
      <div className="border-2 rounded-3xl px-4 pb-10 flex flex-col text-center">
        <h1 className="font-bold text-[30px] text-left">Capsules</h1>
        <table className="py-3 mt-3 lg:text-[14px] text-[13px] overflow-auto">
          <thead className="border-b py-3">
            <tr className="py-3">
              <th className="text-left py-3">Capsule ID</th>
              <th>Original Launch Date</th>
              <th className="">Status</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((capsule) => (
              <tr key={capsule.id} className="border-b">
                <td className="text-left py-3">{capsule.capsule_id}</td>
                <td>{capsule.original_launch}</td>
                <td>{capsule.status}</td>
                <td>{capsule.type}</td>
                <td>
                  <button
                    onClick={() => onEditClick(capsule)}
                    className="underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination  */}
      <div className="pagination text-center flex justify-center gap-3 mt-3">
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
            className={`${
              currentPage === i + 1
                ? "bg-[#000000af] text-white"
                : "bg-[#00000031] text-black"
            } py-1 px-3 rounded-sm font-bold text-[14px]`}
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
