import type React from "react"

const services = [
  {
    title: "Fashion Shows",
    description:
      "Our models are trained to walk the runway with grace and confidence, showcasing your designs to their full potential.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Commercial Photo Shoots",
    description: "From product photography to lifestyle shoots, our models can bring your brand vision to life.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Corporate Events",
    description: "Add a touch of professionalism and glamour to your corporate events with our experienced models.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Trade Shows & Exhibitions",
    description: "Our promotional models can help attract attention to your booth and engage with potential customers.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

