import { useState } from "react";
import Header from "./Header";
import Forms from "./Forms";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

export default function App() {
  // item awal
  const groceryItems = [
    {
      id: 1,
      name: "Kopi Bubuk",
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: "Gula Pasir",
      quantity: 5,
      checked: false,
    },
    {
      id: 3,
      name: "Air Mineral",
      quantity: 3,
      checked: false,
    },
  ];
  // lifting state up : from 'Form"
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Forms onAddItem={handleAddItem} />
      <GroceryList
        groceryItems={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer groceryItems={items} />
    </div>
  );
}
