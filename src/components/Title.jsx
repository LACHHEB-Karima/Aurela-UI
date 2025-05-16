const Title = ({ text }) => {
  const [first, ...rest] = text.split(" ");
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-xl md:text-2xl uppercase font-light text-gray-500 tracking-wider">
        <span>{first}</span>{" "}
        <span className="text-gray-900">{rest.join(" ")}</span>
      </h2>
      <div className="w-16 h-[1.5px] bg-gray-600"></div>
    </div>
  );
};

export default Title;
