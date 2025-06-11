import EcommerceHeader from "@/components/ecommerce-header"
import Footer from "@/components/footer"
import ShoppingCart from "@/components/shopping-cart"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceHeader />
      <ShoppingCart />
      <Footer />
    </div>
  )
}
