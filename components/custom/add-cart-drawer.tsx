'use client'
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import ProductCartCard from '@/components/custom/product-cart-card'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'



export default function AddcartDrawer({ button }: { button: React.ReactNode }) {
    const { cartDetails, cartCount,formattedTotalPrice} = useShoppingCart();
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()



    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                {button}
            </SheetTrigger>
            <SheetContent
                isShowCloseButton={false}
                className="w-full max-w-[700px]"
                side={'right'}
            >
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>

                <div className="flex h-screen flex-col overflow-y-auto bg-white">
                    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white p-4 lg:px-10 lg:py-[30px]">
                        <h2 className="text-xl font-medium lg:text-3xl">
                            Cart
                        </h2>
                        <button
                            type="button"
                            className="shrink-0"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <X className="size-5 shrink-0 lg:size-6" />
                        </button>
                    </div>

                    {cartCount && (cartCount > 0) ? (
                    <div className="flex grow flex-col">
                        <div className="grow px-4 lg:px-10">
                            <div className="divide-y divide-gray-100">

            
                                           {Object.values(cartDetails ?? {}).map((data) => (
                                         
                                            <ProductCartCard
                                                key={data.id}
                                                cartCard={data}
                                            />
                                    
                                     
                                        ) )}

                            </div>
                            <div className="flex items-center justify-between gap-5 border-y border-gray-100 py-5 text-22px font-medium">
                                <h2 className="text-gray">Total</h2>
                                <p className='tp'>{formattedTotalPrice}</p>
                            </div>
                        </div>
                        <Link
                            href="/cart"
                            className="sticky bottom-0 bg-white px-4 py-4 lg:px-10"
                        >
                            <Button type="button" className="w-full">
                                Check Out
                            </Button>
                        </Link>
                    </div>
                    ) : (
                     <div className='p-5 min-h-[calc(100vh-97px)] flex items-center justify-center text-center flex-col '>
                        <div className="max-w-32">
                            <Image
                                src="/images/my-cart.png"
                                alt="My card"
                                className="h-full w-full"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="max-w-xs">
                            <h1 className="mb-4 font-roboto text-xl font-medium italic text-gray lg:text-2xl">
                                Currently Empty
                            </h1>
                            <Link href="/cycle-collections">
                                <Button type="button" className="uppercase" onClick={() => setIsOpen(!isOpen)}>
                                    ADD ITEMS
                                </Button>
                            </Link>
                        </div>
                    </div>  
                    )


                    }

                    {/* Empty cart */}


                    {/* add cart procduct */}


                </div>
            </SheetContent>
        </Sheet>
    )
}
