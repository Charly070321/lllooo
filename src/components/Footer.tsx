import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">laLoona</h3>
            <p>A Professional Modelling Site</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Phone: +2348141714172</p>
            <p>Email: ModelBylaLoonah@gmail.com</p>
            <p>Website: www.laLoona.co</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} laLoona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

