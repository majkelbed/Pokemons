import React from "react";
import { Link } from "@reach/router";

const Card = ({ name, sprites, id }) => {
  return (
    <Link
      to={`/pokemon/${id}`}
      className="Card"
      style={{ border: "1px solid red" }}
    >
      <h2>Name: {name}</h2>
      <img src={sprites.front_default} alt={name} />
      <img src={sprites.back_default} alt={name} />
    </Link>
  );
};

export default Card;
