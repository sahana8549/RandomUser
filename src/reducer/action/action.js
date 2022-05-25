import axios from "axios";

const actions = (dispatch) => {
  const User = async (gender1, selectedItem) => {
    const Url = `https://randomuser.me/api/?results=20&nat=${selectedItem}&inc=name,gender,email,nat,picture&gender=${gender1}`;
    try {
      axios
        .get(Url)
        .then((res) =>
          dispatch({ type: "GET_USERS", payload: res.data.results })
        );
    } catch (err) {
      console.log(err);
    }
  };

  const changeGender = (gender1) => {
    dispatch({ type: "CHANGE_GENDER", payload: gender1 });
  };

  const changeNationality = (nationality) =>
    dispatch({ type: "CHANGE_NATIONALITY", payload: nationality });
  return { User, changeGender, changeNationality };
};

export default actions;
