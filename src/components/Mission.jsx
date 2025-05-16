import Title from "./Title"

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img 
            src="/api/placeholder/600/500" 
            alt="Fashion collection display with jeans, sweater, boots and accessories" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-700">
            Forever was born out of a passion for innovation and a desire to revolutionize the way
            people shop online. Our journey began with a simple idea: to provide a platform
            where customers can easily discover, explore, and purchase a wide range of products
            from the comfort of their homes.
          </p>
          
          <p className="text-gray-700">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-
            quality products that cater to every taste and preference. From fashion and beauty to
            electronics and home essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          
          <MissionComponent />
        </div>
      </div>
    </div>
  );
}

function MissionComponent() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-gray-700">
        Our mission at Forever is to empower customers with choice, convenience, and
        confidence. We're dedicated to providing a seamless shopping experience that
        exceeds expectations, from browsing and ordering to delivery and beyond.
      </p>
    </div>
  );
}