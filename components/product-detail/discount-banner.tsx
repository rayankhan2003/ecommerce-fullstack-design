import { Button } from '@/components/ui/button';

export default function DiscountBanner() {
  return (
    <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">
            Super discount on more than 100 USD
          </h3>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">Shop now</Button>
      </div>
    </div>
  );
}
