import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SupplierRequestSection() {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-sm" style={{ width: "1180px", height: "480px" }}>
      {/* Blue gradient background with warehouse image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300">
        <img
          src="/images/services/warehouse-background.png"
          alt="Warehouse background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full">
        {/* Left side with text */}
        <div className="flex-1 p-8 flex flex-col justify-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            An easy way to send
            <br />
            requests to all suppliers
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right side with white form container */}
        <div className="w-96 p-6 flex items-center">
          <div className="bg-white rounded-lg p-6 w-full shadow-lg">
            <h4 className="text-base font-semibold mb-4 text-gray-900">Send quote to suppliers</h4>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What item you need?</label>
                <Textarea placeholder="Type more details" className="resize-none h-20 border-gray-200" />
              </div>
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <Input type="number" className="border-gray-200" />
                </div>
                <div className="w-20">
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
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">Send inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
