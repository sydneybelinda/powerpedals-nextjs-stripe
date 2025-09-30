    // app/api/checkout/route.js (Serverless Function)
import {stripe} from "../../../../lib/stripe"

    export async function POST(req) {
      const { cartDetails } = await req.json();


      // console.log(cartDetails)

      const line_items = Object.values(cartDetails).map((item) => ({
        price_data: {
          currency: item.currency,
          product_data: {
            name: item.priceId,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      }));

      // console.log(line_items[0].price_data)

      try {
        const session = await stripe.checkout.sessions.create({
          mode: "payment",
          line_items,
          success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
        });
        return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
    }