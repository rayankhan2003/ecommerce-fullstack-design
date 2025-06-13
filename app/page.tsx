import EcommerceHeader from '@/components/ecommerce-header';
import CategorySidebar from '@/components/category-sidebar';
import HeroBanner from '@/components/hero-banner';
import UserPanel from '@/components/user-panel';
import DealsSection from '@/components/deals-section';
import HomeOutdoorSection from '@/components/home-outdoor-section';
import ConsumerElectronicsSection from '@/components/consumer-electronics-section';
import SupplierRequestSection from '@/components/supplier-request-section';
import RecommendedItems from '@/components/recommended-items';
import ExtraServices from '@/components/extra-services';
import SuppliersByRegion from '@/components/suppliers-by-region';
import NewsletterSubscription from '@/components/newsletter-subscription';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceHeader />
      <main className="w-full  lg:px-4 lg:pt-4 ">
        <div className="bg-white lg:rounded-lg shadow-sm p-0 lg:p-6 lg:mb-4 max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-4">
            {/* Sidebar */}
            <div className="w-full lg:w-[220px] mr-4">
              <CategorySidebar />
            </div>

            {/* Hero Banner */}
            <div className="w-full lg:flex-1 lg:px-2">
              <HeroBanner />
            </div>

            {/* User Panel */}
            <div className="w-full lg:w-[220px]">
              <UserPanel />
            </div>
          </div>
        </div>
      </main>

      {/*  Deals Section */}
      <DealsSection />

      {/* Home and Outdoor Section */}
      <HomeOutdoorSection />
      {/* Customer Electronics Section  */}
      <ConsumerElectronicsSection />
      {/* Supplier Request Section */}
      <main className="w-full lg:px-4 lg:pt-4">
        <div className="bg-white lg:rounded-lg shadow-sm p-0 lg:p-0 lg:mb-4 max-w-screen-xl mx-auto">
          <SupplierRequestSection />
        </div>
      </main>
    </div>
  );
}
