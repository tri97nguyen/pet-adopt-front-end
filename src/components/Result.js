import React from "react";
import Pet from "./Pet";
const Result = (props) => {
  console.log(`props.pets is ${props.pets}`);
  if (props.pets.length === 0) {
    return <div className="search">No Pet Found</div>;
  }
  const pets = props.pets.map((pet) => (
    <Pet
      key={pet.id}
      id={pet.id}
      name={pet.name}
      breed={pet.breeds.primary}
      media={pet.photos}
      location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
    />
  ));
  return <div className="search">{pets}</div>;
};

export default Result;
