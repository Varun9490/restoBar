// components/testimonials.tsx
"use client";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "The best artisanal coffee in downtown! As a daily commuter, their fair-trade espresso shots give me the perfect morning energy boost. Five stars for sustainability!",
    name: "Emily Rodriguez",
    title: "Local Office Worker & Coffee Blogger",
  },
  {
    quote:
      "Top-rated specialty coffee shop with amazing vegan options. Their oat milk cappuccino and gluten-free banana bread make this my go-to breakfast spot in the city center.",
    name: "Priya Nair",
    title: "Plant-Based Food Influencer",
  },
  {
    quote:
      "Best coffee shop near me for remote work! Fast WiFi, plentiful outlets, and their signature cold brew keeps me productive all afternoon. Highly recommend to digital nomads!",
    name: "David Chen",
    title: "Tech Professional & Google Local Guide",
  },
  {
    quote:
      "Family-friendly cafe with the most delicious organic pastries. My kids love the hot chocolate while I enjoy their award-winning pour-over coffee. Perfect weekend treat!",
    name: "The Walker Family",
    title: "Local Residents",
  },
  {
    quote:
      "As a professional barista, I rate this as the top coffee house in the area. Their single-origin beans and precision brewing techniques rival big city cafes.",
    name: "Michaela Petrov",
    title: "Certified Coffee Expert & Yelp Reviewer",
  },
  {
    quote:
      "Affordable luxury coffee shop with amazing seasonal drinks. The pumpkin spice latte here beats all chain coffee places - real spices and perfect sweetness!",
    name: "Sarah Johnson",
    title: "Seasonal Menu Enthusiast",
  },
  {
    quote:
      "Best cafe for studying near the university campus. Quiet atmosphere, endless refills of their smooth cold brew, and comfortable seating. My GPA thanks them!",
    name: "Jordan Taylor",
    title: "Honors Student at City University",
  },
  {
    quote:
      "Perfect coffee shop for meetings downtown. Great cappuccinos, sound-absorbing decor, and private tables. We've booked their back room for monthly team brainstorming sessions.",
    name: "Olivia M.",
    title: "Startup CEO & Regular Customer",
  },
  {
    quote:
      "This local gem has the friendliest coffee shop staff who remember my regular order. Their loyalty program gives the best free drink rewards in the city!",
    name: "Alex Kim",
    title: "Neighborhood Resident",
  },
  {
    quote:
      "As a food critic, I'm impressed by their farm-to-table bakery items. The almond croissant pairs perfectly with their signature medium-roast blend. A must-visit cafe!",
    name: "Bookworms United Group",
    title: "Local Food Critics Association",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-amber-900/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-cormorant font-semibold text-center mb-16"
        >
          Community Voices
        </motion.h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          
        </motion.div> */}
      </div>
    </section>
  );
}
