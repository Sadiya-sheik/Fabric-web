import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import type { Product } from '../types';
import { ReviewForm } from './reviews/ReviewForm';
import { ReviewCard } from './reviews/ReviewCard';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < (product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setShowReviews(!showReviews)}
            className="ml-2 text-sm text-blue-500 hover:text-blue-600"
          >
            {product.reviews?.length || 0} reviews
          </button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>

        {showReviews && (
          <div className="mt-4 border-t pt-4">
            <ReviewForm
              productId={product.id}
              onSubmit={(review) => {
                console.log('New review:', review);
                // Here you would typically send this to your backend
              }}
            />
            {product.reviews?.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}