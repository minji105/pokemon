import { useSelector } from "react-redux";
import Card from "../components/Card";

function Main() {
  const pokemonData = useSelector((state) => state.pokemon);

  if (!pokemonData?.data) return <div>로딩 중...</div>;

  return (
    <div>
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}

export default Main;
