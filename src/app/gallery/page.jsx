// app/gallery/page.jsx
"use client";
import Carousel from "@/components/ui/Carousel";

const images = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  // Add more image paths as needed
];

export default function GalleryPage() {
  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Gallery
        </h2>
        <Carousel images={images} />
      </div>
    </section>
  );
}
