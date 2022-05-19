import React, { createContext, useEffect, useState } from "react";
export const RootContext = createContext({});

export const Rootprovider = ({ children }) => {
  const [image, setImage] = useState([]);

  return (
    <RootContext.Provider value={{ setImage, image }}>
      {children}
    </RootContext.Provider>
  );
};
