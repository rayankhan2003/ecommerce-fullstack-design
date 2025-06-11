import { Button } from '@/components/ui/button';

export default function HomeOutdoorSection() {
  const products = [
    {
      name: 'Soft chairs',
      price: 'USD 19',
      image: '/images/products/table-lamp.png',
    },
    {
      name: 'Sofa & chair',
      price: 'USD 19',
      image: '/images/home-interior-2.png',
    },
    {
      name: 'Kitchen dishes',
      price: 'USD 19',
      image: '/images/products/clay-pot.png',
    },
    {
      name: 'Smart watches',
      price: 'USD 19',
      image: '/images/products/smartwatch.png',
    },
    {
      name: 'Kitchen mixer',
      price: 'USD 100',
      image: '/images/products/juicer.png',
    },
    { name: 'Blenders', price: 'USD 39', image: '/images/products/juicer.png' },
    {
      name: 'Home appliance',
      price: 'USD 19',
      image: '/images/products/coffee-machine.png',
    },
    {
      name: 'Coffee maker',
      price: 'USD 10',
      image: '/images/products/clay-pot.png',
    },
  ];

  return (
    <div
      className="bg-white rounded-md shadow-sm overflow-hidden"
      style={{ width: '1180px', height: '257px' }}
    >
      <div className="flex w-full h-full">
        {/* Left Banner with full background image */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ width: '280px', height: '257px' }}
        >
          <img
            src="/images/home-interior-2.png"
            alt="Home and outdoor plants"
            className="absolute inset-0 w-full h-full object-cover object-left scale-x-[-1] brightness-110"
          />

          {/* Soft light overlay to brighten */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: 'rgba(255, 204, 126, 0.397)',
              opacity: 0.9,
            }}
          />
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Home and
                <br />
                outdoor
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

        {/* Products Grid */}
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
