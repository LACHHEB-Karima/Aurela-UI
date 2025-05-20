import Title from "./Title";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Exquisite Craftsmanship",
      description:
        "Each AURELA fragrance is expertly blended by perfumers who understand the art and science of scent, delivering timeless elegance in every bottle.",
    },
    {
      title: "Authenticity Guaranteed",
      description:
        "We offer only 100% authentic perfumes—no imitations, no compromises. Every product is sourced from trusted partners to ensure you receive the original luxury experience.",
    },
    {
      title: "Tailored Experience",
      description:
        "From our minimalist, elegant website to our dedicated support team, AURELA is designed to make your fragrance journey smooth, personalized, and unforgettable.",
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
