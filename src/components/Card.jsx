function Card({ pokemon }) {
  return (
    <section>
      <div>{pokemon.name}</div>
      <img src={pokemon.front} />
    </section>
  );
}

export default Card;
