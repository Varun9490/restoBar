// components/ui/Carousel.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./button";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="relative h-96 w-full">
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <Button onClick={prevImage}>&larr;</Button>
        <Button onClick={nextImage}>&rarr;</Button>
      </div>
    </div>
  );
}
