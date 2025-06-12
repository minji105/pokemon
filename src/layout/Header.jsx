import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Header() {
  const [atTop, setAtTop] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(headerRef.current.getBoundingClientRect().top === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`w-4/5 m-auto grid  border-2 border-black sticky top-0 bg-[#f2f6f8]
                      md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr]
                      ${atTop ? "border-b-2" : "border-b-0"}`}
    >
      <div className="col-span-1 flex justify-center items-center outline outline-1">
        <h1 className="p-2 text-7xl font-black">
          <Link to="/">pokemon</Link>
        </h1>
      </div>
      <div className="flex flex-col text-2xl md:text-3xl lg:text-3xl">
        <div className="px-4 py-2 md:py-4 lg:py-4 flex-grow flex items-center justify-end outline outline-1">
          <Link to="/favorite" className="hover:underline">
            Go to Wishlist →
          </Link>
        </div>
        <div className="px-4 py-2 md:py-4 lg:py-4 flex-grow flex items-center outline outline-1">
          Search
        </div>
      </div>
    </header>
  );
}

export default Header;
