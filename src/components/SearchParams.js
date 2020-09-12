import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";
import Result from "./Result";
import ThemeContext from "./ThemeContext";
import ErrorBoundary from "./ErrorBoundary";

const SearchParams = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, AnimalDropDown, setAnimal] = useDropDown(
    "animal",
    "dog",
    ANIMALS
  );

  const [pets, setPets] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropDown, setBreed] = useDropDown("breed", null, breeds);

  const handdleSubmit = (e) => {
    e.preventDefault();
    const animals = requestAnimal(location, breed, animal);
    console.log(`calling animals in handdleSubmit ${animals}`);
    animals.then((something) => {
      console.log(something);
      setPets(something.animals);
    });
    // setPets(animals);
  };

  useEffect(() => {
    pet.breeds(animal).then((objectBreeds) => {
      console.log(objectBreeds);
      const breedsArray = objectBreeds.breeds.map((obj) => obj.name);
      setBreeds(breedsArray);
    });
  }, [animal]);

  return (
    <div className="search-params">
      <form onSubmit={(e) => handdleSubmit(e)}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <label htmlFor="theme">
          Theme
          <select
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="darkBlue">dark blue</option>
            <option>red</option>
            <option>peru</option>
          </select>
        </label>
        <button style={{ background: theme }}>submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

const requestAnimal = async (location, breed, animal) => {
  try {
    const animals = await pet.animals({ location, breed, type: animal });
    console.log(`calling animals ${animals}`);
    console.log(`calling animals.animals ${animals.animals}`);
    return animals;
  } catch (e) {
    return [];
  }
};

// const SearchParamsWithErrorBoundary = (props) => {
//   return (
//     <ErrorBoundary>
//       <SearchParams {...props} />
//     </ErrorBoundary>
//   )
// }

// export default SearchParamsWithErrorBoundary;

export default SearchParams;
