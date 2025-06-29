'use client';

import Link from 'next/link';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';
import { useSession, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';

export default function Header() {
  const { items } = useCart();
  const { data: session } = useSession();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b border-secondary-light/30 bg-background-card sticky top-0 z-50 shadow-lg shadow-secondary-light/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-primary-main hover:text-primary-dark transition-colors">
              E-Store
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-8"
          >
            <Link 
              href="/products" 
              className="text-background-dark hover:text-primary-main transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              href="/categories" 
              className="text-background-dark hover:text-primary-main transition-colors font-medium"
            >
              Categories
            </Link>
            <Link href="/cart" className="relative">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className="text-background-dark hover:text-primary-main transition-colors"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-accent-main text-background-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>
            
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center space-x-2">
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                  className="text-background-dark hover:text-primary-main transition-colors"
                >
                  <UserIcon className="h-6 w-6" />
                </motion.div>
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-background-card border border-secondary-light/30 rounded-xl shadow-xl p-1 focus:outline-none">
                {session ? (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <div className={`px-4 py-2 text-sm rounded-lg ${active ? 'text-primary-main bg-background-main' : 'text-background-dark'}`}>
                          Signed in as {session.user?.email}
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => signOut()}
                          className={`${
                            active ? 'bg-background-main text-primary-main' : 'text-background-dark'
                          } block w-full text-left px-4 py-2 text-sm rounded-lg`}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </>
                ) : (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/auth/signin"
                        className={`${
                          active ? 'bg-background-main text-primary-main' : 'text-background-dark'
                        } block px-4 py-2 text-sm rounded-lg`}
                      >
                        Sign in
                      </Link>
                    )}
                  </Menu.Item>
                )}
              </Menu.Items>
            </Menu>
          </motion.div>
        </nav>
      </div>
    </header>
  );
} 