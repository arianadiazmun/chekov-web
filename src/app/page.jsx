import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./signup/TodoList";


export default function Todo () {
    const[todoItems, setTodoItems] = useState();
    return (
    <main>
        <h1>Chekov Todo List</h1>
        <AddTodo todoItems={todoItems} setTodoItems={setTodoItems}/>
        <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
        </main>
    )
}