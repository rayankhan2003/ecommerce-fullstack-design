import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SupplierRequestSection() {
  return (
    <section className="w-full max-w-screen-xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden relative min-h-[420px] lg:min-h-[420px]">
      {/* Gradient background with overlay image */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300">
        <img
          src="/images/services/warehouse-background.png"
          alt="Warehouse background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full">
        {/* Left Section: Text Content */}
        <div className="flex-1 p-8 pt-6 flex flex-col justify-start text-white">
          <h3 className="text-3xl font-bold leading-snug mb-4">
            An easy way to send
            <br />
            requests to all suppliers
          </h3>
          <p className="text-sm text-white/90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="w-96 p-6 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full shadow-lg">
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Send quote to suppliers
            </h4>
            <form className="space-y-4">
              {/* Item Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What item you need?
                </label>
                <Textarea
                  placeholder="Type more details"
                  className="h-20 resize-none border-gray-200"
                />
              </div>

              {/* Quantity and Unit */}
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <Input type="number" className="border-gray-200" />
                </div>
                <div className="w-20">
                  <label className="block text-sm font-medium text-gray-700 mb-2 invisible">
                    Unit
                  </label>
                  <Select defaultValue="pcs">
                    <SelectTrigger className="border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pcs">Pcs</SelectItem>
                      <SelectItem value="kg">Kg</SelectItem>
                      <SelectItem value="set">Set</SelectItem>
                      <SelectItem value="dozen">Dozen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Send inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
