// app/events/[eventId]/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

// Dummy events data for demonstration
const events = [
  {
    id: "1",
    title: "Live Music Night",
    date: "2025-04-20",
    description:
      "Join us for an unforgettable evening of live music and exceptional coffee. Enjoy performances by local bands, indulge in our exclusive coffee menu, and soak in an atmosphere where art, sound, and aroma come together. This event is perfect for music lovers and coffee aficionados alike, promising a night of creativity, culture, and community.",
    image: "/events/event1.jpg",
  },
  {
    id: "2",
    title: "Coffee Brewing Workshop",
    date: "2025-05-05",
    description:
      "Dive into the art and science of coffee brewing with our expert baristas. In this interactive workshop, you'll learn various brewing techniques, the secrets behind the perfect extraction, and tips for choosing the right beans to suit your palate. Whether you're new to coffee or a seasoned enthusiast, this workshop offers insights to help you elevate your coffee-making skills.",
    image: "/events/event2.jpg",
  },
];

export default function EventDetailPage({ params }) {
  const { eventId } = params;
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="container mx-auto py-12">
        <h2>Event Not Found</h2>
        <Link href="/events">Go Back to Events</Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/events"
          className="text-amber-200 hover:underline mb-4 inline-block"
        >
          &larr; Back to Events
        </Link>
        <div className="bg-white/5 p-8 rounded-xl shadow-lg">
          <div className="relative h-64 w-full mb-6">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
          <p className="mb-4">Date: {event.date}</p>
          <p className="text-base">{event.description}</p>
        </div>
      </div>
    </section>
  );
}
