"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-18%20at%2017.39.15-IxL1XQUEhpafzWL9pWJMqcBxdNPBDL.jpeg"
              alt="Laloona Logo"
              className="h-16 w-auto"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "Models", path: "/models" },
                { name: "Gallery", path: "/gallery" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-[#FF1493] hover:text-[#FF69B4] transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden text-[#FF1493]" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white px-4 py-2">
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Models", path: "/models" },
                { name: "Gallery", path: "/gallery" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block text-[#FF1493] hover:text-[#FF69B4] transition-colors duration-300 py-2"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

