'use client';

import Link from 'next/link';
import Button from './ui/Button';

export default function HomeButtons() {
  return (
    <div className="flex justify-center gap-4">
      <Link href="/products">
        <Button size="lg">
          Browse Products
        </Button>
      </Link>
      <Link href="/cart">
        <Button variant="outline" size="lg">
          View Cart
        </Button>
      </Link>
    </div>
  );
} 