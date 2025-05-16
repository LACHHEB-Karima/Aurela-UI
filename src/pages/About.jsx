import Mission from "../components/Mission";
import WhyChooseUs from "../components/WhyChooseUs";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto border-t border-gray-200 px-4 py-8">
      <div className="flex justify-center mb-12">
           <Title text="about us" />
      </div>
        <Mission />
        <WhyChooseUs/>
        <Subscribe/>
    </div>
  )
}
