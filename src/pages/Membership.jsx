import React from 'react';

const Membership = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-montserrat mb-4">
          Membership Plans
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Empower your business with exclusive access to curated partnerships, analytics, and market opportunities.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-md bg-white">
                <h2 className="text-2xl font-bold text-blue-700">Standard</h2>
                <p className="text-3xl font-bold my-4">$99<span className="text-lg font-normal">/mo</span></p>
                <button className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg">Coming Soon</button>
            </div>

            {/* Premium Plan (Highlighted) */}
            <div className="border-2 border-orange-500 p-8 rounded-lg shadow-xl bg-white relative">
                <p className="absolute top-0 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</p>
                <h2 className="text-2xl font-bold text-blue-700">Premium</h2>
                <p className="text-3xl font-bold my-4">$199<span className="text-lg font-normal">/mo</span></p>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">Coming Soon</button>
            </div>

            {/* Elite Plan */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-md bg-white">
                <h2 className="text-2xl font-bold text-blue-700">Elite</h2>
                <p className="text-3xl font-bold my-4">$499<span className="text-lg font-normal">/mo</span></p>
                <button className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg">Coming Soon</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;