import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd typically send the form data to a backend API or service.
    console.log('Form data submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Address and Phone */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Visit us</h2>
          <p>
            Cafe Cloud <br />
            123 Coffee Ave <br />
            Latte City, 12345 <br />
          </p>
          <p className="mt-4">
            📞 <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
