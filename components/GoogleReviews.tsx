"use client";

export default function GoogleReviews() {
  // This component will display Google reviews
  // You can integrate with Google Reviews API or embed Google Reviews widget
  // For now, we'll create a placeholder that matches the Trustindex style
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Google Reviews</h3>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
            <span className="text-gray-600 font-semibold">5.0 (80+ reviews)</span>
          </div>
        </div>
        <div className="text-4xl">⭐</div>
      </div>
      
      <div className="space-y-4">
        {/* Review 1 */}
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-900">Eddie Rosado</span>
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-gray-700 text-sm">
            &quot;Great high quality and speedy service! Super professional! Best price around! Highly recommend!&quot;
          </p>
        </div>

        {/* Review 2 */}
        <div className="border-l-4 border-cyan-500 pl-4 py-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-900">Paola Ocasio</span>
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-gray-700 text-sm">
            &quot;I worked with Steven from Staten Island wash kings and it was a great experience. Very professional.&quot;
          </p>
        </div>

        {/* Review 3 */}
        <div className="border-l-4 border-teal-500 pl-4 py-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-900">Richard Ryan</span>
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-gray-700 text-sm">
            &quot;These guys are amazing! They go above and beyond. Everything looks like new. They are the best!!!&quot;
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://www.google.com/maps/place/Staten+Island+Wash+Kings"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          View All Reviews on Google
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

