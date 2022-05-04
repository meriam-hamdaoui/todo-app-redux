import React, { useRef } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../JS/actions/todoActions";

const ListItems = () => {
  const todoList = useSelector((state) => state.todos);
  //  console.log(todoList);
  const dispatch = useDispatch();

  //change the value of input
  const inputRef = useRef(true);
  //make our textarea editable on click edit button
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  // function to update the todo item
  const editFunction = (id, value, e) => {
    if (e.key === "Enter") {
      editTodo({ id, todo: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <ListGroup>
      {todoList.length > 0 &&
        todoList.map((item) => (
          <ListGroup.Item
            key={item.id}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              {/* <p ref={inputRef} disabled={inputRef} style={{ margin: "0px" }}>
                {item.todo}
              </p> */}
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.todo}
                onKeyPress={(e) =>
                  dispatch(editFunction(item.id, inputRef.current.value, e))
                }
              />
              <Button onClick={() => changeFocus()} variant="outline-primary">
                Edit
              </Button>
              <Button variant="outline-secondary">Done</Button>
              <Button
                onClick={() => dispatch(deleteTodo({ id: item.id }))}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default ListItems;
