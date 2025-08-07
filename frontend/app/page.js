import About from "./components/About";
import Banner from "./components/Banner";
import Highlights from "./components/Highlights";
import Industries from "./components/Industries";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Products />
      <Industries />
      <Highlights />
    </main>
  );
}
