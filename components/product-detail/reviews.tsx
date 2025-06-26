'use client';

import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    user: 'Samantha D.',
    rating: 5,
    date: '1 week ago',
    comment:
      'I absolutely love this t-shirt! The quality is amazing and it fits perfectly.',
    avatar: '/images/products/smartphone.png',
  },
  {
    id: 2,
    user: 'Alex M.',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Great product, very comfortable. Would definitely recommend!',
    avatar: '/images/products/tablet.png',
  },
];

export default function Reviews() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-semibold mb-4">Customer Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={review.avatar}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div>
                <span className="font-medium">{review.user}</span>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
