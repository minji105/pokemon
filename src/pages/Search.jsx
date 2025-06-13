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

  return (
    <>
      {pokemon.length ? (
        <div className="w-4/5 mx-auto mb-15 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-2 border-black">
          {pokemon.map((el) => (
            <Card key={el.id} pokemon={el} />
          ))}
        </div>
      ) : (
        <div className="w-4/5 mx-auto mb-15 py-40 flex justify-center border-2 border-black text-xl font-bold">
          검색 결과가 없습니다.
        </div>
      )}
    </>
  );
}

export default Search;
