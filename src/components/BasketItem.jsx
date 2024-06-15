export const BasketItem = ({
  id,
  title,
  price,
  count,
  subtotal = price * count,
  decreaseCount,
  increaseCount,
  deleteBasketItem,
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{subtotal}</td>
      <td>
        <button onClick={() => decreaseCount(id)}>-</button>
        <button onClick={() => increaseCount(id)}>+</button>
        <button onClick={() => deleteBasketItem(id)}>x</button>
      </td>
    </tr>
  );
};
