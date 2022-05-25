export const INTIAL_STATE = {
  gender1: "Male",
  nationality: "AU",
  image: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_GENDER": {
      return { ...state, gender1: action.payload };
    }
    case "CHANGE_NATIONALITY": {
      return { ...state, nationality: action.payload };
    }
    case "GET_USERS": {
      return { ...state, image: action.payload };
    }
    default: {
      return state;
    }
  }
};
