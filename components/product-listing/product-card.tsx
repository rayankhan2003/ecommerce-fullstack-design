import { Heart, Star } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number | null;
    rating: number;
    reviews: number;
    description?: string;
    freeShipping?: boolean;
  };
  viewMode: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  return (
    <div
      className={
        viewMode === 'grid'
          ? 'border p-4 rounded-md bg-white hover:shadow-sm transition'
          : 'flex border p-4 rounded-md bg-white space-x-4 hover:shadow-sm transition'
      }
    >
      <Link href={`/product/${product.id}`} className="shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className={
            viewMode === 'grid'
              ? 'w-full h-40 object-contain mb-2'
              : 'w-32 h-32 object-contain'
          }
        />
      </Link>

      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <Link href={`/product/${product.id}`}>
            <h4 className="text-base font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
              {product.name}
            </h4>
          </Link>
          <button className="text-gray-400 hover:text-red-500">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {viewMode === 'list' && product.description && (
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-800">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <div className="flex space-x-0.5">
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
          <span>({product.reviews})</span>
          {product.freeShipping && (
            <span className="text-green-600 font-medium ml-2">
              Free Shipping
            </span>
          )}
        </div>

        <Link
          href={`/product/${product.id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
