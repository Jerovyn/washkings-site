"use client";

import { useState } from "react";

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  image?: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    name: "Eddie Rosado",
    date: "21 October 2025",
    rating: 5,
    text: "Great high quality and speedy service! Super professional! Best price around!...",
    verified: true,
  },
  {
    name: "Paola Ocasio",
    date: "1 August 2025",
    rating: 5,
    text: "I worked with Steven from Staten Island wash kings and it was a great experience...",
    verified: true,
  },
  {
    name: "Brian Neuby",
    date: "15 September 2025",
    rating: 5,
    text: "You want the exterior of your house taken care of Jeremiah Batista is your guy?...",
    verified: true,
  },
  {
    name: "Natalie Bell",
    date: "3 October 2025",
    rating: 5,
    text: "Thank you so much, Jeremiah, for coming out and servicing my home! You and your...",
    verified: true,
  },
];

export default function TrustSignals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overall Rating Section */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">EXCELLENT</h3>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-600 mb-2">Based on 80 reviews</p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Trustindex</span>
            </div>
          </div>
        </div>

        {/* Review Carousel */}
        <div className="relative">
          {/* Review Summary Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">P</div>
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xs">AI</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Review summary</h4>
                <p className="text-sm text-gray-600">Based on 80 reviews</p>
              </div>
            </div>
            <p className="text-gray-700">
              Staten Island Wash Kings offers an exceptional experience with professionalism, punctuality, and thorough cleaning services. Clients appreciate the team&apos;s attention to detail and commitment to quality...
            </p>
            <a href="#" className="text-gray-600 text-sm mt-2 inline-block hover:text-blue-600">
              Read more
            </a>
          </div>

          {/* Individual Reviews Carousel */}
          <div className="relative">
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="overflow-hidden px-12">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="min-w-full px-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900">{review.name}</h5>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        {review.verified && (
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-gray-700 mb-3">{review.text}</p>
                      {review.image && (
                        <div className="mb-3">
                          <img src={review.image} alt="Review" className="w-20 h-20 object-cover rounded" />
                        </div>
                      )}
                      <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trustindex Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
            <span className="text-green-700 font-semibold">Verified by Trustindex</span>
            <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="text-4xl mb-3">🔰</div>
            <h4 className="font-bold text-gray-900 mb-2">Fully Licensed & Insured</h4>
            <p className="text-gray-600 text-sm">Your property is protected</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
            <div className="text-4xl mb-3">🎉</div>
            <h4 className="font-bold text-gray-900 mb-2">$25 Off First Service</h4>
            <p className="text-gray-600 text-sm">New customer special</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
            <div className="text-4xl mb-3">✓</div>
            <h4 className="font-bold text-gray-900 mb-2">100% Satisfaction</h4>
            <p className="text-gray-600 text-sm">Quality guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

