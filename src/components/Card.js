import React, { useContext } from "react";
import { RootContext } from "../RootContext";
import "./Card.css";

const Card = () => {
  const { image } = useContext(RootContext);
  console.log(image);
  return (
    <>
      {image?.map((details, index) => {
        const { email, name, picture } = details;
        return (
          <div className="cardCon">
            <img src={picture?.thumbnail} alt="image" className="image" />
            <div className="name">
              <p>{`${name?.title} ${name?.first} ${name?.last}`}</p>
              <p>{email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
