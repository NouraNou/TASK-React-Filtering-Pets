import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";

function PetsList() {
  const [Type, setType] = useState("");

  function handleType(event) {
    setType(event.target.value);
  }

  const filteredPets = pets.filter((pet) => {
    return pet.name.toLowerCase().includes(query.toLowerCase());
  });
  const petList = filteredPets.map((pet) => <PetItem pet={pet} key={pet.id} />);
  const [query, setQuery] = useState("");

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={updateQuery}
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={handleType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
