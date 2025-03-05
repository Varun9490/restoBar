// app/events/page.jsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    id: "1",
    title: "Live Music Night",
    date: "2025-04-20",
    description: "Enjoy live performances and a special coffee menu.",
    image: "/events/event1.jpg",
  },
  {
    id: "2",
    title: "Coffee Brewing Workshop",
    date: "2025-05-05",
    description: "Learn the art of brewing with our expert baristas.",
    image: "/events/event2.jpg",
  },
];

export default function EventsPage() {
  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Upcoming Events
        </h2>
        <div className="space-y-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Link href={`/events/${event.id}`}>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-sm text-amber-100/70">{event.description}</p>
                <p className="mt-2 text-sm">Date: {event.date}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
