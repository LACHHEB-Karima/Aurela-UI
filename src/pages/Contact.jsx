import Title from "../components/Title";
import Subscribe from "../components/Subscribe";

const Contact = () => {
  return (
    <div className="w-full max-w-7xl mx-auto border-t border-gray-200 px-4 py-8">
        <div className="flex justify-center mb-12">
           <Title text="contact us" />
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-8">
        <div className="w-full px-8 lg:w-1/2">
          <img 
            src="https://res.cloudinary.com/demk1ru75/image/upload/v1/rooms/h0yvtv0kxwh8pbts259t?_a=DAGAACAVZAA0" 
            alt="Workspace with laptop, coffee, small plant and phone"
            className="w-full max-w-[800px] h-auto rounded"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-4">Our Store</h3>
            <p className="text-gray-600">
              10050 Mouline Qbibat<br />
              Num 19, Rabat, MAR
            </p>
          </div>

          <div>
            <p className="text-gray-600">
              Tel: <a href="tel:+14155550132" className="text-gray-700 hover:text-blue-600">(212) 555-0132</a><br />
              Email: <a href="mailto:admin@forever.com" className="text-gray-700 hover:text-blue-600">contact@aurela.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-4">Careers at Aurela</h3>
            <p className="text-gray-600 mb-6">
              Learn more about our teams and job openings.
            </p>
            <a 
              href="#jobs" 
              className="inline-block border border-gray-800 text-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white hover:bg-black transition-colors"
            >
              Explore Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12">
           <Subscribe/>
      </div>
    </div>
  );
};

export default Contact;