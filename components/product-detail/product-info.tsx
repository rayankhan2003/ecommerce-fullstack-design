import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface Props {
  selectedImage: number;
  quantity: number;
  setQuantity: (qty: number) => void;
}

export default function ProductInfo({ selectedImage }: Props) {
  const product = {
    name: "Men's Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    price: 98.0,
    originalPrice: 100.0,
    salePrice: 78.0,
    rating: 4.5,
    reviews: 32,
    sold: 154,
    specifications: {
      type: 'Classic shoes',
      material: 'Plastic material',
      design: 'Modern nice',
    },
  };

  return (
    <div className="lg:col-span-1 space-y-6">
      <div>
        <Badge className="bg-green-100 text-green-800 mb-2">In Stock</Badge>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
          <span className="text-sm text-gray-600">• {product.sold} sold</span>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <span className="text-3xl font-bold text-red-600">
            ${product.salePrice.toFixed(2)}
          </span>
          <span className="text-lg text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="text-lg text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
