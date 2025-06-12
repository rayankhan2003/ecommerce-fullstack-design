import { Card, CardContent } from '@/components/ui/card';

export default function DealsSection() {
  const deals = [
    {
      name: 'Smart watches',
      discount: '-25%',
      image: '/images/products/smartwatch.png',
    },
    { name: 'Laptops', discount: '-15%', image: '/images/products/laptop.png' },
    {
      name: 'GoPro cameras',
      discount: '-40%',
      image: '/images/products/camera.png',
    },
    {
      name: 'Headphones',
      discount: '-25%',
      image: '/images/products/headset.png',
    },
    {
      name: 'Smartphones',
      discount: '-25%',
      image: '/images/products/iphone.png',
    },
  ];

  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-300 max-w-screen-xl mx-auto">
      {/* Mobile Header (Visible on mobile only) */}
      <div className="md:hidden flex justify-between items-center px-4 pt-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Deals and offers</h3>
          <p className="text-sm text-gray-500">Hygiene equipments</p>
        </div>

        <div className="flex gap-1">
          {['13', '34', '56'].map((val, i) => (
            <div
              key={i}
              className="bg-gray-100 text-gray-600 text-center p-1 rounded w-12"
            >
              <div className="text-xl font-bold">{val}</div>
              <div className="text-xs">{['Hour', 'Min', 'Sec'][i]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-row gap-4 h-[240px] px-4">
        {/* Desktop Left: Heading & Timer */}
        <div className="md:w-1/5 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 pt-3">
            Deals and offers
          </h3>
          <p className="text-sm text-gray-500">Hygiene equipments</p>

          <div className="flex gap-1 mt-4">
            {['04', '13', '34', '56'].map((val, i) => (
              <div
                key={i}
                className="bg-[#606060] text-white text-center p-1 rounded w-12"
              >
                <div className="text-xl font-bold">{val}</div>
                <div className="text-xs">
                  {['Days', 'Hour', 'Min', 'Sec'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="md:w-4/5 grid grid-cols-5 gap-0 border-l border-gray-300">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`border-l border-gray-300 ${
                index === 0 ? 'border-l-0' : ''
              }`}
            >
              <Card className="border-0 shadow-none h-full">
                <CardContent className="p-3 flex flex-col items-center justify-center h-full">
                  <div className="h-28 w-full flex items-center justify-center mb-2">
                    <img
                      src={deal.image || '/placeholder.svg'}
                      alt={deal.name}
                      className="h-24 object-contain"
                    />
                  </div>

                  <h4 className="text-sm font-medium text-center">
                    {deal.name}
                  </h4>
                  <span className="mt-1 px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                    {deal.discount}
                  </span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto border-t border-gray-300 mt-4 pl-2">
        <div className="flex gap-3 min-w-[600px]">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="min-w-[160px] border-r border-gray-300 last:border-r-0"
            >
              <Card className="border-0 shadow-none h-full">
                <CardContent className="p-3 flex flex-col items-center justify-center h-full">
                  <div className="h-28 w-full flex items-center justify-center mb-2">
                    <img
                      src={deal.image || '/placeholder.svg'}
                      alt={deal.name}
                      className="h-24 object-contain"
                    />
                  </div>

                  <h4 className="text-sm font-medium text-center">
                    {deal.name}
                  </h4>
                  <span className="mt-1 px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                    {deal.discount}
                  </span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
