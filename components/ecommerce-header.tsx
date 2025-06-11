import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  User,
  MessageCircle,
  Package,
  ShoppingCart,
  Menu,
  Search,
  ShoppingBag,
} from 'lucide-react';
import Link from 'next/link';

export default function EcommerceHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex items-center justify-between h-16 w-full">
          {/* LEFT: Menu + Logo */}
          <div className="flex items-center space-x-4">
            {/* Menu button (mobile only) */}
            <button className="block lg:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: '#377fe7',
                  boxShadow: '4px 0 0 rgba(13, 110, 253, 0.2)',
                }}
              >
                <ShoppingBag className="h-5 w-5 text-[#c5dcfe]" />
              </div>
              <span className="text-xl font-semibold text-[#8CB7F5]">
                Brand
              </span>
            </Link>
          </div>

          {/* CENTER: Search bar - only on lg+ */}
          <div className="hidden lg:flex items-center flex-1 mx-8 max-w-3xl">
            <Input
              type="text"
              placeholder="Search"
              className="rounded-r-none border-r-0 focus:z-10"
            />
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px] rounded-none border-x-0 focus:z-10 truncate">
                <SelectValue placeholder="All category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All category</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="books">Books</SelectItem>
                <SelectItem value="home">Home & Garden</SelectItem>
              </SelectContent>
            </Select>
            <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 px-6">
              Search
            </Button>
          </div>

          {/* RIGHT: Icons */}
          <div className="flex items-center space-x-6">
            {/* Products */}
            <Link
              href="/products"
              className="hidden lg:flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Package className="h-5 w-5" />
              <span className="text-xs mt-1">Products</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs mt-1 hidden lg:block">My cart</span>
            </Link>

            {/* Profile */}
            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-xs mt-1 hidden lg:block">Profile</span>
            </div>

            {/* Message (hidden on mobile) */}
            <div className="hidden lg:flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs mt-1">Message</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - only on small screens */}
      <div className="block lg:hidden px-4">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm placeholder-gray-500"
          />
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="border-t border-gray-200 hidden lg:block font-">
        <div className="mx-auto lg:pl-[50px] px-4 lg:px-8 max-w-screen-xl">
          <div className="flex items-center justify-between h-12">
            {/* Left Navigation Links */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                <Menu className="h-4 w-4" />
                <span className="text-sm font-medium">All category</span>
              </div>
              <div className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                Hot offers
              </div>
              <div className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                Gift boxes
              </div>
              <div className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                Projects
              </div>
              <div className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                Menu item
              </div>
              <Select defaultValue="help">
                <SelectTrigger className="border-0 bg-transparent text-sm text-gray-700 hover:text-blue-600 w-auto p-0 h-auto">
                  <span className="text-sm font-medium">Help</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="help">Help Center</SelectItem>
                  <SelectItem value="faq">FAQs</SelectItem>
                  <SelectItem value="contact">Contact Us</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Right Options */}
            <div className="flex items-center space-x-4 pr-4">
              <Select defaultValue="english-usd">
                <SelectTrigger className="border-0 bg-transparent text-sm text-gray-700 hover:text-blue-600 w-auto p-0 h-auto">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">English, USD</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english-usd">English, USD</SelectItem>
                  <SelectItem value="spanish-eur">Spanish, EUR</SelectItem>
                  <SelectItem value="french-eur">French, EUR</SelectItem>
                  <SelectItem value="german-eur">German, EUR</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="usa">
                <SelectTrigger className="border-0 bg-transparent text-sm text-gray-700 hover:text-blue-600 w-auto p-0 h-auto">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">Ship to</span>
                    <img
                      src="/images/flags/usa.png"
                      alt="USA flag"
                      className="w-5 h-3.5 object-cover"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa" className="flex items-center gap-2">
                    <img
                      src="/images/flags/usa.png"
                      alt="USA flag"
                      className="w-5 h-3.5 object-cover"
                    />
                    <span>United States</span>
                  </SelectItem>
                  <SelectItem value="uk" className="flex items-center gap-2">
                    <img
                      src="/images/flags/uk.png"
                      alt="UK flag"
                      className="w-5 h-3.5 object-cover"
                    />
                    <span>United Kingdom</span>
                  </SelectItem>
                  <SelectItem
                    value="germany"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="/images/flags/germany.png"
                      alt="Germany flag"
                      className="w-5 h-3.5 object-cover"
                    />
                    <span>Germany</span>
                  </SelectItem>
                  <SelectItem
                    value="france"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="/images/flags/france.png"
                      alt="France flag"
                      className="w-5 h-3.5 object-cover"
                    />
                    <span>France</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
