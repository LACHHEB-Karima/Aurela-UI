const Subscribe = () => {
  return (
    <div className="text-center py-12 bg-white">
      <h2 className="text-2xl font-semibold mb-2">Subscribe now & get 20% off</h2>
      <p className="text-gray-500 mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 px-4 py-3 w-96 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
