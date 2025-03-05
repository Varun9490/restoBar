// app/page.jsx
"use client";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { useEffect } from "react";
import ElegantShape from "@/components/ElegantShape";
import Testimonials from "@/components/testimonials";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 * i,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-rose-900/10 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            width={600}
            height={140}
            rotate={12}
            delay={0.3}
            className="left-[-10%] top-[15%]"
          />
          <ElegantShape
            width={500}
            height={120}
            rotate={-15}
            delay={0.5}
            className="right-[-5%] top-[70%]"
          />
          <ElegantShape
            width={300}
            height={80}
            rotate={-8}
            delay={0.4}
            className="left-[5%] bottom-[5%]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-amber-50 to-amber-100/80">
                Artisan Coffee &
              </span>
              <span
                className={`block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-100 to-rose-200 pb-10 ${pacifico.className}`}
              >
                Community Gathering
              </span>
              <span className="block mt-4 text-lg md:text-xl text-amber-100/60">
                Where exceptional coffee meets warm hospitality
              </span>
            </h1>
            <Link href="/menu">
              <button className="mt-6 px-6 py-3 rounded-md bg-amber-100/10 hover:bg-amber-100/20 text-amber-100">
                Explore Our Menu
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
