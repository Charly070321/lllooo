import type React from "react"
import { Link } from "react-router-dom"

interface SignupCardProps {
  type: "model" | "client"
  title: string
  description: string
  image: string
}

const SignupCard: React.FC<SignupCardProps> = ({ type, title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={image || "/placeholder.svg"} alt={title} />
      <div className="px-6 py-4">
        <div className="font-serif font-bold text-xl mb-2 text-primary">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <Link to={`/signup/${type}`} className="btn-primary w-full text-center inline-block">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default SignupCard

