"use client"

import Link from "next/link"

interface SignupCardProps {
  type: "model" | "client"
  title: string
  description: string
  image: string
}

const SignupCard = ({ type, title, description, image }: SignupCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={image || "/placeholder.svg"} alt={title} />
      <div className="px-6 py-4">
        <div className="font-serif font-bold text-xl mb-2 text-[#FF1493]">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <Link
          href={`/signup/${type}`}
          className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded w-full text-center inline-block transition-colors duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default SignupCard

