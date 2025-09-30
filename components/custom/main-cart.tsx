"use client"
 import { useEffect,useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import CheckoutForm from './checkout'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Button } from '@/components/ui/button'

import Link from 'next/link'




import { Checkbox } from '@/components/ui/checkbox'

import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'



import MainCartItem from './main-cart-item';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);


export default function MainCart() {





      const { formattedTotalPrice, cartDetails, totalPrice} = useShoppingCart();
        const [data, setData] = useState('')
         const [loading, setLoading] = useState(true);
          const [error, setError] = useState('');


  

   

      useEffect(() => {

       
   const getData = async () => {
   
            try{
                setLoading(true);
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalPrice }),
        });
        const {clientSecret} = await response.json();
      
        setData(clientSecret);
    } catch (err) {
        setError(err as string)
      } finally {
        setLoading(false);
      }
     
    
    }


      if (totalPrice && totalPrice > 0){ getData()}
      
      
}, [totalPrice]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div className="container order-2 ml-auto w-full divide-y divide-gray-100 py-12 lg:order-1 lg:mr-0! lg:max-w-[570px] lg:px-10 xl:py-20 xl:pr-14">
                <div className="space-y-2.5 pb-[30px] lg:space-y-4">
                    <h1 className="text-lg/[22px] font-medium">Contact</h1>
                    <Input
                        variant={'outline'}
                        type="text"
                        placeholder="Email"
                    />
                    <div className="flex items-center gap-2">
                        <Checkbox id="email" />
                        <label
                            htmlFor="email"
                            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Email me with news and offers
                        </label>
                    </div>
                </div>
                <div className="space-y-2.5 py-[30px] lg:space-y-4">
                    <h2 className="text-lg/[22px] font-medium">Delivery</h2>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Country/Region" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="space-y-1">
                                <SelectItem value="Armenia">
                                    Armenia
                                </SelectItem>
                                <SelectItem value="Angola">
                                    Angola
                                </SelectItem>
                                <SelectItem value="Austria">
                                    Austria
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="grid gap-2.5 sm:grid-cols-2 lg:gap-4">
                        <Input
                            variant={'outline'}
                            type="text"
                            placeholder="First name"
                        />
                        <Input
                            variant={'outline'}
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                    <Input
                        variant={'outline'}
                        type="text"
                        placeholder="Street name & House number"
                    />
                    <Input
                        variant={'outline'}
                        type="text"
                        placeholder="Landmark"
                    />
                    <div className="grid gap-2.5 sm:grid-cols-2 lg:gap-4">
                        <Input
                            variant={'outline'}
                            type="text"
                            placeholder="Postal code"
                        />
                        <Input
                            variant={'outline'}
                            type="text"
                            placeholder="City"
                        />
                    </div>
                    <Input
                        variant={'outline'}
                        type="text"
                        placeholder="Phone number"
                    />
                    <div className="flex items-center gap-2">
                        <Checkbox id="delivery" />
                        <label
                            htmlFor="delivery"
                            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Save this information for the next time
                        </label>
                    </div>
                </div>
                <div className="space-y-[30px]">
           
                            <Elements stripe={stripePromise} options={{clientSecret:data}}>
                             <CheckoutForm clientSecret={data} />
                            </Elements>

                 

                     
                    <p className="leading-6 text-gray">
                        Your payment info will be saved to a Shop account.
                        By continuing, you agree to Shop&apos;s{' '}
                        <Link
                            href="/treams-and-condition"
                            className="text-black underline underline-offset-4 transition hover:no-underline"
                        >
                            Terms and Service
                        </Link>{' '}
                        and acknowledge the{' '}
                        <Link
                            href="/privacy-policy"
                            className="text-black underline underline-offset-4 transition hover:no-underline"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>

            <div className="order-1 lg:order-2">
                <div className="bg-gray-100 lg:sticky lg:top-[90px] lg:min-h-[calc(100vh-90px)]">
                    <div className="container mr-auto space-y-10 px-4 py-12 lg:ml-0! lg:max-w-[612px] lg:px-10 xl:px-14 xl:py-20">
                        <div className="space-y-5">
                            {Object.values(cartDetails ?? {}).map((data) => (

                                <MainCartItem
                                    key={data.id}
                                    item={data}
                                />

                            ))}

                            <div className="flex gap-2.5">
                                <div className="w-full">
                                    <Input
                                        variant={'outline'}
                                        placeholder="Discount code"
                                        className="bg-white py-3 font-medium text-sm/tight placeholder:text-sm"
                                    />
                                </div>
                                <Button
                                    className="px-4 py-2.5"
                                    type="button"
                                >
                                    Apply
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-5 text-gray">
                            <div className="flex justify-between gap-3">
                                <p>Subtotal (1 item)</p>
                                <span className="font-medium">
                                    {formattedTotalPrice}
                                </span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <p>Shipping</p>
                                <span className="font-medium">Free</span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-medium text-black">
                                        Total
                                    </h3>
                                </div>
                                <span className="text-lg font-medium text-black">
                                    {formattedTotalPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}