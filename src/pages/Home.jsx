import Hero from "../components/Hero";
import LatestCollectionSection from "../components/LatestCollectionSection";
import Features from "../components/Features";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
      <div className="min-h-screen">
      <Hero />
      <LatestCollectionSection/>
      <Features/>
      <Subscribe />
    </div>
  )
}
