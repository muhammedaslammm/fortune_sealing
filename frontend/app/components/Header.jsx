import Link from "next/link";

const Header = () => {
  return (
    <header className="border--section">
      <div className="w-[85%] mx-auto flex justify-between items-center py-4">
        <div className="font-semibold text-[1.2rem]">Fortune Solutions</div>
        <nav className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/highlights">Highlights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
