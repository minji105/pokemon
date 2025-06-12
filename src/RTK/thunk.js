import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    const numArr = Array.from({ length: maxPokemonId }, (_, i) => i + 1);

    const fetchAPI = async (id) => {
      const respense = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      const data = await respense.json();

      const pokemonData = {
        id: id,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: [
          ...new Set(
            data.flavor_text_entries
              .filter((el) => el.language.name === "ko")
              .map((el) => el.flavor_text)
          ),
        ],
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
      };
      return pokemonData;
    };

    return await Promise.all(numArr.map((el) => fetchAPI(el)));
  }
);
