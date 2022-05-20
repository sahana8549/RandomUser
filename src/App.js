import "./App.css";
import { useState, useEffect, useContext } from "react";
import Card from "./components/Card";
import { RootContext, Rootprovider } from "./RootContext";
import axios from "axios";

const list = [
  { id: 0, label: "AU" },
  { id: 1, label: "BR" },
  { id: 2, label: "CA" },
  { id: 3, label: "CH" },
  { id: 4, label: "DE" },
  { id: 5, label: "DK" },
  { id: 6, label: "ES" },
  { id: 7, label: "FI" },
  { id: 8, label: "FR" },
  { id: 9, label: "GB" },
  { id: 10, label: "IE" },
  { id: 11, label: "IR" },
  { id: 12, label: "NO" },
  { id: 13, label: "NL" },
  { id: 14, label: "NZ" },
  { id: 15, label: "TR" },
  { id: 16, label: "US" },
];

function App() {
  const [gender, setGender] = useState("male");
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(list);
  const [selectedItem, setSelectedItem] = useState(null);
  const { setImage } = useContext(RootContext);
  const Url = `https://randomuser.me/api/?results=20&nat=${selectedItem}&inc=name,gender,email,picture&gender=${gender}`;
  const appendData = () => {
    axios.get(Url).then((body) => setImage(body.data.results));
  };
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  useEffect(() => {
    appendData();
  }, [gender, selectedItem]);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false);
  };
  return (
    <div className="appContainer">
      <form>
        <div>
          <input
            type="radio"
            value="male"
            id="male"
            onChange={handleChange}
            defaultChecked
            name="gender"
          />

          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            value="female"
            id="female"
            onChange={handleChange}
            name="gender"
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            value="all"
            id="all"
            onChange={handleChange}
            name="gender"
          />
          <label htmlFor="all">All</label>
        </div>
      </form>
      <h5>Select Nationality:</h5>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem
            ? items.find((item) => item.id == selectedItem).label
            : "AU"}

          <i className={`fa fa-chevron-down icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item) => (
            <div
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span
                className={`dropdown-item-dot ${
                  item.id === selectedItem && "selected"
                }`}
              >
                •{" "}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <Card />
    </div>
  );
}

export default App;
