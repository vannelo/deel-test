"use client";

import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

const SearchComponent = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get("/api/characters");
        setPokemonList(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.length > 1) {
      const filteredSuggestions = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter a Pokémon name"
        className="border border-gray-300 rounded p-2"
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.url}>{suggestion.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchComponent;
