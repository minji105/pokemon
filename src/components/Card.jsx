function Card({ pokemon }) {
  return (
    <section className="px-2 flex flex-col flex-grow items-center outline outline-1 hover:bg-teal-100 hover:cursor-pointer">
      <div className="w-full h-12 flex items-center justify-center text-3xl font-black border-b-2 border-black">
        NO.{(pokemon.id + "").padStart(3, "0")}
      </div>
      <div className="w-full h-12 flex items-center justify-center text-xl font-black border-b-2 border-black">
        {pokemon.name}
      </div>
      {/* <div>{pokemon.genera}</div> */}
      <img className="m-4 w-full" src={pokemon.front} />
    </section>
  );
}

export default Card;
