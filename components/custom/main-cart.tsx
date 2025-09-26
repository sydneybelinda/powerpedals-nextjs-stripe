"use client"
import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button'

import Link from 'next/link'



import Image from 'next/image'
import { Lock, PlusIcon, X } from 'lucide-react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
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



export default function MainCart() {
    // const [status, setStatus] = useState("idle");
    const { formattedTotalPrice, cartDetails, redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

    // const [count, setCount] = useState(1)


    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const newValue = Number(event.target.value)
    //     if (!isNaN(newValue) && newValue >= 0) {
    //         setCount(newValue)
    //     }
    // }



    // async function handleClick(event) {
    //     event.preventDefault();
    //     if (cartCount > 0) {
    //         setStatus("loading");
    //         try {
    //             const result = await redirectToCheckout();
    //             if (result?.error) {
    //                 console.error(result);
    //                 setStatus("redirect-error");
    //             }
    //         } catch (error) {
    //             console.error(error);
    //             setStatus("redirect-error");
    //         }
    //     } else {
    //         setStatus("no-items");
    //     }
    // }


    const handleCheckout = async () => {
        try {
            await redirectToCheckout();
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };




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
                    <div className="space-y-2.5 py-[30px] lg:space-y-4">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="mb-2 text-lg/[22px] font-medium">
                                    Payment
                                </h2>
                                <p className="text-gray">
                                    All transactions are secure and
                                    encrypted.
                                </p>
                            </div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="border-black/10 py-[9px]"
                                    >
                                        <PlusIcon className="size-5" />
                                        Add cards
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <div className="space-y-4">
                                        <DialogTitle>
                                            Card details
                                        </DialogTitle>
                                        <DialogDescription className="hidden"></DialogDescription>
                                        <DialogClose className='absolute top-2 outline-hidden right-2'>
                                            <X className="size-5" />
                                            <span className="sr-only">Close</span>
                                        </DialogClose>
                                        <div className="space-y-3.5">
                                            <Input
                                                variant={'outline'}
                                                className="py-2.5"
                                                type="text"
                                                placeholder="card number"
                                            />
                                            <div className="flex gap-4">
                                                <Input
                                                    variant={'outline'}
                                                    className="py-2.5"
                                                    type="text"
                                                    placeholder="Expiry date"
                                                />
                                                <Input
                                                    variant={'outline'}
                                                    className="py-2.5"
                                                    type="text"
                                                    placeholder="CVC/CVV"
                                                />
                                            </div>
                                            <Input
                                                variant={'outline'}
                                                className="py-2.5"
                                                type="text"
                                                placeholder="Cardholder name"
                                            />
                                        </div>
                                        <Button type="submit">
                                            Save changes
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className="rounded-xl border border-black/10 px-4 py-3">
                            <Accordion
                                type="single"
                                collapsible
                                className="divide-y divide-black/10"
                            >
                                <AccordionItem
                                    value="item-1"
                                    className="relative"
                                >
                                    <AccordionTrigger className="pb-5 pt-0 [&>svg]:hidden [&[data-state=open]_.radio-check>span]:bg-black [&[data-state=open]_.radio-check]:border-black">
                                        <div className="flex w-full grow items-start gap-2.5">
                                            <div className="radio-check mt-0.5 grid size-4 shrink-0 place-content-center rounded-full border-[1.5px] border-gray bg-transparent">
                                                <span className="size-3 rounded-full bg-transparent" />
                                            </div>
                                            <div className="grow space-y-2 font-medium">
                                                <h3 className="text-base/5 font-medium">
                                                    Credit & Debit Cards
                                                </h3>
                                                <p className="text-base/[22px] font-normal text-gray">
                                                    Secure money transfers
                                                    with Mastercard, Visa,
                                                    Discover, and Stripe.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent>
                                        <div className="flex flex-wrap items-center gap-2.5 pl-6">
                                            <div className="grid h-[30px] shrink-0 place-content-center rounded-md border border-black/10 bg-white px-1.5">
                                                <Image
                                                    alt="visa"
                                                    src="/images/visa.svg"
                                                    width={32}
                                                    height={12}
                                                />
                                            </div>
                                            <div className="grid h-[30px] shrink-0 place-content-center rounded-md border border-black/10 bg-white px-1.5">
                                                <Image
                                                    alt="visa"
                                                    src="/images/mastercard.svg"
                                                    width={32}
                                                    height={20}
                                                />
                                            </div>
                                            <div className="grid h-[30px] shrink-0 place-content-center rounded-md border border-black/10 bg-white px-1.5">
                                                <Image
                                                    alt="visa"
                                                    src="/images/paypal.svg"
                                                    width={32}
                                                    height={9}
                                                />
                                            </div>
                                            <div className="grid h-[30px] shrink-0 place-content-center rounded-md border border-black/10 bg-white px-1.5">
                                                <Image
                                                    alt="visa"
                                                    src="/images/amazon-pay.svg"
                                                    width={32}
                                                    height={21}
                                                />
                                            </div>
                                            <div className="grid h-[30px] shrink-0 place-content-center rounded-md border border-black/10 bg-white px-1.5">
                                                <Image
                                                    alt="visa"
                                                    src="/images/klarna.svg"
                                                    width={32}
                                                    height={8}
                                                />
                                            </div>
                                            <div className="grid h-[30px] shrink-0 place-content-center rounded-md border border-black/10 bg-white px-1.5">
                                                <Image
                                                    alt="visa"
                                                    src="/images/skrill.svg"
                                                    width={32}
                                                    height={12}
                                                />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value="item-2"
                                    className="relative"
                                >
                                    <AccordionTrigger className="py-5 [&>svg]:hidden [&[data-state=open]_.radio-check>span]:bg-black [&[data-state=open]_.radio-check]:border-black">
                                        <div className="flex items-start gap-2.5">
                                            <div className="radio-check mt-0.5 grid size-4 shrink-0 place-content-center rounded-full border-[1.5px] border-gray bg-transparent">
                                                <span className="size-3 rounded-full bg-transparent" />
                                            </div>
                                            <h3 className="text-base/5 font-medium">
                                                Net Banking
                                            </h3>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-6">
                                            <Select>
                                                <SelectTrigger className="w-auto py-2.5">
                                                    <SelectValue placeholder="Choose an option" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup className="space-y-1">
                                                        <SelectItem value="icici">
                                                            ICICI bank
                                                        </SelectItem>
                                                        <SelectItem value="axis">
                                                            Axis bank
                                                        </SelectItem>
                                                        <SelectItem value="bob">
                                                            Bank of baroda
                                                        </SelectItem>
                                                        <SelectItem value="sbi">
                                                            State bank of
                                                            india
                                                        </SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value="item-3"
                                    className="relative"
                                >
                                    <AccordionTrigger className="py-5 [&>svg]:hidden [&[data-state=open]_.radio-check>span]:bg-black [&[data-state=open]_.radio-check]:border-black">
                                        <div className="flex items-start gap-2.5">
                                            <div className="radio-check mt-0.5 grid size-4 shrink-0 place-content-center rounded-full border-[1.5px] border-gray bg-transparent">
                                                <span className="size-3 rounded-full bg-transparent" />
                                            </div>
                                            <h3 className="text-base/5 font-medium">
                                                UPI (Pay via any App)
                                            </h3>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-6">
                                            <div className="flex gap-2.5">
                                                <div className="w-full">
                                                    <Input
                                                        variant={'outline'}
                                                        placeholder="Enter UPI ID"
                                                        className="py-3 text-sm/tight font-medium placeholder:text-sm placeholder:font-medium"
                                                    />
                                                </div>
                                                <Button
                                                    className="px-4 py-2.5"
                                                    type="button"
                                                >
                                                    Verify
                                                </Button>
                                            </div>
                                            <p className="mt-5 text-base/[22px] font-normal text-gray">
                                                The UPI ID is in the format
                                                of name/phone
                                                number@bankname
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value="item-4"
                                    className="relative"
                                >
                                    <AccordionTrigger className="pb-0 pt-5 [&>svg]:hidden [&[data-state=open]_.radio-check>span]:bg-black [&[data-state=open]_.radio-check]:border-black">
                                        <div className="flex items-start gap-2.5">
                                            <div className="radio-check mt-0.5 grid size-4 shrink-0 place-content-center rounded-full border-[1.5px] border-gray bg-transparent">
                                                <span className="size-3 rounded-full bg-transparent" />
                                            </div>
                                            <h3 className="text-base/5 font-medium">
                                                EMI
                                            </h3>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-0">
                                        <div className="mt-2.5 pl-6">
                                            <p className="text-base/[22px] font-normal text-gray">
                                                EMI Unavailable&nbsp;
                                                <Link
                                                    href="#"
                                                    className="font-medium text-black underline-offset-2 transition hover:underline"
                                                >
                                                    Why?
                                                </Link>
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <Lock className="size-[18px] shrink-0" />
                                <p>Secure and encrypted</p>
                            </div>
                            <Image
                                src="/images/Stripe-logo.svg"
                                alt="Stripe"
                                className="h-full w-11"
                                width={940}
                                height={700}
                            />
                        </div>
                        <p className="leading-6 text-gray">
                            By clicking &apos;Order and Pay&apso;, you agree
                            to the (general){' '}
                            <Link
                                href="/treams-and-condition"
                                className="text-black underline underline-offset-4 transition hover:no-underline"
                            >
                                Terms and Conditions
                            </Link>{' '}
                            of vanmoof.com applicable to your order and you
                            agree to our{' '}
                            <Link
                                href="/Privacy-policy"
                                className="text-black underline underline-offset-4 transition hover:no-underline"
                            >
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                    <div className="text-red-700 text-xs mb-3 h-5 text-center">
                        {totalPrice && totalPrice < 30
                            ? "You must have at least £0.30 in your basket"
                            : cartCount && cartCount > 20
                                ? "You cannot have more than 20 items"
                                : status === "redirect-error"
                                    ? "Unable to redirect to Stripe checkout page"
                                    : status === "no-items"
                                        ? "Please add some items to your cart"
                                        : null}
                    </div>
                    {/* <Link href="/order-success" className="block"> */}
                    <Button type="submit" className="w-full"
                        onClick={handleCheckout}
                        disabled={
                            (totalPrice && totalPrice < 30) ||
                                (cartCount && cartCount > 20) ||
                                status == "no-items"
                                ? true
                                : false
                        }

                    >
                        Order and Pay
                    </Button>
                    {/* </Link> */}
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