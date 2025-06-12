import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="w-4/5 m-auto grid  border-2 border-black border-b-0
                      md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr]"
    >
      <div className="col-span-1 flex justify-center items-center outline outline-1">
        <h1 className="p-2 text-8xl md:text-7xl lg:text-7xl font-black">
          <Link to="/">pokemon</Link>
        </h1>
      </div>
      <div className="flex flex-col text-3xl">
        <div className="p-4 flex-grow flex items-center justify-end outline outline-1">
          <Link to="/favorite" className="hover:underline">
            Go to Wishlist →
          </Link>
        </div>
        <div className="p-4 flex-grow flex items-center outline outline-1">
          Search
        </div>
      </div>
    </header>
  );
}

export default Header;
