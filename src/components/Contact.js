

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      <div className="md:w-1/2 md:order-2 md:ml-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Contact Us
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-800 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded-md border border-blue-300 shadow-lg transition duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded-md border border-blue-300 shadow-lg transition duration-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium">Message</label>
            <textarea
              className="w-full p-2 rounded-md border border-blue-300 shadow-lg transition duration-300"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="md:w-1/2 md:order-1">
        <img
          src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"
          alt="Contact"
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default Contact;
