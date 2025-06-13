import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import Card from "../components/Card";

function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);

  return (
    <div className="w-4/5 m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-2 border-black">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}

export default Search;
