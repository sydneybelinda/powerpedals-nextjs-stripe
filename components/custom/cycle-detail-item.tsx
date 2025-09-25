"use client"
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from '@/components/ui/button'
import AddcartDrawer from '@/components/custom/add-cart-drawer'
import helper from '@/lib/helper'

import { Star } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import {  IProductCartDetail} from '@/types/product'
import { IBike } from '@/types/bike';

export default function CycleDetailItem({item}: { item: IBike }) {
  const { addItem, cartDetails, totalPrice } = useShoppingCart();

//   const item = item.item

  console.log(item)

  const handleAddToCart = () => {
    addItem(item); // Add the product to the cart
  };

  return (
                    <div className="container shrink-0 space-y-5 px-4 pt-12 lg:w-[500px] lg:max-w-none lg:space-y-[30px] lg:px-14 xl:w-[600px] xl:py-[100px] 2xl:w-[716px]">
                        <div>
                            <h1 className="mb-2 line-clamp-2 text-2xl font-bold sm:text-3xl md:text-4xl/tight lg:mb-4 xl:mb-[30px] xl:text-[50px]/[60px]">
                                {item.name}
                            </h1>
                            <div>
                                <div className="mb-1 flex items-center gap-3 xl:mb-3">
                                    <h2 className="text-2xl font-medium lg:text-3xl/10 xl:text-[40px]/[48px]">
                                        ${item.price}
                                    </h2>
                                    <span className="inline-block rounded-lg bg-success px-1.5 py-0.5 text-xs font-medium text-white lg:py-1 xl:rounded-xl xl:text-sm/4">
                                        50% Off
                                    </span>
                                </div>
                                <p className="text-lg/[22px] font-medium text-gray line-through">
                                    $19,999.00
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm/4 font-medium ring-1 ring-gray-100">
                            <div className="flex items-center gap-1.5">
                                <span>4.5</span>
                                <Star className="size-4 fill-[#EAB308] stroke-[#EAB308]" />
                            </div>
                            <span className="block h-4 w-px shrink-0 rounded-full bg-gray-100"></span>
                            <p>
                                1.5k&nbsp;
                                <span className="text-gray">Ratings</span>
                            </p>
                        </div>
                        <div className="border-y border-gray-100 py-5 xl:py-[30px]">
                            <div className="font-medium">
                                <span className="text-gray">color:&nbsp;</span>Pink
                            </div>
                            <div className="mt-3 flex items-center gap-1.5">
                                <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-checked:border-black">
                                    <span className="block size-[18px] rounded-full bg-[#F43F5E]"></span>
                                    <input
                                        name="color"
                                        type="radio"
                                        className="absolute inset-0 cursor-pointer opacity-0"
                                    />
                                </div>
                                <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-checked:border-black">
                                    <span className="block size-[18px] rounded-full bg-[#F97316]"></span>
                                    <input
                                        name="color"
                                        type="radio"
                                        className="absolute inset-0 cursor-pointer opacity-0"
                                    />
                                </div>
                                <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-checked:border-black">
                                    <span className="block size-[18px] rounded-full bg-[#84CC16]"></span>
                                    <input
                                        name="color"
                                        type="radio"
                                        className="absolute inset-0 cursor-pointer opacity-0"
                                    />
                                </div>
                                <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-checked:border-black">
                                    <span className="block size-[18px] rounded-full bg-[#10B981]"></span>
                                    <input
                                        name="color"
                                        type="radio"
                                        className="absolute inset-0 cursor-pointer opacity-0"
                                    />
                                </div>
                                <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-checked:border-black">
                                    <span className="block size-[18px] rounded-full bg-[#3B82F6]"></span>
                                    <input
                                        name="color"
                                        type="radio"
                                        className="absolute inset-0 cursor-pointer opacity-0"
                                    />
                                </div>
                               
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2.5 text-sm/4 font-medium uppercase text-gray">
                                Product Description
                            </h3>
                            <p className="line-clamp-5 text-base/[23px]">
                                Velocity Roadster is a lightweight, stylish bike
                                built for speed, agility, and smooth urban rides.
                                Ideal for cyclists who value performance, its
                                aerodynamic design ensures effortless handling and a
                                sleek look.
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <Link href="/cart">
                                <Button type="button">Buy Now</Button>
                            </Link>
                            <AddcartDrawer
                                button={
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="border-black "
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                }
                            />
                        </div>
                    </div>
    // <div>
    //   <h1>{product.name}</h1>
    //   <p>{product.price}</p>
    //   <button onClick={handleAddToCart}>Add to Cart</button>
    //   {/* Display cart details or total price */}
    //   <p>Items in cart: {Object.keys(cartDetails).length}</p>
    //   <p>Total: {totalPrice}</p>
    // </div>
  );
}