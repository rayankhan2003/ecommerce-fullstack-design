import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';

export default function SupplierInfo() {
  return (
    <div className="lg:col-span-1">
      <div className="bg-blue-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">S</span>
          </div>
          <div>
            <h3 className="font-semibold">Supplier</h3>
            <p className="text-sm text-gray-600">Guanjoi Trading LLC</p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Country:</span>
            <span>Germany</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Verified Seller:</span>
            <Badge className="bg-green-100 text-green-800">Yes</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Worldwide shipping:</span>
            <Badge className="bg-green-100 text-green-800">Yes</Badge>
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Send inquiry
        </Button>
        <Button variant="outline" className="w-full">
          Seller's profile
        </Button>

        <div className="flex items-center space-x-2 pt-4">
          <Heart className="w-4 h-4" />
          <span className="text-sm">Save for later</span>
        </div>
      </div>
    </div>
  );
}
