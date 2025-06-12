import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-4/5 m-auto grid grid-cols-[1fr_2fr] border-2 border-black border-b-0">
      <div className="col-span-1 flex justify-center items-center outline outline-1">
        <h1 className="p-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
          <Link to="/">pokemon</Link>
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex-grow outline outline-1">
          <Link to="/favorite">Wishlist →</Link>
        </div>
        <div className="flex-grow outline outline-1">Search</div>
      </div>
    </header>
  );
}

export default Header;
