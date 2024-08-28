'use client'
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import photo from './carouselImgs/747506.jpg'
import Image from "next/image"

const photos = [photo,photo,photo]

export function HomeCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 15000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full z-0"
    >
      <CarouselContent>
        {photos.map((imagen, index) => (
          <CarouselItem key={index}>
            <div className="flex p-0 items-center justify-center">
                  <Image src={imagen} className="w-full h-[34rem] object-cover" alt="20"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
