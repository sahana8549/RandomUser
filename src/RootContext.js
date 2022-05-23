import React, { createContext, useEffect, useState } from "react";
export const RootContext = createContext({});

export const Rootprovider = ({ children }) => {
  const [image, setImage] = useState([]);
  const [gender1, setGender] = useState("Male");
  return (
    <RootContext.Provider value={{ setImage, image, setGender, gender1 }}>
      {children}
    </RootContext.Provider>
  );
};
