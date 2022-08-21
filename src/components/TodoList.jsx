import {List} from 'antd'
import TodoTask from './TodoTask';
import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
const todos = useSelector(state=>state.todoReducer.todos)
    return (
        <List
        size="large"
        bordered
        dataSource={todos}
        renderItem={(task) => <TodoTask key={todos.id} task={task}/>}
      />
    )
}

export default TodoList;