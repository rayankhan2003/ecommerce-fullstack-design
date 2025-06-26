'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/product-detail/breadcrumb';
import ProductGallery from '@/components/product-detail/image-gallery';
import ProductInfo from '@/components/product-detail/product-info';
import SupplierInfo from '@/components/product-detail/supplier-info';
import TabsSection from '@/components/product-detail/tabs-section';
import RelatedProducts from '@/components/product-detail/related-products';
import DiscountBanner from '@/components/product-detail/discount-banner';

export default function ProductDetail({ productId }: { productId: string }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-6">
      <Breadcrumb />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProductGallery
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <ProductInfo
          selectedImage={selectedImage}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <SupplierInfo />
      </div>

      <TabsSection />
      <RelatedProducts />
      <DiscountBanner />
    </div>
  );
}
