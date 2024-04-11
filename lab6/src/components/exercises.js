export default function Exercises({ itemName, itemType }) {
  return (
    <div className="exercises" id={itemType}>
      <h2>{itemName}</h2>
    </div>
  );
}
