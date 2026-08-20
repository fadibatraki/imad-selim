"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07070B]">
      {/* Coming soon cover */}
      <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 flex items-center justify-center overflow-hidden bg-[#07070B]/90 px-4 backdrop-blur-xl md:top-[80px]">
        <motion.div
          className="absolute h-80 w-80 rounded-full bg-[#7C3AED]/25 blur-[110px] sm:h-[28rem] sm:w-[28rem]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <motion.div
            className="mb-6 flex justify-center"
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-12 w-12 text-[#A855F7]" />
          </motion.div>
          <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-[#F59E0B] uppercase">
            Perfumes Collection
          </p>
          <h1 className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] bg-clip-text text-5xl leading-tight font-extrabold text-transparent sm:text-7xl lg:text-8xl">
            Coming Soon
          </h1>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E]" />
        </motion.div>
      </div>

      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        {/* Purple glow */}
        <motion.div
          className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/25 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gold glow */}
        <motion.div
          className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[#F59E0B]/18 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Purple glow bottom */}
        <motion.div
          className="absolute bottom-20 left-1/2 h-96 w-96 rounded-full bg-[#7C3AED]/15 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-[120px] pb-20 md:pt-[150px]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl text-center"
            >
              {/* Floating sparkles */}
              <motion.div
                className="mb-6 flex justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="relative">
                  <Sparkles className="h-12 w-12 text-[#7C3AED]" />
                  <motion.div
                    className="absolute inset-0 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-12 w-12 text-[#7C3AED]" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 text-5xl leading-tight font-extrabold md:text-6xl lg:text-7xl"
              >
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] bg-clip-text text-transparent">
                  Perfumes
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg text-white/70 md:text-xl"
              >
                Experience the essence of Kurdish heritage through our signature
                collection. Each fragrance tells a story, capturing the soul of
                ancient traditions and timeless melodies.
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E]"
              />
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="relative pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {/* Empty state message (hidden when products exist) */}
            {products.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <p className="text-xl text-white/50">
                  No products available yet.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
