import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import Header from "./layout/header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/detail/:pokemonId"} element={<Detail />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/favorite"} element={<Favorite />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
