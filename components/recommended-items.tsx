import { Card, CardContent } from "@/components/ui/card"

export default function RecommendedItems() {
  const products = [
    {
      id: 1,
      name: "Blue suit jacket for men",
      price: "$79.99",
      image: "/images/products/suit.png",
    },
    {
      id: 2,
      name: "Denim backpack for travel",
      price: "$34.50",
      image: "/images/products/backpack.png",
    },
    {
      id: 3,
      name: "Xiaomi smartphone with fingerprint",
      price: "$299.99",
      image: "/images/products/smartphone.png",
    },
    {
      id: 4,
      name: "Premium leather wallet",
      price: "$45.00",
      image: "/images/products/wallet.png",
    },
    {
      id: 5,
      name: "Canon EOS 2000D DSLR camera",
      price: "$499.00",
      image: "/images/products/camera.png",
    },
    {
      id: 6,
      name: "Gaming headset with microphone",
      price: "$59.99",
      image: "/images/products/headset.png",
    },
    {
      id: 7,
      name: "Premium white headphones",
      price: "$89.99",
      image: "/images/products/white-headphones.png",
    },
    {
      id: 8,
      name: "Red iPhone with dual camera",
      price: "$799.00",
      image: "/images/products/iphone.png",
    },
    {
      id: 9,
      name: "Tablet with high-res display",
      price: "$349.99",
      image: "/images/products/tablet.png",
    },
    {
      id: 10,
      name: "Ultrabook laptop with HD display",
      price: "$1299.00",
      image: "/images/products/laptop.png",
    },
  ]

  return (
    <div className="bg-white rounded-md p-6 shadow-sm" style={{ width: "1180px" }}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended items</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="border hover:shadow-md transition-shadow">
            <CardContent className="p-3">
              <div className="aspect-square flex items-center justify-center mb-2">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-900">{product.price}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{product.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
