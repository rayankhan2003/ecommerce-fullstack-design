export default function RelatedProducts() {
  const products = Array(6).fill({
    id: 1,
    name: 'Xiaomi Redmi 8',
    price: 32.0,
    originalPrice: 41.0,
    image: '/images/products/smartphone.png',
  });

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Related products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg border p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-24 object-contain mb-3"
            />
            <h3 className="text-sm font-medium mb-2">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">${product.price.toFixed(2)}</span>
              <span className="text-xs text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
