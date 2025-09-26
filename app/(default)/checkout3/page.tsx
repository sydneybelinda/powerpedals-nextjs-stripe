import { useShoppingCart } from 'use-shopping-cart';

export default function Checkout() {
  const { checkout } = useShoppingCart();
  return (
    <button onClick={() => checkout()}>Proceed to Checkout</button>
  );
}