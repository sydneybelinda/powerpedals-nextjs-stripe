import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

import AddcartDrawer from '@/components/custom/add-cart-drawer'
import CycleDetailSwiper from '@/components/custom/cycle-detail-swiper'
import FeedbackSwiper from '@/components/custom/feedback-swiper'
import RideBanner from '@/components/custom/ridebanner'
import CycleDetailItem from '@/components/custom/cycle-detail-item';
import { Button } from '@/components/ui/button'
import helper from '@/lib/helper'
import { Star } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Cycle details | PowerPedals',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Cycle details | PowerPedals',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/cycle-details',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/cycle-details`,
    },
}

const item = {
    id:"id_Velocity_Roadster",
    name:'Velocity Roadster',
    description:'Velocity Roadster Test Bike',
    price:9999,
    currency:'AUD',
    image: '/images/cycle-hero-img1.png',
    quantity: 10
}



export default  async  function CycleDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bike = await prisma.bike.findFirst({
    where: { slug: slug}
  });

 if (!bike) {
    notFound();
  }


    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <CycleDetailSwiper />
<CycleDetailItem
item={bike}


/>
            </div>

            <div className="py-14 lg:py-20">
                <div className="container">
                    <div className="grid gap-4 text-base sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
                        <div className="flex items-center gap-4 rounded-[10px] bg-[#F7F7F7] px-4 py-6 lg:p-7">
                            <Image
                                src="/images/PowerPedals-assurance.svg"
                                alt="PowerPedals Assurance"
                                className="size-10 shrink-0 md:size-[60px]"
                                width={60}
                                height={60}
                            />
                            <div className="space-y-2">
                                <h4 className="text-lg/[22px] font-medium">
                                    PowerPedals Assurance
                                </h4>
                                <p className="text-gray">
                                    100% genuine products. with PowerPedals
                                    Guarantee.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-[10px] bg-[#F7F7F7] px-4 py-6 lg:p-7">
                            <Image
                                src="/images/emi.svg"
                                alt="PowerPedals Assurance"
                                className="size-10 shrink-0 md:size-[60px]"
                                width={60}
                                height={60}
                            />
                            <div className="space-y-2">
                                <h4 className="text-lg/[22px] font-medium">
                                    Easy EMIs
                                </h4>
                                <p className="text-gray">
                                    Avail easy EMIs with flexible payment
                                    options.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-[10px] bg-[#F7F7F7] px-4 py-6 lg:p-7">
                            <Image
                                src="/images/payment.svg"
                                alt="PowerPedals Assurance"
                                className="size-10 shrink-0 md:size-[60px]"
                                width={60}
                                height={60}
                            />
                            <div className="space-y-2">
                                <h4 className="text-lg/[22px] font-medium">
                                    100% Secure Payments
                                </h4>
                                <p className="text-gray">
                                    Keep your transactions secure and
                                    worry-free.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto grid max-w-[768px] items-start gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10 xl:items-center">
                <div className="px-4 lg:ml-auto lg:max-w-[716px] xl:py-10">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                        <span className="inline-block">
                            Discover the speed of the
                        </span>{' '}
                        <span className="font-roboto font-medium italic">
                            Velocity Roadster
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-gray md:text-lg">
                        Discover the Speed of the Velocity Roadster—crafted for
                        those who crave both speed and comfort. With its sleek
                        design and advanced features, this bike offers a
                        thrilling ride whether you’re commuting, racing, or
                        exploring new routes. Experience unmatched performance
                        and style on every journey.
                    </p>
                    <div className="mt-8 grid gap-x-4 gap-y-7 sm:grid-cols-2 md:gap-y-10 2xl:mt-14 2xl:gap-y-14">
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Aerodynamic Frame
                            </div>
                            <div>Lightweight and fast.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Precision Gears
                            </div>
                            <div>Smooth, reliable shifting.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                High-Performance Tires
                            </div>
                            <div>Excellent grip and stability.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Advanced Brakes
                            </div>
                            <div>Strong, responsive stopping power.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Comfort Design
                            </div>
                            <div>Ergonomic for long rides.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Custom Fit
                            </div>
                            <div>Adjustable for a personalized ride.</div>
                        </div>
                    </div>
                </div>
                <div className="max-h-[700px] overflow-hidden lg:rounded-l-xl">
                    <Image
                        src="/images/velocity-road.jpg"
                        alt="Velocity Road"
                        className="h-full w-full object-cover"
                        width={940}
                        height={700}
                    />
                </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-[768px] items-start gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10 xl:items-center">
                <div className="px-4 lg:order-2 lg:max-w-[716px] xl:py-10">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                        Easy Pedaling with
                        <span className="font-roboto font-medium italic">
                            &nbsp;Great Control
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-gray md:text-lg">
                        Experience a ride like never before with pedals
                        engineered for both comfort and control. Built to handle
                        any terrain, these pedals offer a secure grip and smooth
                        rotation, ensuring you stay in command no matter where
                        your journey takes you. Durable and reliable, they’re
                        designed to support every push, making each ride more
                        enjoyable and efficient.
                    </p>
                    <div className="mt-8 grid gap-x-4 gap-y-7 sm:grid-cols-2 md:gap-y-10 2xl:mt-14 2xl:gap-y-14">
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Transmission
                            </div>
                            <div>Gates Carbon Drive CDC</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Front Sprocket
                            </div>
                            <div>55 Tooth 5Bolt 130 BCD</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Belt
                            </div>
                            <div>118 Tooth CD</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Metal Chain
                            </div>
                            <div>118 Tooth CD</div>
                        </div>
                    </div>
                </div>
                <div className="max-h-[700px] overflow-hidden lg:order-1 lg:rounded-r-xl">
                    <Image
                        src="/images/pendal.jpg"
                        alt="Velocity Road"
                        className="h-full w-full object-cover"
                        width={940}
                        height={700}
                    />
                </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-[768px] items-start gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10">
                <div className="px-4 lg:ml-auto lg:max-w-[716px] xl:py-24">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                        Wide
                        <span className="font-roboto font-medium italic">
                            &nbsp;tyres
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-gray md:text-lg">
                        The design of the fork allows the mounting of wide rims
                        with “oversize” tires (up to 42 mm). This solution,
                        derived from cyclocross, gives stability to the bicycle.
                    </p>
                </div>
                <div className="max-h-[700px] overflow-hidden lg:rounded-l-xl">
                    <Image
                        src="/images/wide-tyres.jpg"
                        alt="Velocity Road"
                        className="h-full w-full object-cover"
                        width={940}
                        height={700}
                    />
                </div>
            </div>

            <div className="mt-14 px-4 lg:mt-20">
                <div className="mx-auto max-w-[1880px] rounded-[10px] bg-[url(/images/full-bg-design.jpeg)] bg-cover bg-center bg-no-repeat px-5 py-14 sm:px-10 lg:py-20 2xl:px-[100px]">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold md:text-5xl xl:text-[70px]/[84px]">
                            Specifications
                        </h2>
                        <p className="text-gray md:text-xl/6">
                            For the PowerPedals Bike Store
                        </p>
                    </div>
                    <div className="mt-10 md:mt-14">
                        <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Riders age
                                </div>
                                <div className="text-gray">12+</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Frame
                                </div>
                                <div className="text-gray">
                                    Lightweight Alloy Frame of 16T
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Fork
                                </div>
                                <div className="text-gray">
                                    Threadless steel suspension
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Crank
                                </div>
                                <div className="text-gray">
                                    3spd 24TX34TX42T 170mm cotterless with
                                    deflector plate
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Bottom Bracket
                                </div>
                                <div className="text-gray">
                                    Cotterless BB cartridge
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Shifters
                                </div>
                                <div className="text-gray">
                                    Microshift 3x7spd
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Cog Set
                                </div>
                                <div className="text-gray">
                                    7spd 14T-28T free wheel
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Chain Wheel
                                </div>
                                <div className="text-gray">7sp-112 links</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Front Derailleur
                                </div>
                                <div className="text-gray">
                                    Microshift FD-M20, 3spd
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Rear Derailleur
                                </div>
                                <div className="text-gray">
                                    Microshift RD-M21L, 7spd
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Rims
                                </div>
                                <div className="text-gray">
                                    Double walled alloy rim
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Hubs
                                </div>
                                <div className="text-gray">ED black hub</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Tires
                                </div>
                                <div className="text-gray">
                                    26T x 2.35T wide Nylon tires
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Pedals
                                </div>
                                <div className="text-gray">
                                    Plastic body flat pedal
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Brakes
                                </div>
                                <div className="text-gray">
                                    Dual Mechanical Disc 160mm rotor plates
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Brake Levers
                                </div>
                                <div className="text-gray">
                                    Alloy 3-finger mechanical
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Handlebar
                                </div>
                                <div className="text-gray">
                                    Oversized 640mm XMR handlebar
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Stem
                                </div>
                                <div className="text-gray">XMR alloy stem</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Headset
                                </div>
                                <div className="text-gray">
                                    Oversized threadless with spacers
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Grips
                                </div>
                                <div className="text-gray">Closed TPE grip</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Saddle
                                </div>
                                <div className="text-gray">
                                    Soft PU XMR saddle
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Seat Post
                                </div>
                                <div className="text-gray">
                                    300mm ED black seat post
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FeedbackSwiper />
            <RideBanner />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Cycle details",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/cycle-details",
                        "description": "Your journey to the genuine begins here.",
                        "inLanguage": "en",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Cycle details",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/cycle-details"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
