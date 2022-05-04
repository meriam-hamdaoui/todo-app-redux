import React, { useState } from "react";
import ListItems from "./ListItems";
import { useSelector } from "react-redux";

const ShowItem = () => {
  const todoList = useSelector((state) => state.todos);
  const [show, setShow] = useState("onHold");
  return (
    <div>
      <div>
        <button onClick={() => setShow("All")}>All</button>
        <button onClick={() => setShow("onHold")}>On Hold</button>
        <button onClick={() => setShow("done")}>Completed</button>
      </div>
      <ul>
        {todoList.length > 0 && show === "all"
          ? todoList.map((item) => {
              return <ListItems />;
            })
          : null}
      </ul>
    </div>
  );
};

export default ShowItem;
