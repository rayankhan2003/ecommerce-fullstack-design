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
import { useState } from 'react';

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
    <div className="flex items-center justify-between mb-6 bg-white px-3 py-2 rounded-md shadow-sm">
      <div>
        <span className="text-sm text-gray-600">
          {totalItems.toLocaleString()} items in{' '}
        </span>
        <span className="font-medium">{currentCategory}</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Checkbox />
          <span className="text-sm">Verified only</span>
        </div>

        <Select defaultValue="featured">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>

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
