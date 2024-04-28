export default function Footer({ groceryItems }) {
  if (!groceryItems.length) {
    return <footer className="stats">Daftar Belanjaan Masih Kosong</footer>;
  }
  // guard status

  const totalItems = groceryItems.length;
  const checkedItems = groceryItems.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
