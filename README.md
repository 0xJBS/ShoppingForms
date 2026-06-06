# Shopster: Dynamic Shopping List Manager

Shopster is an interactive, single-page React web application designed to help users efficiently manage grocery trips, catalog pantry items, and track shopping inventories in real time. 

This project serves as a practical implementation of **React Controlled Components**, demonstrating how to synchronize form elements and user inputs with React state to achieve responsive UI updates, live search filtering, and immutable data handling.

The remote codebase for this repository is tracked at:  
🔗 **[https://github.com/0xJBS/ShoppingForms.git](https://github.com/0xJBS/ShoppingForms.git)**

---

## 🚀 Core Application Features

- **Live Keyword Search**: A case-insensitive search engine that updates your display list automatically as you type.
- **Department Sorting Dropdown**: A filter system that lets users narrow down items by category (*Produce, Dairy, Bakery, Meat, or Dessert*) or view all items collectively.
- **Dynamic Inventory Ingestion**: An integrated form that supports custom grocery creation and assigns unique tracking IDs using the `uuid` library.
- **Interactive Checklists**: Individual item components containing interactive toggles to visually mark products as added to or removed from the physical shopping cart.
- **Light/Dark UI Modes**: Global application state support for alternating layout interfaces seamlessly via a header toggle button.

---

## 🛠️ Learning Goals & Concepts Applied

- **Controlled Forms**: Managing `<input>` and `<select>` elements dynamically by anchoring their `value` fields strictly to React state.
- **Lifting State Up**: Passing callbacks down nested component trees to allow child components to communicate user data modifications back to parent managers.
- **Immutable State Alterations**: Leveraging the ES6 Spread Operator (`[...array, element]`) to cleanly append items into state hooks without mutating historical data arrays directly.
- **Component Isolation Isolation for Testing**: Structuring the interface states defensively so that sub-components execute perfectly under automated testing environments, even when mounted separately from the root template.

---

## 📋 Lab Deliverables & Component Breakdown

### 1. Filter Component (`Filter.jsx`)
In the filter component, there is an input field for searching our list. When the user types in this field, the list of items is filtered so that only items with names that match the text are included.
- **Controlled Values**: The text field tracks a controlled `search` state via props, remaining strictly in sync with component memory.
- **Prop Callbacks**: To update state on user typing patterns, it fires a callback prop named `onSearchChange`.
- **Flexible String Matching**: Evaluates user inputs securely, resolving both full and case-insensitive partial string matches (`.toLowerCase().includes()`).

*Note: While the starter dropdown selection initially works uncontrollably, it is updated here to act as a fully controlled element for optimal state safety.*

### 2. New Item Ingestion Form (`ItemForm.jsx`)
There is a component called `ItemForm` that allows users to append fresh entries onto the master shopping grid.
- **Controlled Forms Initialization**: All data gathering tags are fully controlled. When initializing state for the `<select>` tag dropdown, an initial default value of `"Produce"` is strictly enforced.
- **Payload Interception**: Intercepts submit triggers, runs `event.preventDefault()`, and bundles the state details into a structural dictionary model:
  ```javascript
  const newItem = {
    id: uuid(), // The uuid library generates unique tracking identifiers
    name: itemName,
    category: itemCategory,
  };