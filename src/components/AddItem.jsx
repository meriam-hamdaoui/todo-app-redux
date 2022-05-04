import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/actions/todoActions";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";

const AddItem = () => {
  const [itemTodo, setItemTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const newItem = e.target.value;
    setItemTodo(newItem);
  };
  const handleClick = () => {
    itemTodo === ""
      ? alert("type somthing first")
      : dispatch(addTodo({ todo: itemTodo, done: false, id: Math.random() })) &&
        setItemTodo("");
  };
  return (
    <div>
      <Card bg="primary">
        <Card.Body>
          <h1 className={"text-white"}>To-Do-App !</h1>

          <Form>
            <Form.Group>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={itemTodo}
                  onChange={(e) => handleChange(e)}
                />
                <Button variant="success" onClick={() => handleClick()}>
                  +
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddItem;
