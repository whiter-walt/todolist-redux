import AddTaskInput from "./components/AddTaskInput";
import TodoList from "./components/TodoList";
import { Space } from "antd";
import { useSelector } from "react-redux";


const App = () => {
  const tasks = useSelector(state=>state.todoReducer.todos)
  const uncompleted = tasks.filter(i=>!i.isDone).length
  return (
    <div className="app">
      <h1>Todo List React/Redux</h1>
      <Space direction="vertical" className="container">
        <h2>Tasks to do: {uncompleted}</h2>
        <AddTaskInput />
        <TodoList />
      </Space>
    </div>
  );
}

export default App;
