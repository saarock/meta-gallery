"use client";
// Import all the necessary dependencies heres
import React from "react";

type FilterProps = {
  /**
   * Callback function called when the sort order changes.
   * Receives the new order value: either "asc" (ascending) or "desc" (descending).
   */
  onSortChange: (order: "asc" | "desc") => void;
};

/**
 * Filter component to select sorting order by image date.
 *
 * @param {FilterProps} props - Props object
 * @param {(order: "asc" | "desc") => void} props.onSortChange - Callback fired when user changes sort order.
 *
 * @returns {JSX.Element} The filter UI element with a label and select dropdown.
 */
const Filter: React.FC<FilterProps> = ({ onSortChange }) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row items-center sm:justify-start gap-3 sm:gap-6 px-4 sm:px-0">
      <label
        htmlFor="sort"
        className="text-sm font-semibold text-gray-700"
      >
        Sort by Date Taken:
      </label>
      <select
        id="sort"
        onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
        className="
          block
          w-full
          sm:w-auto
          border
          border-gray-300
          rounded-md
          py-2
          px-3
          text-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:border-indigo-500
          transition
          duration-150
          ease-in-out
          cursor-pointer
        "
      >
        <option value="desc">Newest First</option>
        <option value="asc">Oldest First</option>
      </select>
    </div>
  );
};

export default Filter;
