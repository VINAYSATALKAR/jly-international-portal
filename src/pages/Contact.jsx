import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 font-montserrat mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Let’s build the future together. Reach out to explore how we can connect you with high-value opportunities.
        </p>

        <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            {/* Contact Form Placeholder */}
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-left font-bold mb-2">Name</label>
                    <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-left font-bold mb-2">Email</label>
                    <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-left font-bold mb-2">Message</label>
                    <textarea id="message" rows="5" className="w-full p-2 border rounded" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="bg-orange-500 text-white w-full py-3 rounded-lg font-bold hover:bg-orange-600">
                    Send Message
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;