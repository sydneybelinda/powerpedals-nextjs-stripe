// app/api/create-payment-intent/route.ts
import { NextResponse, NextRequest } from 'next/server';


import {stripe} from '../../../../lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const {totalPrice} = await req.json(); // Or process cart items to calculate amount


    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice, // Amount in cents
      currency: 'aud',
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating Payment Intent:', error);
    return NextResponse.json({ error: 'Failed to create Payment Intent' }, { status: 500 });
  }
}