// app/providers.tsx (Client Component)
'use client';

import { CartProvider } from 'use-shopping-cart';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider
      mode="payment" // or "subscription"
      cartMode="client-only" // or "server-only" or "client-and-server"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      currency="AUD" // or your desired currency
      shouldPersist={true} // or false
      successUrl={`${process.env.NEXT_PUBLIC_APP_URL}/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_APP_URL}/cancel`}
      billingAddressCollection={true}
    >
      {children}
    </CartProvider>
  );
}

