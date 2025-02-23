"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"
import BookingForm from "./BookingForm"
import type { Model } from "./data/models"

interface ModelDetailsProps {
  model: Model
}

const ModelDetails: React.FC<ModelDetailsProps> = ({ model }) => {
  const [showBookingForm, setShowBookingForm] = useState(false)

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimateOnScroll animation="animate-fade-up">
        <Link href="/models" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Models
        </Link>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimateOnScroll animation="animate-fade-up">
          <div className="md:col-span-1">
            <Image
              src={model.image || "/placeholder.svg"}
              alt={`${model.name} ${model.lastName}`}
              width={600}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <div className="bg-secondary p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Measurements</h2>
              <ul className="space-y-2">
                <li>Height: {model.height} cm</li>
                <li>Bust: {model.bust} cm</li>
                <li>Waist: {model.waist} cm</li>
                <li>Hips: {model.hips} cm</li>
                <li>Shoe: {model.shoe}</li>
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="animate-fade-up">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              {model.name} {model.lastName}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {model.category.map((cat, index) => (
                <span
                  key={index}
                  className="inline-block bg-secondary text-primary rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {cat}
                </span>
              ))}
            </div>
            <p className="text-xl mb-6">{model.bio}</p>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Experience</h2>
              <ul className="list-disc list-inside space-y-2">
                {model.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  {model.email}
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  {model.phone}
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Social Media</h2>
              <div className="flex space-x-4">
                {model.socialMedia.instagram && (
                  <a
                    href={`https://instagram.com/${model.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <Instagram size={24} />
                  </a>
                )}
                {model.socialMedia.twitter && (
                  <a
                    href={`https://twitter.com/${model.socialMedia.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <Twitter size={24} />
                  </a>
                )}
                {model.socialMedia.facebook && (
                  <a
                    href={`https://facebook.com/${model.socialMedia.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <Facebook size={24} />
                  </a>
                )}
              </div>
            </div>
            <button
              onClick={() => setShowBookingForm(!showBookingForm)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300"
            >
              <Calendar className="mr-2" size={20} />
              {showBookingForm ? "Hide Booking Form" : "Book This Model"}
            </button>
            {showBookingForm && (
              <div className="mt-8">
                <BookingForm modelId={model.id} modelName={`${model.name} ${model.lastName}`} />
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll animation="animate-fade-up">
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {model.portfolio.map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${model.name} ${model.lastName} portfolio ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}

export default ModelDetails

