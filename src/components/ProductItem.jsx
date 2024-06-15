export const ProductItem = ({ title, id, price, photo, subtotal, onMove }) => {
  return (
    <div>
      <img src={photo} alt="" />
      <p>{title}</p>
      <p>
        <strong>{price}USD</strong>
      </p>
      <button onClick={() => onMove(id)}>Move</button>
    </div>
  );
};
