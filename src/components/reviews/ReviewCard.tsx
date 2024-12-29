import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex items-center mb-2">
        <img
          src={review.userAvatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=32&h=32&q=80'}
          alt={review.userName}
          className="w-8 h-8 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{review.userName}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{review.comment}</p>
      <div className="flex items-center text-sm text-gray-500">
        <button className="flex items-center hover:text-blue-500">
          <ThumbsUp className="w-4 h-4 mr-1" />
          Helpful ({review.helpfulCount})
        </button>
        <span className="mx-2">•</span>
        <span>{new Date(review.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}