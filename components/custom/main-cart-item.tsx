"use client"
import { IProductcartcard } from '@/types/product'

import Image from 'next/image'
import Link from 'next/link'
// import {  useState } from 'react'

import ProductCounter from './product-counter';




export default function MainCartItem({ item }: { item: IProductcartcard}) {
    // const { decrementItem, incrementItem, cartDetails } = useShoppingCart();

    // const [count, setCount] = useState(1)







    return (


        <div className="flex items-start gap-5 lg:items-center">
            <Link
                href={"/bikes/"}
                className="group relative flex size-16 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white sm:size-20 lg:size-[100px]"
            >
                <span className="absolute -right-2 -top-2 grid min-w-[24px] place-content-center rounded-full bg-gray px-1.5 py-0.5 font-bold text-white sm:h-[24px]">
                    {item.quantity}
                </span>
                <Image
                    src="/images/cycle-hero-img1.png"
                    alt="Visa"
                    className="h-full w-full object-contain transition group-hover:opacity-80"
                    width={940}
                    height={700}
                />
            </Link>

            <div className="flex grow flex-col justify-between gap-1.5 sm:flex-row sm:items-center sm:gap-5">
                <Link
                    href="/cycle-details"
                    className="line-clamp-2 font-medium transition hover:opacity-80 lg:line-clamp-3 lg:text-lg/[22px]"
                >
                    {item.name}
                </Link>
                            <div className='pro'>
            <ProductCounter
                cartCard={item}
            />
            </div>
                <h3 className="line-clamp-2 shrink-0 font-medium lg:text-lg/[22px]">
                    ${item.price}
                </h3>
            </div>
        </div>

    )
}