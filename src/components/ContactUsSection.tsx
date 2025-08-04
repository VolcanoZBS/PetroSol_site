const ContactUsSection = () => {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-12 mt-12">
          Contactează-ne pentru informații suplimentare sau o demonstrație!
        </h2>
        
        {/* Trimite un mesaj sau sună */}
        <div className="text-center mb-12">
          <h3 className="text-2xl text-gray-700 mb-4">
            Trimite un mesaj sau sună
          </h3>
          <a 
            href="tel:+40 738 100 70" 
            className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
          >
            +40 738 100 070
          </a>
        </div>

        {/* Formular de contact */}
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Nume"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Companie"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              placeholder="Telefon"
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
            placeholder="Subiect (opțional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />

          <textarea
            placeholder="Mesaj"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 text-white px-8 py-3 rounded-md hover:bg-emerald-600 transition-colors font-medium"
            >
              Trimite mesaj
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
