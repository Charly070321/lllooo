"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"

interface Model {
  id: number
  name: string
  lastName: string
  height: number
  bust: number
  waist: number
  hips: number
  shoe: number
  image: string
  gender: "male" | "female"
  category: string[]
}

const models: Model[] = [
  {
    id: 1,
    name: "Baba",
    lastName: "Sarki",
    height: 185,
    bust: 34,
    waist: 27,
    hips: 37,
    shoe: 39,
    image: "/placeholder.svg",
    gender: "male",
    category: ["runway", "commercial"],
  },
  {
    id: 2,
    name: "Cindy",
    lastName: "Smith",
    height: 175,
    bust: 32,
    waist: 24,
    hips: 35,
    shoe: 38,
    image: "/placeholder.svg",
    gender: "female",
    category: ["editorial", "commercial"],
  },
  {
    id: 3,
    name: "Jannah",
    lastName: "Doe",
    height: 180,
    bust: 34,
    waist: 26,
    hips: 36,
    shoe: 40,
    image: "/placeholder.svg",
    gender: "female",
    category: ["runway", "editorial"],
  },
  {
    id: 4,
    name: "Andrea",
    lastName: "Smith",
    height: 178,
    bust: 33,
    waist: 25,
    hips: 35,
    shoe: 39,
    image: "/placeholder.svg",
    gender: "female",
    category: ["commercial", "fitness"],
  },
  {
    id: 5,
    name: "Cassy",
    lastName: "Tailor",
    height: 182,
    bust: 34,
    waist: 26,
    hips: 36,
    shoe: 41,
    image: "/placeholder.svg",
    gender: "female",
    category: ["runway", "swimwear"],
  },
  {
    id: 6,
    name: "Angela",
    lastName: "Bocks",
    height: 176,
    bust: 32,
    waist: 24,
    hips: 34,
    shoe: 38,
    image: "/placeholder.svg",
    gender: "female",
    category: ["editorial", "fitness"],
  },
]

const Models: React.FC = () => {
  const [filteredModels, setFilteredModels] = useState(models)
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"name" | "height">("name")

  const handleFilterChange = () => {
    let result = models

    if (genderFilter !== "all") {
      result = result.filter((model) => model.gender === genderFilter)
    }

    if (categoryFilter !== "all") {
      result = result.filter((model) => model.category.includes(categoryFilter))
    }

    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else {
        return b.height - a.height
      }
    })

    setFilteredModels(result)
  }

  React.useEffect(() => {
    handleFilterChange()
  }, [genderFilter, categoryFilter, sortBy])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Models</h1>
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value as "all" | "male" | "female")}
          className="p-2 border rounded"
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded"
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
          className="p-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="height">Sort by Height</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredModels.map((model) => (
          <Link key={model.id} to={`/models/${model.id}`} className="block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={model.image || "/placeholder.svg"}
                alt={`${model.name} ${model.lastName}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  {model.name} {model.lastName}
                </h2>
                <ul className="text-gray-600">
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
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Models

