import prisma from '@/lib/prisma'
import FeedbackSwiper from '@/components/custom/feedback-swiper'
import ProductCard from '@/components/custom/product-card'
import RideBanner from '@/components/custom/ridebanner'
import { Button } from '@/components/ui/button'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import helper from '@/lib/helper'
import { ICard } from '@/types/product'
import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'women cycle | PowerPedals',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'women cycle | PowerPedals',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/women-cycle',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/women-cycle`,
    },
}


export default async function WomenCycle() {
         const bikes = await prisma.bike.findMany();
    return (
        <>
            <div className="overflow-hidden bg-[#F6F6F6]">
                <div className="container relative">
                    <div className="absolute -right-60 bottom-0 hidden w-[900px] lg:block">
                        <div className="absolute left-0 top-0 h-full w-[200px] bg-linear-to-r from-[#F6F6F6] to-transparent"></div>
                        <Image
                            src="/images/buliding-sktech.png"
                            alt="Cycle"
                            className="w-full"
                            width={900}
                            height={500}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="relative py-14 md:py-16 grow">
                            <div className="text-3xl sm:text-4xl/tight md:text-6xl/tight xl:text-[70px]/[84px]">
                                <h1 className="font-bold">Women Bikes</h1>
                                <h2 className="font-roboto font-medium italic">
                                    Unmatchable dynamics
                                </h2>
                            </div>
                            <p className="mt-3 text-gray md:text-xl">
                                Your journey to the genuine begins here.
                            </p>
                            <div className="mt-7 flex flex-wrap items-center gap-5">
                                <Link href="/cycle-details">
                                    <Button type="button" className="btn">
                                        Preorder now
                                    </Button>
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="flex items-center gap-2.5 text-sm font-medium transition hover:opacity-80"
                                >
                                    <span>Book test ride</span>
                                    <div className="grid size-10 place-content-center rounded-full bg-success text-white">
                                        <ArrowUpRight className="size-5 shrink-0" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="relative hidden lg:block xl:h-96 2xl:h-[500px]">
                            <Image
                                src="/images/women-banner-cycle.png"
                                alt="Cycle"
                                className="w-full h-full object-contain"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-14 lg:pt-20">
                <div className="mx-auto grid max-w-[1852px] gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-10 2xl:grid-cols-4 2xl:gap-14">
        {bikes.map((bike) => (
         
            <ProductCard key={bike.id} card={bike} />
        
        ))}
                </div>
                <Pagination className="mt-10 md:mt-14">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">10</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <FeedbackSwiper />
            <RideBanner />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "women cycle",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/women-cycle",
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
                                "name": "women cycle",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/women-cycle"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
