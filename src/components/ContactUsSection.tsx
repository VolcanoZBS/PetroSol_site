import React from 'react';

const ContactUsSection = () => {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-12">
          Contact us for additional information or a demo!
        </h2>
        
        {/* Send a Message or Call */}
        <div className="text-center mb-12">
          <h3 className="text-2xl text-gray-700 mb-4">Send a Message or Call</h3>
          <a 
            href="tel:1-833-363-7359" 
            className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
          >
            1-833-363-7359
          </a>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <input
            type="text"
            placeholder="Subject (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 text-white px-8 py-3 rounded-md hover:bg-emerald-600 transition-colors font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection; 