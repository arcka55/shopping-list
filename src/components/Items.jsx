export default function Items({ data, onDeleteItem, onToggleItem }) {
  return (
    <li key={data.id}>
      <input
        type="checkbox"
        checked={data.checked}
        onChange={() => onToggleItem(data.id)}
      />
      <span style={data.checked ? { textDecoration: "line-through" } : {}}>
        {data.quantity} {data.name}
      </span>
      <button onClick={() => onDeleteItem(data.id)}>&times;</button>
    </li>
  );
}
