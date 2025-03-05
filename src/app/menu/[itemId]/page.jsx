// app/menu/[itemId]/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

// Dummy data for demo purposes
const menuItems = [
  {
    id: "1",
    name: "Ethiopian Pour Over",
    price: 4.99,
    description: "Single-origin light roast with floral notes",
    image: "/menu/pour-over.jpg",
  },
  {
    id: "2",
    name: "Cappuccino Classico",
    price: 3.99,
    description: "Traditional Italian recipe with organic milk",
    image: "/menu/cappuccino.jpg",
  },
];

export default function MenuDetailPage({ params }) {
  const { itemId } = params;
  const item = menuItems.find((menuItem) => menuItem.id === itemId);

  if (!item) {
    return (
      <div className="container mx-auto py-12">
        <h2>Menu Item Not Found</h2>
        <Link href="/menu">Go Back to Menu</Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/menu"
          className="text-amber-200 hover:underline mb-4 inline-block"
        >
          &larr; Back to Menu
        </Link>
        <div className="bg-white/5 p-8 rounded-xl shadow-lg">
          <div className="relative h-64 w-full mb-6">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
          <p className="mb-4">{item.description}</p>
          <span className="text-xl font-semibold">${item.price}</span>
        </div>
      </div>
    </section>
  );
}
