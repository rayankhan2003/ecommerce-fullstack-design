'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Heart,
  Grid3X3,
  List,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

export default function ProductListing() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const products = [
    {
      id: 1,
      name: 'Canon Cine EOS 2000 Black 16x zoom',
      price: 998.0,
      originalPrice: 1128.0,
      rating: 4.5,
      reviews: 154,
      image: '/images/products/iphone.png',
      freeShipping: true,
    },
    {
      id: 2,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 589.0,
      originalPrice: null,
      rating: 4.8,
      reviews: 98,
      image: '/images/products/smartphone.png',
      freeShipping: true,
    },
    {
      id: 3,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 998.0,
      originalPrice: null,
      rating: 4.6,
      reviews: 76,
      image: '/images/products/tablet.png',
      freeShipping: true,
    },
    {
      id: 4,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 998.0,
      originalPrice: 1128.0,
      rating: 4.7,
      reviews: 203,
      image: '/images/products/laptop.png',
      freeShipping: true,
    },
    {
      id: 5,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 998.0,
      originalPrice: null,
      rating: 4.4,
      reviews: 89,
      image: '/images/products/camera.png',
      freeShipping: true,
    },
    {
      id: 6,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 998.0,
      originalPrice: 1128.0,
      rating: 4.9,
      reviews: 156,
      image: '/images/products/smartwatch.png',
      freeShipping: true,
    },
  ];

  const categories = [
    { name: 'Mobile accessory', count: 12911 },
    { name: 'Electronics', count: 8934 },
    { name: 'Smartphones', count: 5621 },
    { name: 'Modern tech', count: 3456 },
  ];

  const brands = [
    { name: 'Samsung', checked: true },
    { name: 'Apple', checked: true },
    { name: 'Huawei', checked: false },
    { name: 'Pocco', checked: false },
    { name: 'Lenovo', checked: false },
  ];

  const features = [
    { name: 'Metallic', checked: false },
    { name: 'Plastic cover', checked: false },
    { name: '8GB Ram', checked: false },
    { name: 'Super power', checked: false },
    { name: 'Large Memory', checked: false },
  ];

  const activeFilters = [
    'Samsung',
    'Apple',
    'Pocco',
    'Xiaomi',
    '4 star',
    '3 star',
  ];

  return (
    <div className="mx-auto py-6 max-w-[1180px] px-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 space-y-6">
          {/* Category */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-gray-600">{category.name}</span>
                  <span className="text-xs text-gray-400">
                    {category.count.toLocaleString()}
                  </span>
                </div>
              ))}
              <button className="text-sm text-blue-600 hover:underline">
                See all
              </button>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center space-x-2">
                  <Checkbox checked={brand.checked} />
                  <span className="text-sm text-gray-600">{brand.name}</span>
                </div>
              ))}
              <button className="text-sm text-blue-600 hover:underline">
                See all
              </button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Features</h3>
            <div className="space-y-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center space-x-2">
                  <Checkbox checked={feature.checked} />
                  <span className="text-sm text-gray-600">{feature.name}</span>
                </div>
              ))}
              <button className="text-sm text-blue-600 hover:underline">
                See all
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Price range</h3>
            <div className="flex space-x-2">
              <Input placeholder="Min" className="w-20" />
              <Input placeholder="Max" className="w-20" />
            </div>
            <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
              Apply
            </Button>
          </div>

          {/* Condition */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Condition</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="radio" name="condition" defaultChecked />
                <span className="text-sm text-gray-600">Any</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="condition" />
                <span className="text-sm text-gray-600">Refurbished</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="condition" />
                <span className="text-sm text-gray-600">Brand new</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="condition" />
                <span className="text-sm text-gray-600">Old items</span>
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Ratings</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Active Filters */}
          <div className="flex items-center space-x-2 mb-4">
            {activeFilters.map((filter) => (
              <span
                key={filter}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
              >
                {filter}
                <button className="ml-1 text-blue-600 hover:text-blue-800">
                  ×
                </button>
              </span>
            ))}
            <button className="text-sm text-blue-600 hover:underline">
              Clear all filter
            </button>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-sm text-gray-600">12,911 items in </span>
              <span className="font-medium">Mobile accessory</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox />
                <span className="text-sm">Verified only</span>
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border rounded">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
                : 'space-y-4'
            }
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      className="w-full h-48 object-contain mb-3"
                    />
                  </Link>
                  <button className="absolute top-2 right-2 p-1">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                    {product.freeShipping && (
                      <span className="text-xs text-green-600">
                        Free Shipping
                      </span>
                    )}
                  </div>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-sm text-gray-700 line-clamp-2 hover:text-blue-600">
                      {product.name}
                    </h3>
                  </Link>
                  <Link
                    href={`/product/${product.id}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <span className="text-sm text-gray-600">Show 10</span>
            <button className="p-2 border rounded hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">
              3
            </button>
            <span>...</span>
            <button className="p-2 border rounded hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-lg p-6 mt-8 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Subscribe on our newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
            <div className="flex max-w-md mx-auto">
              <Input placeholder="Email" className="rounded-r-none" />
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
