import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/demk1ru75/image/upload/v1/rooms/jrfvydhj2q4lfgiwwiik?_a=DAGAACAVZAA0",
  "https://res.cloudinary.com/demk1ru75/image/upload/v1/rooms/j4lwyjs7lvfixe8mx0sq?_a=DAGAACAVZAA0",
  "https://res.cloudinary.com/demk1ru75/image/upload/v1/product-images/m38cfmv9dpmjaj9x2ybt?_a=DAGAACAVZAA0",
  "https://res.cloudinary.com/demk1ru75/image/upload/v1/product-images/ubeeqsy5siugdzumsyo2?_a=DAGAACAVZAA0"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="font-sans w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 border mt-4">
      {/* Left side */}
      <div className="bg-white flex flex-col justify-center px-28 py-16 items-start">
        <p className="uppercase text-gray-500 text-[16px] tracking-widest mb-2 flex items-center gap-2">
          <span className="w-12 h-[2px] bg-gray-700"></span>
          Our Bestsellers
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
          Latest Arrivals
        </h1>
        <a
          href="#"
          className="uppercase text-sm font-semibold text-gray-800 flex items-center gap-2"
        >
          Shop Now
          <span className="w-12 h-px bg-gray-500"></span>
        </a>
      </div>

      {/* Right side - Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
