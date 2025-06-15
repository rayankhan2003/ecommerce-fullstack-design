import { Suspense } from 'react';
import EcommerceHeader from '@/components/ecommerce-header';
import Footer from '@/components/footer';
import ProductListing from '@/components/product-listing';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductListing />
      </Suspense>
      <Footer />
    </div>
  );
}
