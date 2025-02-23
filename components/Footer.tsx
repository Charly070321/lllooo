import type React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-100 dark:bg-gray-800 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 font-pacifico">laLoona</h3>
            <p className="font-sans">A Professional Modelling Site</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 font-pacifico">Contact Us</h4>
            <p className="font-sans">Phone: +2348141714172</p>
            <p className="font-sans">Email: ModelBylaLoonah@gmail.com</p>
            <p className="font-sans">Website: www.laLoona.co</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4 font-pacifico">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-sans"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-sans"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-sans"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="font-sans">&copy; {new Date().getFullYear()} laLoona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

