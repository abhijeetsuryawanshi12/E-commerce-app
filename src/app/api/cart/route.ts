import { NextResponse } from 'next/server';
import { CartItem } from '@/types';

// In a real application, this would be stored in a database
let cartItems: CartItem[] = [];

export async function GET() {
  return NextResponse.json(cartItems);
}

export async function POST(request: Request) {
  const item = await request.json();
  const existingItem = cartItems.find(i => i.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }

  return NextResponse.json(cartItems);
}

export async function PUT(request: Request) {
  const { id, quantity } = await request.json();
  const item = cartItems.find(i => i.id === id);

  if (item) {
    item.quantity = quantity;
    if (quantity <= 0) {
      cartItems = cartItems.filter(i => i.id !== id);
    }
  }

  return NextResponse.json(cartItems);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  cartItems = cartItems.filter(item => item.id !== id);
  return NextResponse.json(cartItems);
} 