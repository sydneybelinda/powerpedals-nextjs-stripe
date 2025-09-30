'use client'
import { useShoppingCart } from 'use-shopping-cart'

export default function ClearCart() {
  const { clearCart } = useShoppingCart()


  return clearCart
}