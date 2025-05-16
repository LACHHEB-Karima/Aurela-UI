import model from "../assets/laura.jpg";

const Hero = () => {
    return (
        <section className="font-sans w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 border mt-4">
            {/* Left side */}
            <div className="bg-white flex flex-col justify-center px-28 py-16 items-start">
                <p className="uppercase text-gray-500 text-[16px] tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-12 h-[2px] bg-gray-700"></span>
                    Our Bestsellers
                </p>
                <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">Latest Arrivals</h1>
                <a
                    href="#"
                    className="uppercase text-sm font-semibold text-gray-800 flex items-center gap-2"
                >
                    Shop Now
                    <span className="w-12 h-px bg-gray-500"></span>
                </a>
            </div>

            {/* Right side */}
            <div className="bg-pink-200 flex items-center justify-center">
                <img
                    src={model}
                    alt="Model"
                    className="object-cover h-full w-full max-h-[900px]"
                />
            </div>
        </section>
    );
};

export default Hero;
