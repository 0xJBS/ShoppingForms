import React, { useState } from "react";
import Header from "./Header";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import initialItems from "../data/items";

function App() {
  const [items, setItems] = useState(initialItems);

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Header />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;