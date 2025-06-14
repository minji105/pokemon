import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Header() {
  const navigate = useNavigate();
  const [atTop, setAtTop] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(headerRef.current.getBoundingClientRect().top === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className={`w-4/5 m-auto grid mt-15 border-2 border-black sticky top-0 bg-[#f2f6f8] z-50
                      md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr]
                      ${atTop ? "border-b-2" : "border-b-0"}`}
    >
      <div className="col-span-1 flex justify-center items-center outline-1">
        <h1 className="p-2 text-7xl font-black">
          <Link to="/" onClick={handleScrollTop}>
            pokemon
          </Link>
        </h1>
      </div>
      <div className="flex flex-col text-2xl md:text-3xl lg:text-3xl">
        <div className="px-4 py-2 md:py-4 lg:py-4 flex-grow flex items-center justify-end outline-1">
          <Link to="/favorite" className="hover:underline">
            Go to Wishlist →
          </Link>
        </div>
        <div className="px-4 py-2 md:py-4 lg:py-4 flex-grow flex gap-4 justify-between items-center outline-1">
          Search
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-black outline-none font-jersey text-xl"
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
