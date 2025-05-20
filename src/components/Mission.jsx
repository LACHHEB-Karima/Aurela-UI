export default function Mission() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full px-4 py-4 md:w-1/2">
          <img 
            src="https://res.cloudinary.com/demk1ru75/image/upload/v1/rooms/gs4jumhklofe7hxnnfvc?_a=DAGAACAVZAA0" 
            alt="Elegant perfume bottles arranged on a marble surface" 
            className="w-full h-full max-h-[600px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-700">
            AURELA was created from a deep appreciation for elegance, self-expression, and the transformative power of scent. We believe that a signature fragrance should do more than smell good—it should evoke memories, elevate confidence, and make a lasting impression.
          </p>
          
          <p className="text-gray-700">
            From soft florals to rich orientals and timeless musks, our curated collection of premium perfumes is crafted for those who value individuality and sophistication. At AURELA, each bottle is a story waiting to unfold—designed with care, blended with passion, and meant to linger beautifully.
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
        At AURELA, our mission is to inspire confidence and elegance through fragrance. We are dedicated to offering luxurious, high-quality perfumes that help our customers feel bold, beautiful, and unforgettable—every single day.
      </p>
    </div>
  );
}
