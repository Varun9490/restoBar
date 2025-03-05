// app/blog/[postSlug]/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

// Dummy posts data for demonstration
const posts = [
  {
    slug: "coffee-traditions",
    title: "The Rich Traditions of Coffee",
    content:
      "Coffee has a long and storied past, deeply woven into the cultural fabric of societies around the world. From the ancient coffee ceremonies in Ethiopia to the bustling coffeehouses of 17th-century Europe, the journey of coffee is a fascinating tale of discovery, innovation, and tradition. \n\nIn this post, we explore the origins of coffee cultivation, the rituals that have grown around its preparation, and the way it has shaped social interactions over centuries. The tradition of coffee drinking is not merely about the beverage itself but also about the community, art, and ritual that accompanies it. Whether it's the intricate ceremonies in the Middle East or the modern espresso culture in urban settings, each tradition reflects a unique narrative of passion and innovation. \n\nJoin us as we dive into the rich heritage and evolving practices of coffee consumption that continue to influence our daily lives and inspire new generations of coffee enthusiasts.",
    image: "/blog/post1.jpg",
  },
  {
    slug: "roasting-secrets",
    title: "Roasting Secrets Revealed",
    content:
      "Roasting is the transformative art that unlocks the true flavor of coffee beans. In this post, we pull back the curtain on the artisanal techniques that turn raw, green beans into the aromatic, dark treasures we know as coffee. Learn about the different roasting profiles, from light to dark, and discover how subtle variations in temperature and timing can lead to entirely distinct flavor notes. \n\nOur journey takes you through the science and art behind roasting, where precision meets passion. We'll cover topics such as the Maillard reaction, the role of airflow in the roasting process, and how expert roasters balance acidity, bitterness, and sweetness to create that perfect cup. \n\nWhether you’re a coffee aficionado or a budding barista, understanding these secrets will enhance your appreciation for the complexity behind every cup of coffee. Embrace the art of roasting and discover how it shapes the rich, multifaceted flavors that define your favorite brew.",
    image: "/blog/post2.jpg",
  },
];

export default function BlogDetailPage({ params }) {
  const { postSlug } = params;
  const post = posts.find((p) => p.slug === postSlug);

  if (!post) {
    return (
      <div className="container mx-auto py-12">
        <h2>Post Not Found</h2>
        <Link href="/blog">Go Back to Blog</Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-4 md:px-6 bg-[#0f0a05]">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="text-amber-200 hover:underline mb-4 inline-block"
        >
          &larr; Back to Blog
        </Link>
        <div className="bg-white/5 p-8 rounded-xl shadow-lg">
          <div className="relative h-64 w-full mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-base leading-relaxed">{post.content}</p>
        </div>
      </div>
    </section>
  );
}
