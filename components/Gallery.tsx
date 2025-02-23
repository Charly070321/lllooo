"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"

const images = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
]

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimateOnScroll animation="animate-fade-up">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Gallery</h1>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <AnimateOnScroll key={index} animation="animate-fade-up">
            <div
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/placeholder.svg"
              />
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery image"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

