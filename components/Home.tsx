"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Users, Camera, Building2, ShoppingBag } from "lucide-react"
import HeroSlider from "./HeroSlider"
import SignupCard from "./SignupCard"
import AnimateOnScroll from "./AnimateOnScroll"
import { models } from "./data/models"

declare global {
  interface Window {
    jQuery: any
    $: any
  }
}

export default function Home() {
  useEffect(() => {
    // Load jQuery and YTPlayer scripts
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script")
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    }

    const initYTPlayer = () => {
      if (window.jQuery) {
        window.jQuery("#video-background").YTPlayer({
          videoURL: "https://www.youtube.com/watch?v=IVN5Y1uUubQ",
          containment: "body",
          showControls: false,
          autoPlay: true,
          loop: true,
          mute: true,
          startAt: 0,
          opacity: 1,
          quality: "default",
        })
      }
    }

    Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.9/jquery.mb.YTPlayer.min.js"),
    ])
      .then(() => {
        initYTPlayer()
      })
      .catch((error) => console.error("Error loading scripts:", error))

    return () => {
      // Clean up YTPlayer when component unmounts
      if (window.jQuery && window.jQuery("#video-background").YTPlayer) {
        window.jQuery("#video-background").YTPlayer("destroy")
      }
    }
  }, [])

  return (
    <div className="bg-background text-foreground">
      <div id="video-background"></div>
      <HeroSlider />
      <div className="container mx-auto px-4 py-12">
        <AnimateOnScroll animation="animate-fade-up">
          <section className="mb-16 text-center">
            <h1 className="text-5xl font-serif font-bold mb-4 text-[#FF1493]">Welcome to laLoona</h1>
            <p className="text-xl mb-8 font-sans">A Professional Modelling Site</p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Where models and clients come together and create outstanding fashion projects, safely and easily
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#FFF0F5] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#FF1493]">Hire a model</h3>
                <p className="text-gray-600">Find the perfect talent for your project</p>
              </div>
              <div className="bg-[#FFF0F5] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#FF1493]">Be Hired as the model</h3>
                <p className="text-gray-600">Start your modeling career with us</p>
              </div>
              <div className="bg-[#FFF0F5] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#FF1493]">Make Fashion Reality</h3>
                <p className="text-gray-600">Turn your imagination into reality</p>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-up">
          <section className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-8 text-[#FF1493]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Fashion Shows",
                  description: "Professional runway shows and fashion events",
                  icon: <Users className="h-8 w-8 mb-4 text-[#FF1493]" />,
                },
                {
                  title: "Corporate Events",
                  description: "Brand representation and corporate modeling",
                  icon: <Building2 className="h-8 w-8 mb-4 text-[#FF1493]" />,
                },
                {
                  title: "Commercial Photo Shoots",
                  description: "Professional photography sessions",
                  icon: <Camera className="h-8 w-8 mb-4 text-[#FF1493]" />,
                },
                {
                  title: "Exhibitions/Trade Shows",
                  description: "Product and brand exhibitions",
                  icon: <ShoppingBag className="h-8 w-8 mb-4 text-[#FF1493]" />,
                },
              ].map((service, index) => (
                <AnimateOnScroll key={index} animation="animate-fade-up">
                  <div className="bg-[#FFF0F5] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
                    {service.icon}
                    <h3 className="text-xl font-serif font-semibold mb-4 text-[#FF1493]">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-up">
          <section className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-8 text-primary">Featured Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {models.slice(0, 8).map((model) => (
                <AnimateOnScroll key={model.id} animation="animate-fade-up">
                  <div className="bg-card shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <Image
                      src={model.image || "/placeholder.svg"}
                      alt={`${model.name} ${model.lastName} - Fashion model`}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/placeholder.svg"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-serif font-semibold mb-2 text-primary">
                        {model.name} {model.lastName}
                      </h3>
                      <ul className="text-muted-foreground text-sm">
                        <li>Height: {model.height} cm</li>
                        <li>Bust: {model.bust} cm</li>
                        <li>Waist: {model.waist} cm</li>
                        <li>Hips: {model.hips} cm</li>
                      </ul>
                      <Link
                        href={`/models/${model.id}`}
                        className="mt-4 text-primary hover:text-primary/80 flex items-center font-sans"
                      >
                        View Profile <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/models"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300 font-sans"
              >
                View All Models <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-up">
          <section className="mb-16">
            <h2 className="text-4xl font-pacifico font-bold text-center mb-8 text-primary">Catwalk Showcase</h2>
            <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/IVN5Y1uUubQ?autoplay=1&mute=1&loop=1&playlist=IVN5Y1uUubQ&controls=0&showinfo=0"
                title="Catwalk Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-up">
          <section className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-8 text-[#FF1493]">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((id) => (
                <AnimateOnScroll key={id} animation="animate-fade-up">
                  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Image
                        src={`/placeholder.svg?height=50&width=50`}
                        alt={`Client ${id}`}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="/placeholder.svg"
                      />
                      <div>
                        <h3 className="font-serif font-semibold text-[#FF1493]">Client Name</h3>
                        <p className="text-gray-600 font-sans">Company</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "LaLoona provided exceptional models for our fashion show. Their professionalism and talent made
                      our event a huge success!"
                    </p>
                    <div className="flex text-[#FF1493]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-up">
          <section className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-8 text-[#FF1493]">Join LaLoona</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <SignupCard
                type="model"
                title="Become a Model"
                description="Start your modeling career with LaLoona. Showcase your talent and connect with top brands and designers."
                image="/placeholder.svg?height=300&width=400"
              />
              <SignupCard
                type="client"
                title="Hire Models"
                description="Find the perfect models for your projects. Access our diverse portfolio of talented professionals."
                image="/placeholder.svg?height=300&width=400"
              />
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-up">
          <section className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-8 text-[#FF1493]">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-2">Phone</h3>
                <p className="font-sans">+2348141714172</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-2">Email</h3>
                <p className="font-sans">ModelBylaLoonah@gmail.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-2">Website</h3>
                <p className="font-sans">www.laLoona.co</p>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  )
}

