import type React from "react"
import { Link } from "react-router-dom"
import HeroSlider from "../components/HeroSlider"
import SignupCard from "../components/SignupCard"
import { ArrowRight, Star } from "lucide-react"

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSlider />
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-8 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Fashion Shows", "Corporate Events", "Commercial Photo Shoots", "Exhibitions/Trade Shows"].map(
              (service, index) => (
                <div
                  key={index}
                  className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-serif font-semibold mb-4 text-primary">{service}</h3>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-8 text-primary">Featured Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Featured Model ${id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-primary">Model Name</h3>
                  <p className="text-gray-600 mb-2">Category: Runway, Editorial</p>
                  <Link to={`/models/${id}`} className="text-primary hover:text-primary-dark flex items-center">
                    View Profile <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/models" className="btn-primary inline-flex items-center">
              View All Models <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-8 text-primary">Catwalk Showcase</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Catwalk Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-8 text-primary">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`/placeholder.svg?height=50&width=50`}
                    alt={`Client ${id}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-serif font-semibold text-primary">Client Name</h3>
                    <p className="text-gray-600">Company</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "LaLoona provided exceptional models for our fashion show. Their professionalism and talent made our
                  event a huge success!"
                </p>
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-8 text-primary">Join LaLoona</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <SignupCard
              type="model"
              title="Become a Model"
              description="Start your modeling career with LaLoona. Showcase your talent and connect with top brands and designers."
              image="/placeholder.svg?height=300&width=400"
            />
            <SignupCard
              type="client"
              title="Hire Models"
              description="Find the perfect models for your projects. Access our diverse portfolio of talented professionals."
              image="/placeholder.svg?height=300&width=400"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

