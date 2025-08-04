const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Details Box */}
        <div className="w-full md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detalii de contact</h2>
          <ul className="text-gray-600 space-y-3">
            <li>
              <strong>Adresă:</strong><br />
              Bulevardul Primăverii 51,<br />
              București, România
            </li>
            <li>
              <strong>Telefon:</strong><br />
              <a href="tel:+40 738 100 070" className="text-blue-600 hover:underline">+40 738 100 070</a>
            </li>
            <li>
              <strong>Email:</strong><br />
              <a href="mailto:office@petrosol.ro" className="text-blue-600 hover:underline">office@petrosol.ro</a>
            </li>
            <li>
              <strong>Program:</strong><br />
              Luni - Vineri: 9:00 - 17:00
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div className="w-full md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden border border-gray-200 shadow-md">
          <iframe
            title="PetroSol București"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.228658000439!2d26.089681576048086!3d44.46948557107517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20258ac275fb9%3A0xad29b7dc896685d2!2sPetrol%20Solutions%20-%20PetroSol!5e0!3m2!1sro!2sro!4v1754040794988!5m2!1sro!2sro"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
