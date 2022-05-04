import React from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ListItems from "./components/ListItems";
import ShowItem from "./components/ShowItem";

function App() {
  return (
    <div className="App">
      <AddItem />
      <ShowItem />
      <ListItems />
    </div>
  );
}

export default App;
