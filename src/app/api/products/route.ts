import { NextResponse } from 'next/server';
import { Product } from '@/types';

// This would typically come from a database
const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    category: 'electronics',
    image: '/images/products/headphones.jpg',
    stock: 15,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    category: 'electronics',
    image: '/images/products/smartwatch.jpg',
    stock: 10,
    rating: 4.3
  },
  {
    id: '3',
    name: 'Gaming Laptop',
    description: 'Powerful gaming laptop with RTX graphics',
    price: 1499.99,
    category: 'electronics',
    image: '/images/products/laptop.jpg',
    stock: 5,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Smartphone',
    description: 'Latest smartphone with advanced camera system',
    price: 899.99,
    category: 'electronics',
    image: '/images/products/phone.jpg',
    stock: 20,
    rating: 4.6
  },
  {
    id: '5',
    name: 'Tablet',
    description: '10-inch tablet perfect for work and entertainment',
    price: 449.99,
    category: 'electronics',
    image: '/images/products/tablet.jpg',
    stock: 12,
    rating: 4.4
  }
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const product = await request.json();
  // In a real application, you would validate and save to a database
  products.push({ ...product, id: (products.length + 1).toString() });
  return NextResponse.json(product, { status: 201 });
} 