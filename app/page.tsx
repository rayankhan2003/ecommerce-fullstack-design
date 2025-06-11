import EcommerceHeader from "@/components/ecommerce-header"
import CategorySidebar from "@/components/category-sidebar"
import HeroBanner from "@/components/hero-banner"
import UserPanel from "@/components/user-panel"
import DealsSection from "@/components/deals-section"
import HomeOutdoorSection from "@/components/home-outdoor-section"
import ConsumerElectronicsSection from "@/components/consumer-electronics-section"
import SupplierRequestSection from "@/components/supplier-request-section"
import RecommendedItems from "@/components/recommended-items"
import ExtraServices from "@/components/extra-services"
import SuppliersByRegion from "@/components/suppliers-by-region"
import NewsletterSubscription from "@/components/newsletter-subscription"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceHeader />

      <main className="mx-auto py-6" style={{ width: "1180px" }}>
        {/* White container holding category, hero banner and login */}
        <div
          className="bg-white rounded-lg shadow-sm py-5 pr-5 mb-8"
          style={{ width: "1180px", height: "400px", paddingLeft: "5px" }}
        >
          <div className="flex gap-6 items-start">
            <div>
              <CategorySidebar />
            </div>
            <div>
              <HeroBanner />
            </div>
            <div>
              <UserPanel />
            </div>
          </div>
        </div>

        {/* Deals Section */}
        <DealsSection />

        {/* Home and Outdoor Section */}
        <div className="mt-8">
          <HomeOutdoorSection />
        </div>

        {/* Consumer Electronics Section */}
        <div className="mt-8">
          <ConsumerElectronicsSection />
        </div>

        {/* Supplier Request Section */}
        <div className="mt-8">
          <SupplierRequestSection />
        </div>

        {/* Recommended Items */}
        <div className="mt-8">
          <RecommendedItems />
        </div>

        {/* Extra Services */}
        <div className="mt-8">
          <ExtraServices />
        </div>

        {/* Suppliers By Region */}
        <div className="mt-8">
          <SuppliersByRegion />
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 mb-8">
          <NewsletterSubscription />
        </div>
      </main>

      <Footer />
    </div>
  )
}
