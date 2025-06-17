'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function NewsletterSection() {
  return (
    <div className=" p-6 mt-8 text-center">
      <h3 className="text-lg font-semibold mb-2">
        Subscribe to our newsletter
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Get daily updates on offers from suppliers around the world.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row max-w-md mx-auto"
      >
        <Input
          placeholder="Enter your email"
          className="rounded-b-none sm:rounded-none sm:rounded-l-md"
        />
        <Button
          type="submit"
          className="mt-2 sm:mt-0 sm:rounded-r-md sm:rounded-l-none bg-blue-600 hover:bg-blue-700"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
