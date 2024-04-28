import { useState } from "react";
import Items from "./Items";

export default function GroceryList({
  groceryItems,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  // buat state untuk grocery doang
  const [sortBy, setSortBy] = useState("input");

  let sortedItems =
    sortBy == "input"
      ? groceryItems
      : sortBy == "name"
      ? groceryItems.slice().sort((a, b) => a.name.localeCompare(b.name))
      : sortBy == "checked"
      ? groceryItems.slice().sort((a, b) => a.checked - b.checked)
      : groceryItems; // Components Chlid

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((data) => (
            <Items
              key={data.id}
              data={data}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
