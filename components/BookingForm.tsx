"use client"

import type React from "react"
import { useState } from "react"
import { Calendar } from "lucide-react"

interface BookingFormProps {
  modelId: number
  modelName: string
}

const BookingForm: React.FC<BookingFormProps> = ({ modelId, modelName }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "",
    eventType: "",
    additionalInfo: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", { modelId, modelName, ...formData })
    alert("Booking request submitted successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold mb-4 text-[#FF1493]">Book {modelName}</h3>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF1493] focus:ring focus:ring-[#FF69B4] focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF1493] focus:ring focus:ring-[#FF69B4] focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Duration (hours)
        </label>
        <input
          type="number"
          id="duration"
          name="duration"
          required
          min="1"
          max="24"
          value={formData.duration}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF1493] focus:ring focus:ring-[#FF69B4] focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
          Event Type
        </label>
        <select
          id="eventType"
          name="eventType"
          required
          value={formData.eventType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF1493] focus:ring focus:ring-[#FF69B4] focus:ring-opacity-50"
        >
          <option value="">Select event type</option>
          <option value="photoshoot">Photoshoot</option>
          <option value="runway">Runway Show</option>
          <option value="commercial">Commercial Filming</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          value={formData.additionalInfo}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF1493] focus:ring focus:ring-[#FF69B4] focus:ring-opacity-50"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 flex items-center justify-center"
      >
        <Calendar className="mr-2" size={20} />
        Book Now
      </button>
    </form>
  )
}

export default BookingForm

