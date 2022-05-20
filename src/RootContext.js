import React, { createContext, useEffect, useState } from "react";
export const RootContext = createContext({});

export const Rootprovider = ({ children }) => {
  const [image, setImage] = useState([]);
  const [gender, setGender] = useState("male");
  return (
    <RootContext.Provider value={{ setImage, image, setGender, gender }}>
      {children}
    </RootContext.Provider>
  );
};
