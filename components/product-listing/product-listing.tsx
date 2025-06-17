// components/product-listing/product-listing.tsx

'use client';
import MobileHeader from '@components/product-listing/mobile-header';
import MobileQuickLinks from '@components/product-listing/mobile-quick-links';
import FilterSidebar from '@components/product-listing/filter-sidebar';
import Breadcrumb from '@/components/product-listing/breadcrumb';
import FilterToolbar from '@/components/product-listing/Filter-toolbar';
import ProductCard from '@/components/product-listing/product-card';
import PaginationControls from '@components/product-listing/pagination-controls';
import ActiveFilters from '@components/product-listing/active-filters';
import NewsletterSection from '@/components/product-listing/newsletter-section';

import { useState } from 'react';

export default function ProductListing() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const products = [
    {
      id: 1,
      name: 'Canon Cine EOS 2000 Black 16x zoom',
      description:
        'Professional-grade camera with 16x zoom, perfect for cinematic shots and high-resolution video production.',
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
      description:
        'Capture every adventure in 4K with advanced stabilization and rugged waterproof design.',
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
      description:
        'Versatile action camera with wide-angle lens and excellent battery life for outdoor shooting.',
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
      description:
        'Next-level performance in a compact body — great for vloggers, athletes, and filmmakers.',
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
      description:
        'High-definition action cam with voice control and built-in mounting for ease of use.',
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
      description:
        '4K video recording, time warp, and live streaming support make this the ultimate action companion.',
      price: 998.0,
      originalPrice: 1128.0,
      rating: 4.9,
      reviews: 156,
      image: '/images/products/smartwatch.png',
      freeShipping: true,
    },
  ];

  const categories = [
    { name: 'Furniture', count: 120 },
    { name: 'Electronics', count: 98 },
    { name: 'Kitchen', count: 65 },
    { name: 'Outdoor', count: 47 },
  ];

  const brands = [
    { name: 'IKEA', checked: false },
    { name: 'Samsung', checked: true },
    { name: 'Apple', checked: false },
    { name: 'Sony', checked: false },
    { name: 'Whirlpool', checked: true },
  ];

  const features = [
    { name: 'Wireless', checked: true },
    { name: 'Eco-friendly', checked: false },
    { name: 'Waterproof', checked: false },
    { name: 'Compact', checked: true },
  ];
  const [activeFilters, setActiveFilters] = useState<string[]>([
    'Samsung',
    'Wireless',
  ]);

  return (
    <div>
      <MobileHeader />
      <MobileQuickLinks
        categories={['Tablets', 'Phones', 'iPod', 'iPad', 'Laptops']}
        showOn="/products"
      />
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-8 py-4">
        <Breadcrumb />

        <div className="flex gap-6">
          {/* Left: Sidebar */}
          <FilterSidebar
            categories={categories}
            brands={brands}
            features={features}
          />

          {/* Right: Toolbar + Products */}
          <div className="flex-1">
            <FilterToolbar
              totalItems={12911}
              currentCategory="Mobile accessory"
              viewMode={viewMode}
              setViewMode={setViewMode}
            />
            <div className="md:hidden mb-4">
              <ActiveFilters
                activeFilters={activeFilters}
                onRemove={(filter) => {
                  setActiveFilters((prev) => prev.filter((f) => f !== filter));
                }}
              />
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
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>
            <PaginationControls />
          </div>
        </div>
        <NewsletterSection />
      </div>
    </div>
  );
}
