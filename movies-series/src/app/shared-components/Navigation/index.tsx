import SearchBar from "../Searchbar";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-m md:px-20 ">
      <span className="font-bold text-3xl text-black cursor-pointer">Exclusive</span>
      <ul className="flex space-x-15 text-lg  text-black ">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/signup" className="hover:underline">Signup</Link></li>
      </ul>
      <SearchBar/>
    </nav>
  );
};

export default Navigation;