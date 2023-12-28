// eslint-disable-next-line no-unused-vars
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="font-bold text-sm sm:text-xl flex flex-wrap">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">LAND</span>
            <span className="text-slate-700">ACRES</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-start">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Home
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            About
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Sign In
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
