import React from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );

        setTodos(newTodo);
        setEditTodo("");
    };
    const onInputChang = (e) => {
        setInput(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([
                ...todos,
                { id: uuidv4(), title: input, completed: false },
            ]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input
                placeholder="Enter a Todo..."
                className="task-input"
                type="text"
                value={input}
                required
                onChange={onInputChang}
            />
            <button type="submit" className="button-add">
                Add
            </button>
        </form>
    );
};

export default Form;
