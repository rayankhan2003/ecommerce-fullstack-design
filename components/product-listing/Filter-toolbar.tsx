'use client';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Grid3X3, List } from 'lucide-react';

interface FilterToolbarProps {
  totalItems: number;
  currentCategory: string;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

export default function FilterToolbar({
  totalItems,
  currentCategory,
  viewMode,
  setViewMode,
}: FilterToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between px-2 mb-2 bg-white py-2 rounded-md shadow-sm gap-y-3">
      {/* Left: Total items and category (hidden on mobile) */}
      <div className="hidden md:block">
        <span className="text-sm text-gray-600">
          {totalItems.toLocaleString()} items in{' '}
        </span>
        <span className="font-medium">{currentCategory}</span>
      </div>

      {/* Right: Filters and view modes */}
      <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
        {/* Verified only checkbox (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-2">
          <Checkbox />
          <span className="text-sm">Verified only</span>
        </div>

        {/* Sorting */}
        <Select defaultValue="newest">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-32 md:hidden">
            <SelectValue placeholder="Filters (3)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wireless">Wireless</SelectItem>
            <SelectItem value="eco-friendly">Eco-friendly</SelectItem>
            <SelectItem value="compact">Compact</SelectItem>
          </SelectContent>
        </Select>

        {/* Grid/List toggle */}
        <div className="flex border rounded overflow-hidden">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 ${
              viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 ${
              viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
