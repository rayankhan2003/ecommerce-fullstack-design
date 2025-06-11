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
    <header className="bg-white border-b border-border overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button className="block lg:hidden">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
            <Link href="/" className="flex items-center gap-2 sm:gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#377fe7]"
                style={{ boxShadow: '4px 0 0 rgba(13, 110, 253, 0.2)' }}
              >
                <ShoppingBag className="h-5 w-5 text-[#c5dcfe]" />
              </div>

              <span className="text-xl font-semibold text-blue-400">Brand</span>
            </Link>
          </div>

          {/* CENTER: Search bar - lg+ only */}
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
          <div className="flex items-center gap-6">
            <Link
              href="/products"
              className="hidden lg:flex flex-col items-center text-muted-foreground hover:text-primary"
            >
              <Package className="h-5 w-5" />
              <span className="text-xs mt-1">Products</span>
            </Link>
            <Link
              href="/cart"
              className="flex flex-col items-center text-muted-foreground hover:text-primary"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs mt-1 hidden lg:block">My cart</span>
            </Link>
            <div className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <User className="h-5 w-5" />
              <span className="text-xs mt-1 hidden lg:block">Profile</span>
            </div>
            <div className="hidden lg:flex flex-col items-center text-muted-foreground hover:text-primary">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs mt-1">Message</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="block lg:hidden px-4 mt-2 mb-2">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm placeholder-gray-500"
          />
        </div>
      </div>
    </header>
  );
}
