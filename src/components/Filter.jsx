import React from "react";

function Filter({ search, onSearchChange, category, onCategoryChange }) {
  return (
    <div className="Filter">
      {/* Search Input Field */}
      <input
        type="text"
        name="search"
        placeholder="Search items..."
        value={search} // Linked directly to the exact prop without destructuring defaults
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Category Dropdown Filter */}
      <select 
        name="filter" 
        value={category} 
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;