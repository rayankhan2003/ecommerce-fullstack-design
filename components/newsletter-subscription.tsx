import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSubscription() {
  return (
    <div className="bg-white rounded-md p-6 shadow-sm">
      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe on our newsletter</h3>
        <p className="text-sm text-gray-500 mb-4">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="flex space-x-2">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <Input type="email" placeholder="Email" className="pl-10" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
