"use client"; // Ensure this is a client-side rendered component

import React, { useState } from "react";
import { PiEngineFill } from "react-icons/pi";
import { FaGasPump, FaPalette, FaShieldAlt, FaCarSide } from "react-icons/fa";
import { SiGoogleearthengine } from "react-icons/si";
import Image from "next/image";
import image1 from "../app/assets/img1.jpg";  
import Image2 from "../app/assets/img2.jpg";
import Image3 from "../app/assets/img3.png";
const images = [
  image1, Image2, Image3
]

const Card = () => {
  // Key Specs
  const keySpecs = [
    { icon: <PiEngineFill />, label: "Engine", value: "2000CC" },
    { icon: <FaGasPump />, label: "Fuel Type", value: "Petrol" },
    { icon: <SiGoogleearthengine />, label: "Torque", value: "300Nm" },
    { icon: <FaPalette />, label: "Color", value: "Red" },
    { icon: <FaShieldAlt />, label: "Warranty", value: "5 Years" },
    { icon: <FaCarSide />, label: "Fuel Tank", value: "67L" },
    { icon: <FaShieldAlt />, label: "Safety", value: "9/10" },
  ];

  // State for hero image
  const [heroImage, setHeroImage] = useState(images[0]);

  return (
    <div className="max-w-md bg-white mx-auto mt-8 border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        {/* Header */}
        <h2 className="text-2xl font-extrabold text-teal-600 tracking-wide mb-4">
          Maruti Suzuki WagonR
        </h2>

        <div className="flex gap-4">
          {/* Left Section: Hero Image and More Images */}
          <div className="w-2/3">
            {/* Hero Image */}
            <div className="w-64 h-64 rounded-md overflow-hidden border">
              <Image
                src={heroImage}
                alt="Hero"
                width={300}
                height={400}
                className="w-full h-full object-fit"
              />
            </div>

            {/* Additional Images */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="h-10 w-10 rounded-md overflow-hidden border cursor-pointer"
                  onClick={() => setHeroImage(image)} // Update hero image on click
                >
                  <Image
                    src={image}
                    alt={`Image`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Key Specs */}
          <div className="w-1/3">
            <h3 className="font-bold text-indigo-600 mb-3 text-lg border-b pb-1">
              Key Specs
            </h3>
            {keySpecs.map((spec, index) => (
              <div
                key={index}
                className="flex items-center gap-3 py-2 border-b last:border-b-0"
              >
                <div className="flex items-center justify-center bg-indigo-100 p-2 rounded-full text-xl text-indigo-700">
                  {React.cloneElement(spec.icon, { className: "text-indigo-700" })}
                </div>
                <div>
                  <h4 className="text-gray-600 text-xs uppercase tracking-wider font-bold">
                    {spec.label}
                  </h4>
                  <p className="text-gray-900 font-semibold text-sm">
                    {spec.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center border-t pt-3">
            <p className="text-gray-600 text-sm font-semibold">
              Release Date in India:
            </p>
            <p className="text-teal-600 font-bold text-sm">19 Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
