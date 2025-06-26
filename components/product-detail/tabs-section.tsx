import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Reviews from './reviews';
export default function TabsSection() {
  return (
    <div className="mt-12">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="seller">About seller</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <div className="bg-white rounded-lg p-8">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="space-y-3">
              {[
                'Some great feature name here',
                'Lorem ipsum dolor sit amet, consectetur',
                'Duis aute irure dolor in reprehenderit',
                'Some great feature name here',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Reviews />
        </TabsContent>
      </Tabs>
    </div>
  );
}
