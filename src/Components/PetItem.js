import PetsList from "./PetsList";
import { useState } from "react";

function PetItem({ pet }) {
  const [petImg, setPetImg] = useState(pet.image);
  function handlePet() {
    setPetImg(pet.image2);
  }

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={handlePet}>
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
