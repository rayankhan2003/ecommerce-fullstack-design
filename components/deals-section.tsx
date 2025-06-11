import { Card, CardContent } from "@/components/ui/card"

export default function DealsSection() {
  const deals = [
    { name: "Smart watches", discount: "-25%", image: "/images/products/smartwatch.png" },
    { name: "Laptops", discount: "-15%", image: "/images/products/laptop.png" },
    { name: "GoPro cameras", discount: "-40%", image: "/images/products/camera.png" },
    { name: "Headphones", discount: "-25%", image: "/images/products/headset.png" },
    { name: "Smartphones", discount: "-25%", image: "/images/products/iphone.png" },
  ]

  return (
    <div className="bg-white rounded-md p-4 shadow-sm" style={{ width: "1180px" }}>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Deals Header */}
        <div className="md:w-1/5 p-4">
          <h3 className="text-xl font-bold text-gray-900">Deals and offers</h3>
          <p className="text-sm text-gray-500">Hygiene equipments</p>

          <div className="flex gap-2 mt-4">
            <div className="bg-gray-700 text-white text-center p-1 rounded w-12">
              <div className="text-xl font-bold">04</div>
              <div className="text-xs">Days</div>
            </div>
            <div className="bg-gray-700 text-white text-center p-1 rounded w-12">
              <div className="text-xl font-bold">13</div>
              <div className="text-xs">Hour</div>
            </div>
            <div className="bg-gray-700 text-white text-center p-1 rounded w-12">
              <div className="text-xl font-bold">34</div>
              <div className="text-xs">Min</div>
            </div>
            <div className="bg-gray-700 text-white text-center p-1 rounded w-12">
              <div className="text-xl font-bold">56</div>
              <div className="text-xs">Sec</div>
            </div>
          </div>
        </div>

        {/* Deals Products */}
        <div className="md:w-4/5 grid grid-cols-2 md:grid-cols-5 gap-4">
          {deals.map((deal, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="p-3 flex flex-col items-center">
                <img src={deal.image || "/placeholder.svg"} alt={deal.name} className="mb-2 h-24 w-24 object-contain" />
                <h4 className="text-sm font-medium text-center">{deal.name}</h4>
                <span className="mt-1 px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                  {deal.discount}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
