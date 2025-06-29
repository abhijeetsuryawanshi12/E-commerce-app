import HomeButtons from './components/HomeButtons';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold">Welcome to Our E-commerce Store</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our amazing products with great prices and excellent quality.
        </p>
        
        <HomeButtons />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Free Shipping</h2>
            <p className="text-gray-600">On orders over $50</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Secure Payment</h2>
            <p className="text-gray-600">100% secure payment</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">24/7 Support</h2>
            <p className="text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </main>
  );
}
