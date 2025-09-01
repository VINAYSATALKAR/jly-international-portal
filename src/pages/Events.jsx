import React from 'react';

const Events = () => {
  return (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-montserrat mb-4">
          Calendar & Events
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Expand your network and explore growth opportunities at JLY’s curated events.
        </p>

        {/* Placeholder for event listings */}
        <div className="space-y-8 max-w-2xl mx-auto text-left">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-700">Business Growth Roundtable</h3>
                <p className="text-gray-600">Date: [To Be Announced]</p>
                <p className="mt-2">Details: Scale your portfolio through strategic partnerships.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-700">Funding Opportunities Forum</h3>
                <p className="text-gray-600">Date: [To Be Announced]</p>
                <p className="mt-2">Details: Discover the latest investment trends and meet high-growth businesses.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Events;