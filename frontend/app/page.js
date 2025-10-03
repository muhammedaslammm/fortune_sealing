import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Highlights from "./components/Highlights";
import Industries from "./components/Industries";
import MissionStatement from "./components/MissionStatement";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <Products />
      <Highlights />
      <Industries />
      <MissionStatement />
      <Contact />
    </main>
  );
}
