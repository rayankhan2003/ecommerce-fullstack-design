import { ShoppingBag, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto px-4 py-12" style={{ width: "1180px" }}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-blue-600">Brand</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                <Facebook className="h-4 w-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                <Twitter className="h-4 w-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                <Linkedin className="h-4 w-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                <Instagram className="h-4 w-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                <Youtube className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Find store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Partnership Section */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Partnership</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Find store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Money Refund
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* For Users Section */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">For users</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                  My Orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Get App Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Get app</h3>
              <div className="flex space-x-3">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2023 Ecommerce.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <img src="/images/flags/usa.png" alt="English" className="w-5 h-3" />
            <span className="text-gray-600 text-sm">English</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
