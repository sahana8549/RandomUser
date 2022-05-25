import React, { useContext } from "react";
import { RootContext } from "../RootContext";
import "./Card.css";

const Card = () => {
  const { state } = useContext(RootContext);
  const { image, gender1, nationality } = state;
  // console.log(gender1);

  return (
    <>
      {image?.map((details, index) => {
        const { email, name, picture, gender, selectedItem } = details;

        if (gender.toLowerCase() == gender1.toLowerCase() || gender1 == "All") {
          return (
            <div className="cardCon" key={index}>
              <img src={picture?.thumbnail} alt="image" className="image" />
              <div className="name">
                <p>{`${name?.title} ${name?.first} ${name?.last} (${nationality}) `}</p>
                <p>{email}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Card;
