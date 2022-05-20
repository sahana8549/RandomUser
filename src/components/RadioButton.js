import React, { useContext } from "react";
import { RootContext } from "../RootContext";
import "./RadioButton.css";

function RadioButtons() {
  const genders = [" Male", " Female", " All"];
  const { gender, setGender } = useContext(RootContext);

  const handleGenders = (e) => {
    setGender(e.target.value);
  };

  return (
    <>
      {genders.map((gen, index) => (
        <div key={index}>
          <input
            className="button"
            type="radio"
            value={gen}
            name="gender"
            id={gen}
            checked={gender === gen}
            onChange={handleGenders}
          />
          <label className="radio-btn-label" htmlFor={`${gen}`}>
            {gen}
          </label>
        </div>
      ))}
    </>
  );
}

export default RadioButtons;
