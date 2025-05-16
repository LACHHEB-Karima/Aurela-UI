import Title from "./Title";
const WhyChooseUs = () => {
  const items = [
    {
      title: "Quality Assurance:",
      description:
        "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
    },
    {
      title: "Convenience:",
      description:
        "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
    },
    {
      title: "Exceptional Customer Service:",
      description:
        "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Title component */}
        <div className="px-6 py-4">
           <Title text="why choose us" />
       </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 text-left">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-16 border border-gray-200 md:border-l-0 ${
              index === 0 ? "md:border-l" : ""
            }`}
          >
            <h3 className="font-bold mb-3">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
