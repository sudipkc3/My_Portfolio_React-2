import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 py-1 border rounded ${currentPage === 1 ? "text-gray-400 dark:text-gray-600" : "text-blue-500 dark:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
      >
        <ArrowLeft className="text-gray-800 dark:text-gray-200" />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-3 py-1 border rounded ${
            currentPage === number
              ? "bg-blue-500 text-white dark:bg-blue-700"
              : "text-blue-500 dark:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 border rounded ${currentPage === totalPages ? "text-gray-400 dark:text-gray-600" : "text-blue-500 dark:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
      >
        <ArrowRight className="text-gray-800 dark:text-gray-200" />
      </button>
    </div>
  );
};

export default Pagination;
