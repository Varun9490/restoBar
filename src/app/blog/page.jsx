// app/blog/page.jsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    slug: "coffee-traditions",
    title: "The Rich Traditions of Coffee",
    excerpt: "Discover how coffee culture evolved over centuries.",
    image: "/blog/post1.jpg",
  },
  {
    slug: "roasting-secrets",
    title: "Roasting Secrets Revealed",
    excerpt: "An inside look at artisanal roasting techniques.",
    image: "/blog/post2.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Our Coffee Stories
        </h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-amber-100/70">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
