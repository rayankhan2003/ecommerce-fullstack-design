// components/product-listing/pagination-controls.tsx

'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function PaginationControls() {
  return (
    <div className="flex justify-end items-center mt-8 space-x-4 text-sm">
      {/* Show X dropdown */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Show:</span>
        <Select defaultValue="10">
          <SelectTrigger className="w-20 h-8 px-2 py-1 text-sm border rounded">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center space-x-2 border rounded px-2 py-1">
        <button
          className="p-1 text-gray-500 hover:text-gray-800 disabled:opacity-50"
          disabled
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="px-2 py-1 rounded bg-blue-600 text-white">1</button>
        <button className="px-2 py-1 rounded hover:bg-gray-100">2</button>
        <button className="px-2 py-1 rounded hover:bg-gray-100">3</button>
        <span className="px-1 text-gray-400">...</span>
        <button className="px-2 py-1 rounded hover:bg-gray-100">10</button>
        <button className="p-1 text-gray-500 hover:text-gray-800">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
