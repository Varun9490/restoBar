// app/menu/page.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    name: "Ethiopian Pour Over",
    price: 4.99,
    description: "Single-origin light roast with floral notes",
    image: "/menu/pour-over.jpg",
  },
  {
    id: 2,
    name: "Cappuccino Classico",
    price: 3.99,
    description: "Traditional Italian recipe with organic milk",
    image: "/menu/cappuccino.jpg",
  },
  {
    id: 3,
    name: "Matcha Latte",
    price: 4.5,
    description: "Ceremonial-grade matcha with oat milk",
    image: "/menu/matcha.jpg",
  },
  // Add more items as needed
];

export default function MenuPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="menu" className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
          Artisan Creations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-amber-900/20 hover:border-amber-900/30 transition-all"
            >
              <Link href={`/menu/${item.id}`}>
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-sm">${item.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-amber-100/70">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
