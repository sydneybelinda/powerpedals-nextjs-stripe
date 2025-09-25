'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { IBike } from '@/types/bike'
import 'swiper/css'
import Image from 'next/image'
import { IProductDetail } from '@/types/product'

const ProductDetail: IProductDetail[] = [
    {
        id: 1,
        image: '/images/cycle-hero-img1.png',
        alt: 'Cycle',
    },
    {
        id: 1,
        image: '/images/cycle-hero-img2.png',
        alt: 'Cycle',
    },
    {
        id: 1,
        image: '/images/cycle-hero-img3.png',
        alt: 'Cycle',
    },
]

// const ProductDetail: IProductDetail[] = []

export default function CycleDetailSwiper({item}: { item: IBike }) {


    console.log(item)
    //     if( item){
    //         Object.values(item ?? {}).map((d) => (
    //             ProductDetail.push(d)
    //         ))
    // }


    return (
        <div className="relative flex h-full grow items-center justify-center bg-gray-100 px-4 md:px-12 lg:w-[calc(100%-500px)] xl:w-[calc(100%-600px)] 2xl:w-[calc(100%-716px)] 2xl:px-24">
            <button
                type="button"
                className="cycle-detail-btn-prev absolute left-2 top-1/2 z-10 grid size-9 -translate-y-1/2 place-content-center rounded-full border border-black bg-black text-white outline-hidden transition hover:opacity-80 lg:size-11 2xl:left-24"
            >
                <ArrowLeft className="size-5 lg:size-6" />
            </button>
            <button
                type="button"
                className="cycle-detail-btn-next absolute right-2 top-1/2 z-10 grid size-9 -translate-y-1/2 place-content-center rounded-full border border-black bg-black text-white outline-hidden transition hover:opacity-80 lg:size-11 2xl:right-24"
            >
                <ArrowRight className="size-5 lg:size-6" />
            </button>

            <Swiper
                className="cycle-detail-swiper grid! py-10! sm:py-16! lg:min-h-[calc(100vh-90px)] xl:py-[154px]!"
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                speed={1000}
                navigation={{
                    nextEl: '.cycle-detail-btn-next',
                    prevEl: '.cycle-detail-btn-prev',
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {ProductDetail.map((ProductDetail, index) => (
                    <SwiperSlide
                        key={index}
                        className="!flex items-center justify-center"
                    >
                        <div className="flex h-72 items-center justify-center sm:h-96 lg:h-[492px]">
                            <Image
                                src={ProductDetail.image}
                                alt={ProductDetail.alt}
                                className="h-full w-full object-contain"
                                width={940}
                                height={700}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
