import React, { useContext } from "react";
import { RootContext } from "../RootContext";
import "./RadioButton.css";

function RadioButtons() {
  const genders = ["Male", "Female", "All"];
  const { state, action } = useContext(RootContext);
  const { gender1 } = state;
  const handleGenders = (e) => {
    console.log(e.target.value);
    action.changeGender(e.target.value);
  };

  return (
    <form>
      {genders.map((gen, index) => (
        <div key={index}>
          <input
            className="button"
            type="radio"
            value={gen}
            name="gender"
            id={gen}
            checked={gender1 === gen}
            onChange={handleGenders}
          />
          <label className="radio-btn-label" htmlFor={`${gen}`}>
            {gen}
          </label>
        </div>
      ))}
    </form>
  );
}

export default RadioButtons;
