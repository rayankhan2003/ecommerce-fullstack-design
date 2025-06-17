'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronUp, Star } from 'lucide-react';

interface Category {
  name: string;
  count: number;
}

interface Brand {
  name: string;
  checked: boolean;
}

interface Feature {
  name: string;
  checked: boolean;
}

interface FilterSidebarProps {
  categories: Category[];
  brands: Brand[];
  features: Feature[];
}

export default function FilterSidebar({
  categories,
  brands,
  features,
}: FilterSidebarProps) {
  return (
    <aside className="w-48 space-y-6 hidden md:block text-sm py-3">
      {/* Category */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-900">Category</h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between"
            >
              <span className="text-gray-600">{category.name}</span>
              <span className="text-xs text-gray-400">
                {category.count.toLocaleString()}
              </span>
            </div>
          ))}
          <button className="text-blue-600 hover:underline">See all</button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Brands */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-900">Brands</h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center space-x-2">
              <Checkbox checked={brand.checked} />
              <span className="text-gray-600">{brand.name}</span>
            </div>
          ))}
          <button className="text-blue-600 hover:underline">See all</button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Features */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-900">Features</h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-center space-x-2">
              <Checkbox checked={feature.checked} />
              <span className="text-gray-600">{feature.name}</span>
            </div>
          ))}
          <button className="text-blue-600 hover:underline">See all</button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-900">Price Range</h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>

        <input
          type="range"
          min={0}
          max={1000}
          className="w-full accent-blue-600 mb-3"
        />

        <div className="flex space-x-2">
          <Input placeholder="Min" className="w-20" />
          <Input placeholder="Max" className="w-20" />
        </div>
        <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
          Apply
        </Button>
      </div>

      <hr className="border-gray-200" />

      {/* Condition */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-900">Condition</h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-2">
          {['Any', 'Refurbished', 'Brand new', 'Old items'].map((label, i) => (
            <div key={i} className="flex items-center space-x-2">
              <input type="radio" name="condition" defaultChecked={i === 0} />
              <span className="text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Ratings */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-900">Ratings</h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
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
    </aside>
  );
}
