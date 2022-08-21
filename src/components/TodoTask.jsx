import { useState } from "react";
import { List, Checkbox, Input } from "antd";
import { EditFilled, DeleteFilled, SaveFilled } from "@ant-design/icons";
import { changeTaskStatusDone, deleteTask, updateTask } from "../actions/actions";
import { useDispatch } from "react-redux";

const TodoTask = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const { id, title, isDone } = task;
  const dispatch = useDispatch();

  const editTask = () => {
    setEdit(true);
    setEditValue(title);
  };

  const saveTaskHandler = () => {
    editValue && dispatch(updateTask(id, editValue));
    setEdit(false);
  };

  return (
    <List.Item>
      {!edit ? (
        <>
          <Checkbox
            checked={isDone}
            className={isDone && "task-item-checked"}
            onClick={() => dispatch(changeTaskStatusDone(task))}
          >
            {title}
          </Checkbox>
          <div className="task-btns">
            <DeleteFilled className="icon icon-delete" onClick={()=>dispatch(deleteTask(id))} />
            <EditFilled className="icon icon-edit" onClick={() => editTask()} />
          </div>
        </>
      ) : (
        <Input
          addonAfter={
            <SaveFilled className="icon icon-save" onClick={saveTaskHandler} />
          }
          defaultValue={title}
          onChange={(e) => setEditValue(e.target.value)}
        />
      )}
    </List.Item>
  );
};

export default TodoTask;
