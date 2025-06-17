'use client';

import React from 'react';
import { ArrowLeft, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-2 py-2 shadow-md md:hidden">
      {/* Back Button */}
      <div className="flex items-center gap-2">
        <ArrowLeft className="h-6 w-6" />

        {/* Title */}
        <span className="text-lg font-semibold tracking-tight ml-3">
          Mobile Accessory
        </span>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Search">
          <User className="h-6  w-6" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Cart">
          <ShoppingCart className="h-7 w-7" />
        </Button>
      </div>
    </header>
  );
}
