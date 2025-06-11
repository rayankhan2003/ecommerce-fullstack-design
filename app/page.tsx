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
    </div>
  );
}
