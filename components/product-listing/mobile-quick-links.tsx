'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface MobileQuickLinksProps {
  categories?: string[];
  showOn?: string; // optional route-based show control
}

const defaultCategories = [
  'All Category',
  'Hot Offers',
  'Gift Boxes',
  'Clothes',
  'Accessory',
];

export default function MobileQuickLinks({
  categories = defaultCategories,
  showOn,
}: MobileQuickLinksProps) {
  const pathname = usePathname();

  // If `showOn` is defined, only show on that route
  if (showOn && pathname !== showOn) return null;

  return (
    <div className="block lg:hidden px-4 mt-3 bg-white">
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2">
        {categories.map((item) => (
          <span
            key={item}
            className="text-xs bg-gray-100 text-[#377fe7] px-3 py-3 rounded-sm mb-3 cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition"
            style={{ fontSize: '18px' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
