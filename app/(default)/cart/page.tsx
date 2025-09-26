
import helper from '@/lib/helper'

import { Metadata } from 'next'

import MainCart from '@/components/custom/main-cart'

export const metadata: Metadata = {
    title: 'Cart | PowerPedals',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Cart | PowerPedals',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/cart',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
    },
}

export default function Cart() {
    return (
        <>
            <div className="grid lg:grid-cols-2">


<MainCart />

            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Cart",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/cart",
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
                                "name": "cart",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/cart"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
