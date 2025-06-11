import { Button } from '@/components/ui/button';

export default function HeroBanner() {
  return (
    <div
      className="overflow-hidden relative"
      style={{ width: '665px', height: '360px' }}
    >
      {/* Full background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero-banner.png"
          alt="Electronic items - laptop, headphones, and smartphone"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content positioned on the left side */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-center">
        <div className="max-w-xs">
          <p className="text-lg text-gray-800 font-medium mb-1">
            Latest trending
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Electronic items
          </h2>
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-100 text-gray-800 border-gray-300 px-6 py-2"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
