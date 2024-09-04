// src/PokemonById.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Pokemon from "./Pokemon";

const PokemonById = () => {
  const { id } = useParams();
  return <Pokemon id={id} />;
};

export default PokemonById;
