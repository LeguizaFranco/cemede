import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const galleryItems = [
    { imageSrc: "/image/cemede1.JPG", altText: "Imagen 1 de la galería" },
    { imageSrc: "/image/cemede1.JPG", altText: "Imagen 2 de la galería" },
    { imageSrc: "/image/cemede3.jpg", altText: "Imagen 3 de la galería" },
    { imageSrc: "/image/cemede3.jpg", altText: "Imagen 4 de la galería" },

];

export function CarouselDemo() {
    return (
        <Carousel className="w-full max-w-2xl mx-auto"
        >
            <CarouselContent >
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem key={index}>

                        <Card className="flex justify-center items-center">
                            <CardContent className="flex items-center justify-center">
                                <img src={galleryItems[index].imageSrc} alt={galleryItems[index].altText} className="rounded-xl" />
                            </CardContent>
                        </Card>

                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}