import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Mail, Phone } from 'lucide-react';

interface Model {
  id: number;
  name: string;
  lastName: string;
  height: number;
  bust: number;
  waist: number;
  hips: number;
  shoe: number;
  image: string;
  gender: "male" | "female";
  category: string[];
  bio: string;
  portfolio: string[];
  experience: string[];
  socialMedia: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  email: string;
  phone: string;
}

const models: Model[] = [
  {
    id: 1,
    name: "Baba",
    lastName: "Sarki",
    height: 185,
    bust: 34,
    waist: 27,
    hips: 37,
    shoe: 39,
    image: "/placeholder.svg?height=600&width=400",
    gender: "male",
    category: ["runway", "commercial"],
    bio: "Baba Sarki is an experienced male model with a strong presence on the runway and in commercial shoots. With his unique look and versatile style, Baba has become a favorite among designers and photographers alike.",
    portfolio: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    experience: [
      "New York Fashion Week 2022",
      "Vogue Italia Cover, March 2023",
      "Global Fashion Campaign for XYZ Brand",
      "Paris Fashion Week 2023",
    ],
    socialMedia: {
      instagram: "@babasarki",
      twitter: "@babasarki_official",
    },
    email: "baba.sarki@laloona.com",
    phone: "+1234567890",
  },
  // Add more models here...
];

const ModelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const model = models.find((m) => m.id === Number.parseInt(id || ""));

  if (!model) {
    return <div className="container mx-auto px-4 py-12">Model not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/models" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to Models
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img
            src={model.image || "/placeholder.svg"}
            alt={`${model.name} ${model.lastName}`}
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Measurements</h2>
            <ul className="space-y-2">
              <li>Height: {model.height} cm</li>
              <li>Bust: {model.bust} cm</li>
              <li>Waist: {model.waist} cm</li>
              <li>Hips: {model.hips} cm</li>
              <li>Shoe: {model.shoe}</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">
            {model.name} {model.lastName}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {model.category.map((cat, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold"
              >
                {cat}
              </span>
            ))}
          </div>
          <p className="text-xl mb-6">{model.bio}</p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <ul className="list-disc list-inside space-y-2">
              {model.experience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                {model.email}
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                {model.phone}
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              {model.socialMedia.instagram && (
                <a
                  href={`https://instagram.com/${model.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Instagram
                </a>
              )}
              {model.socialMedia.twitter && (
                <a
                  href={`https://twitter.com/${model.socialMedia.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Twitter
                </a>
              )}
              {model.socialMedia.facebook && (
                <a
                  href={`https://facebook.com/${model.socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <Calendar className="mr-2" size={20} />
            Book This Model
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {model.portfolio.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`${model.name} ${model.lastName} portfolio ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;

