'use client'
import { useShoppingCart } from 'use-shopping-cart';
import { Input } from '@/components/ui/input'
import {  IProductcartcard } from '@/types/product'
import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

// type IVariants = 'default' | 'outline-solid' | 'black'


function ProductCounter({ cartCard }: { cartCard: IProductcartcard }) {
    const variant = 'black'
    const [quantity, setQuantity] = useState(1)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value)
        if (!isNaN(newValue) && newValue >= 0) {
            setQuantity(newValue)
        }
    }
     const { addItem, removeItem, cartDetails } = useShoppingCart();
     console.log(cartCard)

    const handleIncrement = () => {
        setQuantity(quantity + 1)
        
 
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div
            className={cn('inline-flex items-center sm:gap-1', {
                '': variant === 'black',
                '': variant === 'default',
            })}
        >
            <button
                type="button"
                onClick={handleDecrement}
                className="bg-gray-300 grid size-5 shrink-0 place-content-center rounded-xl text-gray hover:text-black"
            >
                <Minus className="size-4 lg:size-5" />
                <span className="sr-only">Minus</span>
            </button>
            <Input
                type="text"
                onChange={handleInputChange}
                value={quantity}
                className="w-6 lg:w-10 rounded-md border-0 bg-transparent px-0.5 py-1.5 lg:py-2.5 text-center text-sm/tight lg:text-lg/[22px] placeholder:text-sm/tight"
                placeholder="1"
                min="1"
            />
            <button
                type="button"
                onClick={handleIncrement}
                className="bg-gray-300 text- grid size-5 shrink-0 place-content-center rounded-xl text-gray hover:text-black"
            >
                <Plus className="size-4 lg:size-5" />
                <span className="sr-only">Plus</span>
            </button>
        </div>
    )
}

export default ProductCounter
