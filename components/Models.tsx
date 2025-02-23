"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"
import { models } from "./data/models"

const Models: React.FC = () => {
  const [filteredModels, setFilteredModels] = useState(models)
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"name" | "height">("name")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    let result = models

    if (genderFilter !== "all") {
      result = result.filter((model) => model.gender === genderFilter)
    }

    if (categoryFilter !== "all") {
      result = result.filter((model) => model.category.includes(categoryFilter))
    }

    if (searchTerm) {
      result = result.filter(
        (model) =>
          model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          model.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else {
        return b.height - a.height
      }
    })

    setFilteredModels(result)
  }, [genderFilter, categoryFilter, sortBy, searchTerm])

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimateOnScroll animation="animate-fade-up">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Models</h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate-fade-up">
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value as "all" | "male" | "female")}
            className="p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Categories</option>
            <option value="runway">Runway</option>
            <option value="editorial">Editorial</option>
            <option value="commercial">Commercial</option>
            <option value="fitness">Fitness</option>
            <option value="swimwear">Swimwear</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "name" | "height")}
            className="p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="name">Sort by Name</option>
            <option value="height">Sort by Height</option>
          </select>
        </div>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredModels.map((model) => (
          <AnimateOnScroll key={model.id} animation="animate-fade-up">
            <Link href={`/models/${model.id}`}>
              <div className="bg-card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="aspect-[2/3] overflow-hidden">
                  <Image
                    src={model.image || "/placeholder.svg"}
                    alt={`${model.name} ${model.lastName} - Fashion model`}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-primary">
                    {model.name} {model.lastName}
                  </h2>
                  <ul className="text-muted-foreground">
                    <li>Height: {model.height} cm</li>
                    <li>Bust: {model.bust} cm</li>
                    <li>Waist: {model.waist} cm</li>
                    <li>Hips: {model.hips} cm</li>
                    <li>Shoe: {model.shoe}</li>
                  </ul>
                  <div className="mt-4">
                    {model.category.map((cat, index) => (
                      <span
                        key={index}
                        className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  )
}

export default Models

