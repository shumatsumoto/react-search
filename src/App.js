import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import UserData from "./components/UserData";
import "./styles/App.css";

const App = () => {
  const [user, setUser] = useState([]);
  const card = document.getElementById("#user_profile");
  const onSearchSubmit = async (word) => {
    try {
      const result = await axios.get(
        `${"https://api.github.com/users/"}${word}`
      );
      setUser(result.data);
      console.log(result.data);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="App">
      <SearchForm card={card} onSubmit={onSearchSubmit} />
      <UserData user={user} />
    </div>
  );
};

export default App;
