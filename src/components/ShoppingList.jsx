import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items = [] }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  function handleCategoryChange(newCategory) {
    setSelectedCategory(newCategory);
  }

  // Filter items matching BOTH the search text input and the category dropdown selector
  const displayedItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter 
        search={searchText} 
        onSearchChange={handleSearchChange} 
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;