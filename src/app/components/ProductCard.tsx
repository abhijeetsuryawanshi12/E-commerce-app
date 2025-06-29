'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import Button from './ui/Button';
import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);
      await addToCart(product);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-xl border-2 border-secondary-light p-4 hover:shadow-2xl hover:shadow-secondary-light/20 transition-all duration-300 bg-background-card"
    >
      <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-background-main">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="h-full w-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-md"
          />
        </motion.div>
      </div>
      <div className="space-y-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold group-hover:text-primary-main transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-background-dark/70 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-bold text-primary-main">
              ${product.price.toFixed(2)}
            </p>
            {product.stock > 0 && (
              <span className="text-xs px-2 py-1 rounded-full bg-success-light text-success-dark font-medium">
                In Stock
              </span>
            )}
          </div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={handleAddToCart}
              size="sm"
              variant={product.stock > 0 ? "primary" : "ghost"}
              isLoading={isLoading}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </Button>
          </motion.div>
        </div>
        {product.rating && (
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-accent-main'
                    : 'text-accent-light/30'
                }`}
              />
            ))}
            <span className="text-sm text-background-dark/70 ml-1">
              ({product.rating})
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
} 