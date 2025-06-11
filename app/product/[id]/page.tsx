import EcommerceHeader from "@/components/ecommerce-header"
import Footer from "@/components/footer"
import ProductDetail from "@/components/product-detail"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceHeader />
      <ProductDetail productId={params.id} />
      <Footer />
    </div>
  )
}
