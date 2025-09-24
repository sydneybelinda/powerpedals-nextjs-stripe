import { useShoppingCart } from 'use-shopping-cart';

export default function Cart() {
  const { cartDetails, removeItem, totalPrice } = useShoppingCart();
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {Object.keys(cartDetails).map((key) => {
          const item = cartDetails[key];
          return (
            <li key={key}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeItem(key)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}