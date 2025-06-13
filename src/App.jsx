import { lazy, useEffect, Suspense } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { HashRouter, Routes, Route } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Header = lazy(() => import("./layout/Header"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="h-screen x-screen flex justify-center items-center text-5xl">
            loading...
          </div>
        }
      >
        <Header />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
