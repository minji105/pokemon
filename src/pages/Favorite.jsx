import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import Card from "../components/Card";

function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons());

  return (
    <div className="w-4/5 mx-auto mb-15 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-2 border-black">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}

export default Favorite;
