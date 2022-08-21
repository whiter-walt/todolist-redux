import React, { useState } from "react";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addNewTask } from "../actions/actions";

const AddTaskInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const addTaskHandler = () => {
    dispatch(addNewTask(inputValue));
    setInputValue("");
  };
  return (
    <>
      <Input
        className="add-task-form"
        size="large"
        placeholder="Add One More Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={addTaskHandler}
      />
      <Button
        type="primary"
        size="large"
        className="add-task-button"
        onClick={addTaskHandler}
      >
        Add Task
      </Button>
    </>
  );
};

export default AddTaskInput;
