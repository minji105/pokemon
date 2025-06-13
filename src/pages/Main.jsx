import { useSelector } from "react-redux";
import Card from "../components/Card";

function Main() {
  const pokemonData = useSelector((state) => state.pokemon);

  if (!pokemonData?.data)
    return (
      <div className="mt-[80px] flex justify-center text-5xl">Loading...</div>
    );

  return (
    <div className="w-4/5 mx-auto mb-15 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-2 border-black">
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}

export default Main;
