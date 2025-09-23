'use client'

import AddcartDrawer from '@/components/custom/add-cart-drawer'
import NavLinks from '@/components/layouts/nav-links'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Headphones, LogOut, Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
    const pathName = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [pathName])

    return (
        <>
            {pathName === '/' && (
                <Link
                    href="#"
                    className="block bg-success px-4 py-2 text-center text-xs font-medium uppercase text-white transition hover:text-white/80 lg:py-3 lg:text-sm/4"
                >
                    use MONSOON20 for a 20% discount
                </Link>
            )}
            <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
                <div className="container flex items-center justify-between gap-5 py-3.5 lg:py-6">
                    <div className="shrink-0 lg:w-1/4">
                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="Bike Store"
                                className="logo-dim"
                                width={140}
                                height={28}
                            />
                        </Link>
                    </div>
                    <div className="hidden grow lg:block">
                        <NavLinks />
                    </div>

                    <div className="flex shrink-0 items-center justify-end gap-2.5 lg:w-1/4 xl:gap-[26px]">
                        <div className="order-2 flex items-center justify-end gap-2.5 lg:order-1 lg:grow xl:gap-[26px]">
                            <Popover
                                open={isSearchOpen}
                                onOpenChange={setIsSearchOpen}
                            >
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className="text-black hover:opacity-70"
                                    >
                                        <Search className="size-5" />
                                        <span className="sr-only">Search</span>
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    sideOffset={4}
                                    align="end"
                                    className="mt-4 w-60 border-none bg-gray-100 p-2 shadow-xs lg:mt-7 lg:w-72"
                                >
                                    <div className="relative rounded-lg">
                                        <Input
                                            type="text"
                                            placeholder="Search for Cycle"
                                            className="py-1 pl-0 pr-6 font-medium sm:py-1.5"
                                        />
                                        <button
                                            type="button"
                                            className="text-primary absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-80"
                                            onClick={() =>
                                                setIsSearchOpen(false)
                                            }
                                        >
                                            <X className="size-5" />
                                        </button>
                                    </div>
                                </PopoverContent>
                            </Popover>

                            {/* .Add card drawer */}
                            <AddcartDrawer
                                button={
                                    <button
                                        type="button"
                                        className="relative shrink-0 text-black transition hover:text-gray/90"
                                    >
                                        <span className="absolute -right-2 -top-2 grid h-[18px] min-w-[18px] place-content-center rounded-full bg-gray px-1.5 py-0.5 text-sm font-bold text-white">
                                            1
                                        </span>
                                        <ShoppingBag className="size-5 shrink-0" />
                                        <span className="sr-only">
                                            Add cart
                                        </span>
                                    </button>
                                }
                            />

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        type="button"
                                        className="hidden size-5 shrink-0 text-black outline-hidden transition hover:text-gray/90 lg:block"
                                    >
                                        <User className="size-5 shrink-0" />
                                        <span className="sr-only">User</span>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    sideOffset={12}
                                    className="min-w-[200px] space-y-1 rounded-lg p-1.5 text-sm font-medium border-0"
                                >
                                    <DropdownMenuItem className="p-0">
                                        <Link
                                            href="/contact-us"
                                            className={`flex w-full items-center gap-1.5 rounded-lg px-3 py-2 ${pathName === '/contact-us' && 'bg-gray-100!'}`}
                                        >
                                            <Headphones className="size-[18px] shrink-0" />
                                            Help Center
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="p-0">
                                        <Link
                                            href="#"
                                            className={`flex w-full items-center gap-1.5 rounded-lg px-3 py-2 ${pathName === '#' && 'bg-gray-100!'}`}
                                        >
                                            <LogOut className="size-[18px] shrink-0" />
                                            Sign out
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <div className="grid place-content-center lg:hidden">
                                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                    <SheetTrigger asChild>
                                        <button
                                            type="button"
                                            className="text-black hover:opacity-70 lg:hidden"
                                        >
                                            <Menu className="size-6" />
                                            <span className="sr-only">
                                                Menu
                                            </span>
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent
                                        className="w-auto"
                                        side={'left'}
                                    >
                                        <SheetTitle></SheetTitle>
                                        <SheetDescription></SheetDescription>
                                        <NavLinks />
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                        <Link
                            href="/cycle-collections"
                            className="order-1 lg:order-2"
                        >
                            <Button
                                type="button"
                                className="btn p-1.5 py-2 text-xs/3 uppercase md:px-2.5 lg:text-sm/[19px] xl:px-4 xl:py-2.5"
                            >
                                Order now
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
