import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Cards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function requestPokemons(
      URL = "https://pokeapi.co/api/v2/pokemon/1"
    ) {
      setIsLoading(true);

      await axios.get(URL).then(response => {
        const poks = [];
        response.data.results.map(
          async poke =>
            await axios.get(poke.url).then(res => poks.push(res.data))
        );
        setPokemons(poks);
      });

      setIsLoading(false);
    }

    requestPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50");
  }, []);

  if (isLoading) {
    return <h1>loading pokemos...</h1>;
  }

  return (
    <ul className="pokemons">
      {pokemons.map(pokemon => (
        <Card
          key={pokemon.name}
          id={pokemon.id}
          name={pokemon.name}
          sprites={pokemon.sprites}
        />
      ))}
    </ul>
  );
};

export default Cards;
/* <Card
          key={pokemon.name}
          name={pokemon.name}
          sprite={pokemon.sprites.default}
        /> */
