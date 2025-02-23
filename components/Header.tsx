"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Models", path: "/models" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="bg-background shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-18%20at%2017.39.15-IxL1XQUEhpafzWL9pWJMqcBxdNPBDL.jpeg"
              alt="Laloona Logo"
              className="h-16 w-auto"
            />
            <span className="font-pacifico text-2xl text-primary">LaLoona</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium font-sans text-lg"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-primary"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="bg-background px-4 py-2" aria-label="Mobile navigation">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="block text-primary hover:text-primary/80 transition-colors duration-300 py-2 font-sans text-lg"
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

