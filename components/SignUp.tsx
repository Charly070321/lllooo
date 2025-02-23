"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AnimateOnScroll from "./AnimateOnScroll"

interface SignUpProps {
  type: "model" | "client"
}

const SignUp: React.FC<SignUpProps> = ({ type }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    ...(type === "model"
      ? {
          height: "",
          bust: "",
          waist: "",
          hips: "",
          shoeSize: "",
          experience: "",
        }
      : {
          companyName: "",
          position: "",
          industry: "",
        }),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to an API)
    console.log("Form submitted:", formData)
    // Redirect to a thank you page or dashboard
    router.push("/thank-you")
  }

  const inputClassName =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF1493] focus:ring focus:ring-[#FF69B4] focus:ring-opacity-50 text-lg font-medium py-2 px-3"

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimateOnScroll animation="animate-fade-up">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#FF1493]">
          Sign Up as a {type === "model" ? "Model" : "Client"}
        </h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate-fade-up">
        <div
          className={`max-w-2xl mx-auto ${type === "model" ? "bg-white bg-opacity-90 p-8 rounded-lg shadow-lg" : ""}`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClassName}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>
            {type === "model" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      required
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label htmlFor="bust" className="block text-sm font-medium text-gray-700">
                      Bust (cm)
                    </label>
                    <input
                      type="number"
                      id="bust"
                      name="bust"
                      value={formData.bust}
                      onChange={handleChange}
                      required
                      className={inputClassName}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="waist" className="block text-sm font-medium text-gray-700">
                      Waist (cm)
                    </label>
                    <input
                      type="number"
                      id="waist"
                      name="waist"
                      value={formData.waist}
                      onChange={handleChange}
                      required
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label htmlFor="hips" className="block text-sm font-medium text-gray-700">
                      Hips (cm)
                    </label>
                    <input
                      type="number"
                      id="hips"
                      name="hips"
                      value={formData.hips}
                      onChange={handleChange}
                      required
                      className={inputClassName}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="shoeSize" className="block text-sm font-medium text-gray-700">
                    Shoe Size
                  </label>
                  <input
                    type="number"
                    id="shoeSize"
                    name="shoeSize"
                    value={formData.shoeSize}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Modeling Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    className={inputClassName}
                  ></textarea>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                  >
                    <option value="">Select an industry</option>
                    <option value="fashion">Fashion</option>
                    <option value="advertising">Advertising</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}
            <div>
              <button
                type="submit"
                className="w-full bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 text-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </AnimateOnScroll>
    </div>
  )
}

export default SignUp

