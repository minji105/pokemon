import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import { useState } from "react";
import FavoriteButton from "../components/FavoriteButton";

function Detail() {
  const [isFront, setIsFront] = useState(true);
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div className="relative w-4/5 m-auto border-2 border-black grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr]">
      <FavoriteButton pokemonId={Number(pokemonId)} position="top-4 left-4" />
      <div className="basis-1/2 p-12 flex flex-col items-center border-black outline outline-1">
        <img className="w-full" src={isFront ? pokemon.front : pokemon.back} />
        <button
          className="w-min bg-black py-2 px-4 text-white text-2xl rounded-3xl border-2 border-black
                      hover:bg-transparent hover:text-black active:bg-yellow-300"
          onClick={() => setIsFront((prev) => !prev)}
        >
          click
        </button>
      </div>
      <div className="basis-1/2 px-4 outline outline-1">
        <p className="border-b-2 border-black py-4 text-xl font-semibold">
          전국: <span className="text-2xl font-thin">{pokemon.id}</span>
        </p>
        <p className="border-b-2 border-black py-4 text-xl font-semibold">
          이름: {pokemon.name}
        </p>
        <p className="border-b-2 border-black py-4 text-xl font-semibold">
          분류: {pokemon.genera}
        </p>
        <div className="py-4">
          {pokemon.description.map((line, i) => (
            <p key={i} className="text-xl font-semibold">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
