
import CycleColors from '@/components/custom/cycle-colors'
import FeedbackSwiper from '@/components/custom/feedback-swiper'
// import ProductCollectionSwiper from '@/components/custom/product-collection-swiper'
import ProductVariant from '@/components/custom/product-variant'
import RideBanner from '@/components/custom/ridebanner'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import helper from '@/lib/helper'
import { X } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Home | PowerPedals',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Home | PowerPedals',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default async function Home() {
    // const users = await prisma.user.findMany();
    return (
        <>
            <div className="space-y-12 pb-12 lg:space-y-20 lg:pb-20">
                <div>
                    <div className="from-bleach to-bleach-100 overflow-hidden bg-linear-to-l">
                        <div className="container items-end sm:flex">
                            <div className="pt-10 pb-5 sm:pb-40 lg:pt-20 lg:pb-32 xl:py-[124px]">
                                <div className="mb-10 sm:mb-16 xl:mb-[100px]">
                                    <div className="relative z-10 mx-auto mb-1 w-full text-2xl font-bold md:text-5xl/[60px] lg:mb-3 lg:text-6xl/[70px] 2xl:text-[70px]/[84px]">
                                        <h1>Redefine your ride with</h1>
                                        <h2 className="font-roboto font-medium italic">
                                            our bicycle
                                        </h2>
                                    </div>
                                    <p className="text-gray mb-4 lg:mb-[30px] lg:text-xl/6">
                                        Your journey to the genuine begins here.
                                    </p>
                                    <Link href="/about-us">
                                        <Button type="button">
                                            Discover more
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex w-full max-w-[420px] flex-wrap gap-5 sm:gap-8 xl:gap-14">
                                    <div>
                                        <div className="mb-2.5">
                                            <Image
                                                src="/images/sparepart-icon.svg"
                                                alt="spare parts"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <h3 className="mb-1 font-medium lg:text-lg/[22px]">
                                            2 Years
                                        </h3>
                                        <p className="text-gray text-sm lg:text-base/[19px]">
                                            Frame & fork warranty
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mb-2.5">
                                            <Image
                                                src="/images/delivery-icon.svg"
                                                alt="delivery"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <h3 className="mb-1 font-medium lg:text-lg/[22px]">
                                            Free shipping
                                        </h3>
                                        <p className="text-gray text-sm lg:text-base/[19px]">
                                            Home delivery within 10 days
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mb-2.5">
                                            <Image
                                                src="/images/cycle-icon.svg"
                                                alt="cycle"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <h3 className="mb-1 font-medium lg:text-lg/[22px]">
                                            Fully fitted
                                        </h3>
                                        <p className="text-gray text-sm lg:text-base/[19px]">
                                            Cycle
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:-mr-60 sm:-ml-80 sm:w-10/12 2xl:-ml-[407px] 2xl:w-auto">
                                <Image
                                    src="/images/hero-cycle.png"
                                    alt="Hero-cycle"
                                    className="h-full w-full"
                                    width={1330}
                                    height={599}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="from-purple to-bleach-200 bg-linear-to-l">
                        <div className="container flex flex-col items-end sm:flex-row">
                            <div className="order-2 sm:order-1 sm:-mr-80 sm:-ml-28 sm:w-10/12 md:-ml-40 lg:-ml-44 2xl:-mr-[407px] 2xl:-ml-60 2xl:w-auto">
                                <Image
                                    src="/images/trendsetting-cycle.png"
                                    alt="Trendsetting cycle"
                                    className="h-auto w-full"
                                    width={1330}
                                    height={599}
                                />
                            </div>
                            <div className="order-1 w-full pt-12 pb-5 sm:order-2 sm:ml-auto sm:max-w-80 sm:pb-40 md:max-w-[430px] md:pb-52 lg:max-w-[550px] lg:pt-[100px] lg:pb-72 2xl:max-w-[621px] 2xl:pb-[468px]">
                                <div className="relative z-10 mx-auto mb-3 w-full text-2xl font-bold md:text-5xl/[60px] lg:text-6xl/[70px] 2xl:text-[70px]/[84px]">
                                    <h2>Modern riders with</h2>
                                    <h3 className="font-roboto font-medium italic">
                                        trendsetting bikes.
                                    </h3>
                                </div>
                                <p className="text-gray mb-[30px] lg:text-xl/[30px]">
                                    Modern riders with trendsetting bikes:
                                    Leading the way in style, innovation, and
                                    unmatched performance.
                                </p>
                                <Link href="/about-us">
                                    <Button type="button">Discover more</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductVariant />

                {/* <div className="px-4">
                    <ProductCollectionSwiper />
                </div> */}
            </div>
            <div className="flex h-screen flex-col md:min-h-[calc(100vh-90px)] md:flex-row">
                <div className="relative flex h-full min-h-80 w-full grow items-end overflow-hidden transition-all duration-700 ease-in-out md:block md:h-auto md:min-h-0">
                    <span className="absolute inset-0 bg-black/30"></span>
                    <Image
                        src="/images/cycle-video-img1.jpg"
                        alt="Cycle"
                        className="animate-zoom absolute inset-0 h-full w-full object-cover"
                        width={1330}
                        height={800}
                    />
                    <Dialog>
                        <DialogTrigger className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 outline-hidden transition hover:opacity-80">
                            <Image
                                src="/images/youtube-btn.png"
                                alt="youtube"
                                className="size-10 xl:size-20"
                                width={80}
                                height={80}
                            />
                        </DialogTrigger>
                        <DialogContent className="h-auto max-w-3xl bg-transparent px-0 py-5 lg:p-6">
                            <DialogTitle className="hidden"></DialogTitle>
                            <DialogDescription className="hidden"></DialogDescription>
                            <DialogClose className="absolute -top-1 right-1 text-white lg:right-4">
                                <X className="size-5" />
                                <span className="sr-only">Close</span>
                            </DialogClose>
                            <iframe
                                className="h-full min-h-60 w-full sm:min-h-96"
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/9xwazD5SyVg?si=lfHL1wJCDHnlBhZj"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </DialogContent>
                    </Dialog>
                    <div className="absolute inset-y-0 left-0 flex w-40 bg-linear-to-r from-[#000000] to-transparent md:w-[369px]"></div>
                    <div className="relative z-5 flex h-full flex-col items-start justify-end p-5 md:pt-52 md:pb-10 xl:p-[50px]">
                        <div className="mb-3 md:mb-5">
                            <h2 className="mb-1 font-medium text-white md:mb-2 md:text-xl lg:text-2xl xl:text-3xl">
                                GlideWave Motion
                            </h2>
                            <p className="text-success text-xs font-medium tracking-widest uppercase md:text-sm/4">
                                coming soon
                            </p>
                        </div>
                        <Link href="/cycle-details">
                            <Button
                                type="button"
                                className="border-white bg-white text-black hover:bg-transparent hover:text-white"
                            >
                                Learn more
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="relative flex h-full min-h-80 w-full grow items-end overflow-hidden transition-all duration-700 ease-in-out md:block md:h-auto md:min-h-0">
                    <span className="absolute inset-0 bg-white/10 backdrop-blur-xs"></span>
                    <Image
                        src="/images/cycle-video-img2.jpg"
                        alt="Cycle"
                        className="animate-zoom absolute inset-0 h-full w-full object-cover"
                        width={1330}
                        height={800}
                    />
                    <Dialog>
                        <DialogTrigger className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 outline-hidden transition hover:opacity-80">
                            <Image
                                src="/images/youtube-btn.png"
                                alt="youtube"
                                className="size-10 xl:size-20"
                                width={80}
                                height={80}
                            />
                        </DialogTrigger>
                        <DialogContent className="h-auto max-w-3xl bg-transparent px-0 py-5 lg:p-6">
                            <DialogTitle className="hidden"></DialogTitle>
                            <DialogDescription className="hidden"></DialogDescription>
                            <DialogClose className="absolute -top-1 right-1 text-white lg:right-4">
                                <X className="size-5" />
                                <span className="sr-only">Close</span>
                            </DialogClose>
                            <iframe
                                className="h-full min-h-60 w-full sm:min-h-96"
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/9xwazD5SyVg?si=lfHL1wJCDHnlBhZj"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </DialogContent>
                    </Dialog>
                    <div className="absolute inset-x-0 bottom-0 flex h-1/2 bg-linear-to-t from-[#000000] to-transparent"></div>
                    <div className="relative z-5 flex h-full flex-col items-start justify-end p-5 md:pt-52 md:pb-10 xl:p-[50px]">
                        <div className="mb-3 md:mb-5">
                            <h2 className="mb-1 font-medium text-white md:mb-2 md:text-xl lg:text-2xl xl:text-3xl">
                                EcoSpin Revolution
                            </h2>
                            <p className="text-success text-xs font-medium tracking-widest uppercase md:text-sm/4">
                                coming soon
                            </p>
                        </div>
                        <Link href="/cycle-details">
                            <Button
                                type="button"
                                className="border-white bg-white text-black hover:bg-transparent hover:text-white"
                            >
                                Learn more
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <CycleColors />
            <FeedbackSwiper />
            <RideBanner />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "PowerPedals",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
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
                            }]
                        }
                    }`,
                }}
            />
                {/* <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div> */}
        </>
    )
}
