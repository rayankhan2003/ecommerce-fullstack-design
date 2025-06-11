import { Button } from '@/components/ui/button';

export default function ConsumerElectronicsSection() {
  const products = [
    {
      name: 'Smart watches',
      price: 'USD 19',
      image: '/images/products/smartwatch.png',
    },
    { name: 'Cameras', price: 'USD 89', image: '/images/products/camera.png' },
    {
      name: 'Headphones',
      price: 'USD 10',
      image: '/images/products/white-headphones.png',
    },
    {
      name: 'Smart watches',
      price: 'USD 90',
      image: '/images/products/smartwatch.png',
    },
    {
      name: 'Gaming set',
      price: 'USD 35',
      image: '/images/products/headset.png',
    },
    {
      name: 'Laptops & PC',
      price: 'USD 340',
      image: '/images/products/laptop.png',
    },
    {
      name: 'Smartphones',
      price: 'USD 19',
      image: '/images/products/smartphone.png',
    },
    {
      name: 'Electric kettle',
      price: 'USD 240',
      image: '/images/products/kettle.png',
    },
  ];

  return (
    <div
      className="bg-white rounded-md shadow-sm overflow-hidden"
      style={{ width: '1180px', height: '257px' }}
    >
      <div className="flex w-full h-full">
        {/* Left Banner with tech gadgets background */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ width: '280px', height: '257px' }}
        >
          <img
            src="/images/products/tech-gadgets.png"
            alt="Consumer electronics and gadgets"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-gradient-to-r from-white/80 to-transparent">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Consumer
                <br />
                electronics and
                <br />
                gadgets
              </h3>
              <Button
                variant="outline"
                className="mt-4 bg-white hover:bg-gray-100"
              >
                Source now
              </Button>
            </div>
          </div>
        </div>

        {/* ✅ Matched Products Grid */}
        <div className="flex-1 grid grid-cols-4 grid-rows-2 divide-x divide-y">
          {products.map((product, index) => (
            <div key={index} className="p-4 flex items-center">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">From</p>
                <p className="text-sm text-gray-700">{product.price}</p>
              </div>
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
